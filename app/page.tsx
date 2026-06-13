import { Reveal } from '@/components/ScrollReveal'

export default function Home() {
  return (
    <div>

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden px-6"
        style={{ background: 'linear-gradient(145deg, #0f3d21 0%, #1a6b3c 100%)' }}
      >
        {/* Subtle radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(34,160,90,0.18) 0%, transparent 70%)' }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr,400px] gap-12 items-center pt-36 pb-24 relative">

          {/* Left: text */}
          <div>
            {/* Activity badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide text-[#a7d9bc] border border-white/10 bg-white/8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block" style={{ boxShadow: '0 0 6px #4ade80' }} />
              Norrbottens grannplattform
            </div>

            <h1
              className="hero-heading font-extrabold text-white mb-6"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Hjälp av grannen,{' '}
              <span style={{ color: '#a7d9bc' }}>när du behöver det</span>
            </h1>

            <p className="text-lg text-[#a7d9bc] mb-10 leading-relaxed" style={{ maxWidth: '44ch' }}>
              Koppla ihop dig med pålitliga grannar i Luleå och Norrbotten. Du sätter priset, grannen hjälper till.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#kom-igang"
                className="btn-primary bg-white text-[#0f3d21] hover:bg-gray-50 px-7 py-4 rounded-full font-bold text-base"
              >
                Lägg ut ett uppdrag
              </a>
              <a
                href="#hur-det-fungerar"
                className="btn-secondary px-7 py-4 rounded-full font-semibold text-base text-white border border-white/30 hover:bg-white/10"
              >
                Så fungerar det
              </a>
            </div>
          </div>

          {/* Right: floating task card preview */}
          <div className="hidden md:block relative h-80">
            {/* Back card (glass) */}
            <div
              className="absolute top-0 right-0 w-72 rounded-2xl p-5"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.14)',
                transform: 'rotate(3deg)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-white/60 bg-white/10 px-2.5 py-1 rounded-full">Trädgård</span>
                <span className="font-bold text-white text-sm">400 kr</span>
              </div>
              <p className="text-white font-semibold text-sm mb-1">Gräsklippning &amp; krattning</p>
              <p className="text-white/50 text-xs">Piteå · 17 jun · 1 intresserad</p>
            </div>

            {/* Front card (white) */}
            <div
              className="absolute bottom-0 left-0 w-72 bg-white rounded-2xl p-5"
              style={{
                boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
                transform: 'rotate(-1.5deg)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-[#1a6b3c] bg-[#f0faf4] px-2.5 py-1 rounded-full">Flytta &amp; bära</span>
                <span className="font-bold text-[#1a6b3c]">800 kr</span>
              </div>
              <p className="text-gray-900 font-bold text-sm mb-1">Möbelflyttning, 3 rum</p>
              <p className="text-gray-400 text-xs mb-4">Luleå · 15 jun · 2 intresserade</p>
              <button className="w-full bg-[#1a6b3c] text-white text-sm py-2.5 rounded-full font-semibold">
                Visa uppdrag
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FEATURE STRIP ─── */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { title: 'Samma dag', text: 'Hitta en granne inom timmar, ofta redan idag.' },
            { title: 'Du sätter priset', text: 'Ange vad du är villig att betala. Ingen dold prislista.' },
            { title: 'Säker betalning', text: 'Pengarna betalas ut till grannen först när du är nöjd.' },
            { title: 'Lokalt i Norrbotten', text: 'Grannar i Luleå, Boden, Piteå och hela länet.' },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="w-8 h-0.5 bg-[#1a6b3c] mb-4" />
              <p className="font-bold text-gray-900 mb-2 text-sm">{f.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="hur-det-fungerar" className="py-28 px-6 bg-[#f0faf4]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Så enkelt fungerar det
              </h2>
              <p className="text-gray-500 text-lg">Tre steg från behov till klar</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Lägg ut uppdraget', text: 'Beskriv vad du behöver hjälp med, ange tid och sätt ditt pris. Det tar under en minut.' },
              { num: '02', title: 'Välj din granne', text: 'Se profiler och betyg på grannar i närheten. Välj den som passar dig bäst.' },
              { num: '03', title: 'Betala säkert', text: 'Grannen utför jobbet. Du godkänner och betalningen sker direkt i appen.' },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i * 100}>
                <div>
                  <span
                    className="block text-6xl font-extrabold mb-5"
                    style={{ color: 'rgba(26,107,60,0.18)', letterSpacing: '-0.03em' }}
                  >
                    {s.num}
                  </span>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="tjanster" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Vad kan grannen hjälpa med?
              </h2>
              <p className="text-gray-500 text-lg">Allt från tunga lyft till trädgårdsarbete</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: '📦', title: 'Flytta & bära', text: 'Flytt av möbler, bohag och kartonger. Med eller utan bil.' },
              { icon: '🧹', title: 'Städhjälp', text: 'Storstädning, inflyttningsstäd, kontorsstäd.' },
              { icon: '🌿', title: 'Trädgård & snöskottning', text: 'Klippning, krattning, snöröjning och allt däremellan.' },
              { icon: '🚗', title: 'Hämta & lämna', text: 'Upphämtning från butik, återvinning eller transport av saker.' },
              { icon: '🔧', title: 'Småfix & montering', text: 'IKEA-montering, målning, enklare reparationer.' },
              { icon: '🎁', title: 'Bortskänkes & second hand', text: 'Ge bort saker gratis eller hitta någon som hämtar.' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div
                  className="service-card border border-gray-100 rounded-2xl p-7 cursor-default bg-white"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                >
                  <span className="text-2xl block mb-4">{s.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="priser" className="py-28 px-6 bg-[#f0faf4]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Vad kostar det?
              </h2>
              <p className="text-gray-500 text-lg">Du bestämmer priset. Här är exempel på vad grannar brukar ta.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Enkel flytt (1–2 rum)', price: '400–800 kr', note: 'Exkl. transport' },
              { label: 'Större flytt (3–4 rum)', price: '800–1 600 kr', note: 'Exkl. transport' },
              { label: 'Trädgårdsarbete, 2 h', price: '300–600 kr', note: 'Klippning, krattning' },
              { label: 'Storstäd lägenhet', price: '600–1 200 kr', note: 'Ca 3–5 timmar' },
              { label: 'IKEA-montering', price: '200–500 kr', note: 'Per möbel' },
              { label: 'Snöskottning', price: '150–400 kr', note: 'Normalstor uppfart' },
            ].map((p, i) => (
              <Reveal key={p.label} delay={i * 50}>
                <div
                  className="bg-white rounded-2xl p-6 flex items-center justify-between"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                >
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{p.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{p.note}</p>
                  </div>
                  <span className="font-extrabold text-[#1a6b3c] text-lg whitespace-nowrap ml-4">{p.price}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={350}>
            <p className="text-center text-gray-400 text-sm mt-8">
              Grannfix tar en liten serviceavgift när uppdraget är slutfört.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 tracking-tight">
              Vad säger grannarna?
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Anna K.', location: 'Luleå', text: 'Fick hjälp med flytten på tre timmar. Grannen var toppen och priset var rimligt. Rekommenderar starkt!' },
              { name: 'Marcus L.', location: 'Boden', text: 'Lade ut ett snöskottningsjobb på kvällen, grannen kom nästa morgon. Perfekt.' },
              { name: 'Sara N.', location: 'Piteå', text: 'Hjälpte till att bära ut gamla möbler till återvinningen. Enkelt, snabbt och schysst betalt.' },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        id="kom-igang"
        className="py-28 px-6"
        style={{ background: 'linear-gradient(145deg, #0f3d21 0%, #1a6b3c 100%)' }}
      >
        <Reveal>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
              Redo att prova?
            </h2>
            <p className="text-[#a7d9bc] text-lg mb-10 leading-relaxed">
              Registrera dig och lägg ut ditt första uppdrag gratis. Lansering i Luleå hösten 2026.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="flex-1 px-5 py-4 rounded-full text-gray-900 bg-white outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <button
                type="submit"
                className="btn-primary bg-white text-[#0f3d21] hover:bg-gray-50 px-7 py-4 rounded-full font-bold text-sm whitespace-nowrap"
              >
                Anmäl intresse
              </button>
            </form>
          </div>
        </Reveal>
      </section>

    </div>
  )
}
