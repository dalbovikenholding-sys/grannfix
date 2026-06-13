-- Grannfix databasschema
-- Kör detta i Supabase SQL Editor: dashboard.supabase.com → SQL Editor

-- =========================================================
-- TABELLER
-- =========================================================

create table if not exists profiles (
  id            uuid references auth.users on delete cascade primary key,
  namn          text not null,
  stad          text not null,
  bio           text,
  betyg_sum     numeric default 0 not null,
  betyg_antal   int default 0 not null,
  verifierad    boolean default false not null,
  skapad_datum  timestamptz default now() not null
);

create table if not exists uppdrag (
  id                        uuid default gen_random_uuid() primary key,
  beställare_id             uuid references profiles on delete cascade not null,
  utförare_id               uuid references profiles,
  kategori                  text not null check (kategori in ('flytta','städ','trädgård','småfix','hämta','bortskänkes')),
  titel                     text not null,
  beskrivning               text not null,
  adress                    text not null,
  stad                      text not null,
  pris                      int not null check (pris >= 50),
  datum                     date not null,
  status                    text not null default 'öppen'
                              check (status in ('öppen','accepterad','pågående','slutfört','avbrutet')),
  stripe_payment_intent_id  text,
  skapad_datum              timestamptz default now() not null
);

create table if not exists intresseanmalningar (
  id            uuid default gen_random_uuid() primary key,
  uppdrag_id    uuid references uppdrag on delete cascade not null,
  utförare_id   uuid references profiles on delete cascade not null,
  meddelande    text,
  skapad_datum  timestamptz default now() not null,
  unique(uppdrag_id, utförare_id)
);

create table if not exists betyg (
  id            uuid default gen_random_uuid() primary key,
  uppdrag_id    uuid references uppdrag on delete cascade not null,
  från_id       uuid references profiles on delete cascade not null,
  till_id       uuid references profiles on delete cascade not null,
  stjärnor      int not null check (stjärnor between 1 and 5),
  kommentar     text,
  skapad_datum  timestamptz default now() not null,
  unique(uppdrag_id, från_id)
);

-- =========================================================
-- AUTO-SKAPA PROFIL VID REGISTRERING
-- =========================================================

create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, namn, stad)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'namn', 'Ny användare'),
    coalesce(new.raw_user_meta_data->>'stad', 'Luleå')
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- =========================================================
-- UPPDATERA BETYG-SNITT PÅ PROFIL VID NYTT BETYG
-- =========================================================

create or replace function update_profile_betyg()
returns trigger as $$
begin
  update profiles
  set
    betyg_sum   = betyg_sum + new.stjärnor,
    betyg_antal = betyg_antal + 1
  where id = new.till_id;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_betyg_inserted on betyg;
create trigger on_betyg_inserted
  after insert on betyg
  for each row execute function update_profile_betyg();

-- =========================================================
-- ROW LEVEL SECURITY
-- =========================================================

alter table profiles enable row level security;
alter table uppdrag enable row level security;
alter table intresseanmalningar enable row level security;
alter table betyg enable row level security;

-- Profiles: alla kan läsa, bara egna rader kan uppdateras
create policy "Profiles är läsbara för alla"
  on profiles for select using (true);

create policy "Användare kan uppdatera sin egen profil"
  on profiles for update using (auth.uid() = id);

-- Uppdrag: öppna uppdrag läsbara för alla; skapa kräver inloggning
create policy "Öppna uppdrag är läsbara för alla"
  on uppdrag for select using (
    status = 'öppen'
    or auth.uid() = beställare_id
    or auth.uid() = utförare_id
  );

create policy "Inloggade kan skapa uppdrag"
  on uppdrag for insert with check (auth.uid() = beställare_id);

create policy "Beställare kan uppdatera sina uppdrag"
  on uppdrag for update using (auth.uid() = beställare_id);

-- Intresseanmälningar
create policy "Berörda parter kan se intresseanmälningar"
  on intresseanmalningar for select using (
    auth.uid() = utförare_id
    or auth.uid() in (select beställare_id from uppdrag where id = uppdrag_id)
  );

create policy "Inloggade utförare kan anmäla intresse"
  on intresseanmalningar for insert with check (auth.uid() = utförare_id);

create policy "Utförare kan ta bort sitt eget intresse"
  on intresseanmalningar for delete using (auth.uid() = utförare_id);

-- Betyg
create policy "Betyg är offentliga"
  on betyg for select using (true);

create policy "Berörda parter kan sätta betyg"
  on betyg for insert with check (
    auth.uid() = från_id
    and auth.uid() in (
      select beställare_id from uppdrag where id = uppdrag_id
      union
      select utförare_id from uppdrag where id = uppdrag_id
    )
  );
