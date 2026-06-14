import { Reveal, RevealLine } from '@/components/ScrollReveal'
import { CursorGlow, TaskFeedMock } from '@/components/HeroAnimations'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Grannfix | Grannhjälp i Norrbotten – Flytt, Städ, Trädgård & Småfix',
  description:
    'Anlita grannen för flytt, städ, trädgård och småfix i Norrbotten. Du sätter priset, grannen hjälper till samma dag. Snabbt, prisvärt och lokalt i Luleå, Boden och Piteå.',
  alternates: { canonical: 'https://grannfix.se' },
}

const faqItems = [
  {
    q: 'Vad är Grannfix?',
    a: 'Grannfix är en lokal digital marknadsplats som kopplar ihop privatpersoner i Norrbotten för vardagsuppgifter som flytt, städ, trädgård och småfix. Du lägger ut ett uppdrag med ditt pris, en granne i närheten accepterar och utför jobbet.',
  },
  {
    q: 'Hur mycket kostar det att anlita en granne via Grannfix?',
    a: 'Du sätter priset själv. Vanliga priser: enkel flytt 400–800 kr, storstäd av lägenhet 600–1 200 kr, snöskottning 150–400 kr, trädgårdsarbete 300–600 kr för 2 timmar, IKEA-montering 200–500 kr. Grannfix tar en serviceavgift på 15 procent av ordervärdet.',
  },
  {
    q: 'Är betalningen säker på Grannfix?',
    a: 'Ja. Beloppet spärras hos betaltjänsten när du bokar och betalas ut till grannen först när du godkänner att jobbet är klart. Pengarna går aldrig till grannen förrän du är nöjd med resultatet.',
  },
  {
    q: 'Hur snabbt kan jag få hjälp?',
    a: 'Ofta samma dag. Grannfix riktar sig mot uppdrag som behöver utföras snabbt och grannar i Luleå och Norrbotten kan ofta ställa upp med kort varsel.',
  },
  {
    q: 'Vilka uppdrag kan jag lägga ut på Grannfix?',
    a: 'Flytt och bärhjälp, städhjälp, trädgårdsarbete, snöskottning, möbelmontering, småfix och reparationer, samt hämtning och lämning av saker till återvinning eller butik.',
  },
  {
    q: 'Var är Grannfix tillgängligt?',
    a: 'Grannfix lanserar i Luleå hösten 2026. Utbyggnad planeras till Boden, Piteå, Kalix och resten av Norrbotten under 2027.',
  },
  {
    q: 'Kan jag tjäna pengar som granne på Grannfix?',
    a: 'Ja. Du registrerar dig som utförare, väljer uppdrag i närheten, utför jobbet och får betalt direkt via appen när uppdragsgivaren godkänt.',
  },
  {
    q: 'Behöver jag F-skatt för att ta uppdrag?',
    a: 'Nej, du behöver inte F-skatt för enstaka uppdrag som privatperson. Inkomsten är dock skattepliktig och ska deklareras. Grannfix rapporterar utförarens inkomst till Skatteverket varje år.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://grannfix.se/#organization',
      name: 'Grannfix',
      url: 'https://grannfix.se',
      email: 'hej@grannfix.se',
      description: 'Lokal marknadsplats för grannhjälp i Norrbotten.',
      foundingDate: '2026',
      foundingLocation: {
        '@type': 'City',
        name: 'Luleå',
        containedInPlace: { '@type': 'State', name: 'Norrbotten' },
      },
      areaServed: [
        { '@type': 'City', name: 'Luleå' },
        { '@type': 'City', name: 'Boden' },
        { '@type': 'City', name: 'Piteå' },
        { '@type': 'City', name: 'Kalix' },
        { '@type': 'AdministrativeArea', name: 'Norrbotten' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hej@grannfix.se',
        contactType: 'customer support',
        availableLanguage: 'Swedish',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://grannfix.se/#website',
      url: 'https://grannfix.se',
      name: 'Grannfix',
      publisher: { '@id': 'https://grannfix.se/#organization' },
      inLanguage: 'sv-SE',
    },
    {
      '@type': 'Service',
      '@id': 'https://grannfix.se/#service',
      name: 'Grannfix grannhjälp',
      description:
        'Lokal marknadsplats där du anlitar pålitliga grannar för flytt, städ, trädgård, snöskottning och småfix i Norrbotten. Du sätter priset, grannen hjälper till.',
      url: 'https://grannfix.se',
      provider: { '@id': 'https://grannfix.se/#organization' },
      serviceType: [
        'Flytthjälp', 'Städhjälp', 'Trädgårdshjälp', 'Snöskottning',
        'Möbelmontering', 'Bärhjälp', 'Småfix', 'Transport',
      ],
      areaServed: [
        { '@type': 'City', name: 'Luleå' },
        { '@type': 'City', name: 'Boden' },
        { '@type': 'City', name: 'Piteå' },
        { '@type': 'AdministrativeArea', name: 'Norrbotten' },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'SEK',
        lowPrice: '150',
        highPrice: '1600',
        offerCount: '6',
        description: 'Du sätter priset. Grannfix tar 15% serviceavgift på genomförda uppdrag.',
      },
    },
    {
      '@type': 'HowTo',
      name: 'Hur anlitar du en granne via Grannfix',
      description: 'Tre steg från att lägga ut ett uppdrag till att få hjälp av en granne i Norrbotten.',
      totalTime: 'PT1M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Lägg ut uppdraget', text: 'Beskriv vad du behöver hjälp med, ange tid och sätt ditt pris. Det tar under en minut.' },
        { '@type': 'HowToStep', position: 2, name: 'Välj din granne', text: 'Se profiler och betyg på grannar i närheten. Välj den som passar dig bäst.' },
        { '@type': 'HowToStep', position: 3, name: 'Betala säkert', text: 'Grannen utför jobbet. Du godkänner och betalningen sker direkt i appen.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

/* ─── Inline SVG icons ─── */
function IconBox() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}
function IconBroom() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l9-9M15 3a6 6 0 016 6c0 3-1.5 4.5-3 6l-6-6c1.5-1.5 3-3 3-6z" />
    </svg>
  )
}
function IconLeaf() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 19H6c2-4 8-7 11-11z" />
      <path d="M3.82 19c1.09-3.8 5.08-6.05 8.18-6.7" />
    </svg>
  )
}
function IconCar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}
function IconWrench() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
function IconGift() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
    </svg>
  )
}

const services = [
  { icon: <IconBox />,    title: 'Flytta & bära',              text: 'Flytt av möbler, bohag och kartonger. Med eller utan bil.' },
  { icon: <IconBroom />,  title: 'Städhjälp',                  text: 'Storstädning, inflyttningsstäd, kontorsstäd.' },
  { icon: <IconLeaf />,   title: 'Trädgård & snöskottning',    text: 'Klippning, krattning, snöröjning och allt däremellan.' },
  { icon: <IconCar />,    title: 'Hämta & lämna',              text: 'Upphämtning från butik, återvinning eller transport av saker.' },
  { icon: <IconWrench />, title: 'Småfix & montering',         text: 'IKEA-montering, målning, enklare reparationer.' },
  { icon: <IconGift />,   title: 'Bortskänkes & second hand',  text: 'Ge bort saker gratis eller hitta någon som hämtar.' },
]

const marqueeWords = [
  'Flytta & bära', 'Städhjälp', 'Trädgård', 'Snöskottning',
  'IKEA-montering', 'Hämtning', 'Småfix', 'Bortskänkes',
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white px-6" style={{ minHeight: '100dvh' }}>
        <CursorGlow />

        <div
          className="max-w-6xl mx-auto grid md:grid-cols-[1fr,400px] gap-16 items-center"
          style={{ paddingTop: 'calc(5.5rem + 60px)', paddingBottom: '5.5rem' }}
        >
          {/* Left column */}
          <div>
            {/* Launch badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide border animate-fade-down"
              style={{
                color: '#1a6b3c',
                borderColor: 'rgba(26,107,60,0.2)',
                background: 'rgba(26,107,60,0.05)',
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  display: 'inline-block',
                  width: '7px',
                  height: '7px',
                  borderRadius: '9999px',
                  background: '#22a05a',
                  flexShrink: 0,
                }}
              />
              Lanserar i Luleå hösten 2026
            </div>

            {/* Hero headline */}
            <h1
              className="hero-heading text-gray-900 mb-6"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              <RevealLine delay={0.08}>Grannen hjälper till,</RevealLine>
              <br />
              <RevealLine delay={0.26} className="text-[#1a6b3c]">
                snabbt och tryggt.
              </RevealLine>
            </h1>

            <p
              className="text-lg text-gray-500 mb-10 leading-relaxed animate-fade-rise-delay"
              style={{ maxWidth: '44ch' }}
            >
              Koppla ihop dig med pålitliga grannar i Luleå och Norrbotten. Du sätter priset,
              grannen hjälper till.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-rise-delay-2">
              <a
                href="#kom-igang"
                className="btn-primary halo-once bg-[#1a6b3c] hover:bg-[#145530] text-white px-8 py-4 rounded-full font-bold text-base inline-flex items-center gap-2"
              >
                Anmäl intresse
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#hur-det-fungerar"
                className="btn-secondary px-8 py-4 rounded-full font-semibold text-base text-gray-700 border border-gray-200 hover:border-gray-400"
              >
                Så fungerar det
              </a>
            </div>

            {/* Trust strip */}
            <div
              className="mt-12 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-gray-400 animate-fade-rise-delay-2"
            >
              <span className="flex items-center gap-2">
                <span
                  className="drift"
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '9999px',
                    background: '#1a6b3c',
                  }}
                />
                Norrbotten
              </span>
              <span className="hidden sm:inline">/</span>
              <span className="hidden sm:inline">Säker betalning</span>
              <span className="hidden sm:inline">/</span>
              <span className="hidden sm:inline">Lokalt & pålitligt</span>
            </div>
          </div>

          {/* Right column: live task feed */}
          <div className="hidden md:block">
            <TaskFeedMock />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════ */}
      <div
        className="border-t border-b py-5 overflow-hidden bg-white"
        style={{ borderColor: 'rgba(0,0,0,0.07)' }}
      >
        <div className="flex marquee-track w-max items-center">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <div key={i} className="flex items-center gap-10 px-5">
              <span className="text-base font-semibold text-gray-800 whitespace-nowrap">{word}</span>
              <span style={{ color: '#1a6b3c', fontSize: '10px' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          HUR DET FUNGERAR
      ═══════════════════════════════════════ */}
      <section id="hur-det-fungerar" className="py-28 px-6" style={{ background: '#f0faf4' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto mb-16">
            <Reveal>
              <p
                className="text-[11px] uppercase tracking-[0.26em] mb-6"
                style={{ color: '#6b7280' }}
              >
                Tre steg
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Klart på en dag.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: 'I',
                title: 'Lägg ut uppdraget',
                text: 'Beskriv vad du behöver hjälp med, ange tid och sätt ditt pris. Det tar under en minut.',
              },
              {
                num: 'II',
                title: 'Välj din granne',
                text: 'Se profiler och betyg på grannar i närheten. Välj den som passar dig bäst.',
              },
              {
                num: 'III',
                title: 'Betala säkert',
                text: 'Grannen utför jobbet. Du godkänner och betalningen sker direkt i appen.',
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 90}>
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="font-extrabold text-2xl"
                    style={{ color: '#1a6b3c', fontVariant: 'small-caps', letterSpacing: '-0.02em' }}
                  >
                    {step.num}
                  </span>
                  <div className="flex-1 hairline" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[0.9375rem]">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TJÄNSTER
      ═══════════════════════════════════════ */}
      <section id="tjanster" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.26em] mb-6" style={{ color: '#6b7280' }}>
                Vad kan grannen hjälpa med
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Allt från tunga lyft till trädgårdsarbete.
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 55}>
                <div className="gf-card card-lift service-card p-7 h-full">
                  <div className="mb-5">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRISER
      ═══════════════════════════════════════ */}
      <section id="priser" className="py-28 px-6" style={{ background: '#f0faf4' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.26em] mb-6" style={{ color: '#6b7280' }}>
                Priser
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Du bestämmer priset.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-gray-500 text-lg">Här är exempel på vad grannar brukar ta.</p>
            </Reveal>
          </div>

          <div className="gf-card overflow-hidden">
            {[
              { label: 'Enkel flytt (1–2 rum)',        price: '400–800 kr',   note: 'Exkl. transport' },
              { label: 'Större flytt (3–4 rum)',        price: '800–1 600 kr', note: 'Exkl. transport' },
              { label: 'Trädgårdsarbete, 2 timmar',    price: '300–600 kr',   note: 'Klippning, krattning' },
              { label: 'Storstäd lägenhet',             price: '600–1 200 kr', note: 'Ca 3–5 timmar' },
              { label: 'IKEA-montering',                price: '200–500 kr',   note: 'Per möbel' },
              { label: 'Snöskottning',                  price: '150–400 kr',   note: 'Normalstor uppfart' },
            ].map((p, i, arr) => (
              <Reveal key={p.label} delay={i * 45}>
                <div
                  className="flex items-center justify-between px-7 py-5"
                  style={{
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                    background: i % 2 === 0 ? '#fff' : 'rgba(240,250,244,0.5)',
                  }}
                >
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{p.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{p.note}</p>
                  </div>
                  <span className="font-extrabold text-[#1a6b3c] text-lg whitespace-nowrap ml-6">
                    {p.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <p className="text-center text-gray-400 text-sm mt-7">
              Grannfix tar en liten serviceavgift när uppdraget är slutfört.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OMDÖMEN
      ═══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.26em] mb-6" style={{ color: '#6b7280' }}>
                Omdömen
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Vad säger grannarna?
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Anna K.',
                location: 'Luleå',
                text: 'Fick hjälp med flytten på tre timmar. Grannen var toppen och priset var rimligt.',
              },
              {
                name: 'Marcus L.',
                location: 'Boden',
                text: 'Lade ut ett snöskottningsjobb på kvällen, grannen kom nästa morgon. Perfekt.',
              },
              {
                name: 'Sara N.',
                location: 'Piteå',
                text: 'Hjälpte till att bära ut gamla möbler till återvinningen. Enkelt, snabbt och schysst betalt.',
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="gf-card card-lift p-7 h-full flex flex-col">
                  {/* Quote mark */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mb-5"
                    style={{ color: '#1a6b3c' }}
                  >
                    <path
                      d="M9 7H6a3 3 0 00-3 3v6h6V10H6m12 6V10h-3a3 3 0 00-3 3v3h6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-gray-700 leading-relaxed mb-6 flex-1 text-[0.9375rem]">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{t.location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white" aria-label="Vanliga frågor">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          {/* Left */}
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.26em] mb-6" style={{ color: '#6b7280' }}>
                Frågor
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6"
                style={{ lineHeight: 1.1, textWrap: 'balance' } as React.CSSProperties}
              >
                Vanliga frågor.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-gray-500 text-sm leading-relaxed">
                Saknar du ett svar? Hör av dig till{' '}
                <a
                  href="mailto:hej@grannfix.se"
                  className="text-[#1a6b3c] underline underline-offset-4 hover:no-underline"
                >
                  hej@grannfix.se
                </a>
                .
              </p>
            </Reveal>
          </div>

          {/* Right: accordion */}
          <div className="md:col-span-8">
            {faqItems.map((item) => (
              <details key={item.q} className="gf-faq">
                <summary>
                  <span className="font-semibold text-gray-900 text-base pr-4">{item.q}</span>
                  <span className="faq-icon" />
                </summary>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section
        id="kom-igang"
        className="py-32 px-6"
        style={{ background: 'linear-gradient(145deg, #0f3d21 0%, #1a6b3c 100%)' }}
      >
        <div className="max-w-xl mx-auto text-center">
          <Reveal>
            <p
              className="text-[11px] uppercase tracking-[0.26em] mb-8"
              style={{ color: 'rgba(167,217,188,0.7)' }}
            >
              Kom igång
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Redo att testa?
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: '#a7d9bc' }}>
              Registrera dig och lägg ut ditt första uppdrag gratis. Lansering i Luleå hösten 2026.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="flex-1 px-5 py-4 rounded-full text-gray-900 bg-white outline-none text-sm focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="btn-primary bg-white text-[#0f3d21] hover:bg-gray-50 px-7 py-4 rounded-full font-bold text-sm whitespace-nowrap"
              >
                Anmäl intresse
              </button>
            </form>
            <p className="text-xs mt-5" style={{ color: 'rgba(167,217,188,0.6)' }}>
              Inga spam. Du hör från oss när vi lanserar.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
