'use client'

import { useState } from 'react'

const FAQS = [
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
    a: 'Ja. Du registrerar dig som utförare, väljer uppdrag i närheten, utför jobbet och får betalt direkt via appen när uppdragsgivaren godkänt. Du bestämmer själv vilka uppdrag du tar och när.',
  },
  {
    q: 'Behöver jag F-skatt för att ta uppdrag?',
    a: 'Nej, du behöver inte F-skatt för enstaka uppdrag som privatperson. Inkomsten är dock skattepliktig och ska deklareras. Grannfix rapporterar utförarens inkomst till Skatteverket varje år.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-100">
      {FAQS.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4 group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-gray-900 text-base group-hover:text-[#1a6b3c] transition-colors duration-[120ms]">
              {faq.q}
            </span>
            <span
              className="shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-sm transition-transform duration-300"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
              aria-hidden
            >
              +
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: open === i ? '240px' : '0px',
              opacity: open === i ? 1 : 0,
              transition: 'max-height 320ms cubic-bezier(0.23,1,0.32,1), opacity 240ms ease',
            }}
          >
            <p className="text-gray-500 leading-relaxed pb-5 pr-10 text-sm">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
