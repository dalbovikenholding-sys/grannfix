export type Kategori = 'flytta' | 'städ' | 'trädgård' | 'småfix' | 'hämta' | 'bortskänkes'
export type UppdragStatus = 'öppen' | 'accepterad' | 'pågående' | 'slutfört' | 'avbrutet'

export interface Profile {
  id: string
  namn: string
  stad: string
  bio: string | null
  betyg_sum: number
  betyg_antal: number
  verifierad: boolean
  skapad_datum: string
}

export interface Uppdrag {
  id: string
  beställare_id: string
  utförare_id: string | null
  kategori: Kategori
  titel: string
  beskrivning: string
  adress: string
  stad: string
  pris: number
  datum: string
  status: UppdragStatus
  stripe_payment_intent_id: string | null
  skapad_datum: string
  beställare?: Profile
  utförare?: Profile | null
}

export interface Intresseanmalan {
  id: string
  uppdrag_id: string
  utförare_id: string
  meddelande: string | null
  skapad_datum: string
  utförare?: Profile
}

export interface Betyg {
  id: string
  uppdrag_id: string
  från_id: string
  till_id: string
  stjärnor: number
  kommentar: string | null
  skapad_datum: string
}

// Typ för Supabase generics (kan utökas med supabase gen types när schema är på plats)
export type Database = {
  public: {
    Tables: {
      profiles: { Row: Profile; Insert: Omit<Profile, 'skapad_datum'>; Update: Partial<Profile> }
      uppdrag: { Row: Uppdrag; Insert: Omit<Uppdrag, 'id' | 'skapad_datum'>; Update: Partial<Uppdrag> }
      intresseanmalningar: { Row: Intresseanmalan; Insert: Omit<Intresseanmalan, 'id' | 'skapad_datum'>; Update: Partial<Intresseanmalan> }
      betyg: { Row: Betyg; Insert: Omit<Betyg, 'id' | 'skapad_datum'>; Update: Partial<Betyg> }
    }
  }
}
