'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BliGrannePage() {
  const [timmarPerVecka, setTimmarPerVecka] = useState(5)
  const TIMERSATS = 120
  const manadsinkomst = Math.round(timmarPerVecka * TIMERSATS * 4 * 0.9)

  return (
    <div className="min-h-[calc(100vh-128px)]">
      <section className="bg-gradient-to-br from-[#f0faf4] to-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1a6b3c] font-medium text-sm uppercase tracking-wider mb-4">Bli helper</p>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Tjäna pengar i din närmiljö
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Hjälp grannar med flytt, städ, trädgård och småfix. Du väljer själv vilka uppdrag du tar och när du jobbar.
            </p>
            <Link
              href="/registrera"
              className="btn-primary inline-block bg-[#1a6b3c] text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Kom igång idag
            </Link>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Räkna ut din intjäning</h2>
            <div className="mb-6">
              <label htmlFor="timmar" className="block text-sm font-medium text-gray-700 mb-3">
                Timmar per vecka: <span className="text-[#1a6b3c] font-bold">{timmarPerVecka} h</span>
              </label>
              <input
                id="timmar"
                type="range"
                min={1}
                max={20}
                step={1}
                value={timmarPerVecka}
                onChange={e => setTimmarPerVecka(Number(e.target.value))}
                className="w-full accent-[#1a6b3c]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1 h</span>
                <span>20 h</span>
              </div>
            </div>
            <div className="bg-[#f0faf4] rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-500 mb-1">Estimerad månadsintjäning</p>
              <p className="text-4xl font-bold text-[#1a6b3c]">ca {manadsinkomst.toLocaleString('sv-SE')} kr</p>
              <p className="text-xs text-gray-400 mt-2">Baserat på ca {TIMERSATS} kr/timme, efter serviceavgift</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hur fungerar det?</h2>
            <p className="text-gray-500 text-lg">Tre steg till din första intjäning</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                steg: '1',
                titel: 'Registrera dig',
                text: 'Skapa ett konto med dina uppgifter och verifiera dig med BankID. Det tar under fem minuter.',
              },
              {
                steg: '2',
                titel: 'Hitta uppdrag',
                text: 'Bläddra bland uppdrag i din stad. Filtrera på kategori och välj de som passar dig.',
              },
              {
                steg: '3',
                titel: 'Utför och få betalt',
                text: 'Gör jobbet och beställaren godkänner. Pengarna betalas direkt till ditt konto.',
              },
            ].map(s => (
              <div key={s.steg} className="bg-[#f0faf4] rounded-2xl p-8">
                <div className="w-10 h-10 bg-[#1a6b3c] text-white rounded-full flex items-center justify-center font-bold mb-6">
                  {s.steg}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">{s.titel}</h3>
                <p className="text-gray-500 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f0faf4]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Krav för att bli granne</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { ikon: '🪪', titel: 'BankID', text: 'Du behöver ett giltigt BankID för att verifiera din identitet.' },
              { ikon: '🎂', titel: 'Minst 18 år', text: 'Du måste vara myndig för att ta uppdrag på Grannfix.' },
              { ikon: '📍', titel: 'Norrbotten', text: 'Du behöver bo eller befinna dig i Norrbottens län för att ta uppdrag.' },
            ].map(k => (
              <div key={k.titel} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{k.ikon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{k.titel}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{k.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#1a6b3c]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Redo att börja tjäna?</h2>
          <p className="text-[#a7d9bc] text-xl mb-10">
            Registrera dig idag och börja ta uppdrag i din närmiljö.
          </p>
          <Link
            href="/registrera"
            className="btn-primary inline-block bg-white text-[#1a6b3c] px-10 py-4 rounded-full font-semibold text-lg"
          >
            Skapa konto gratis
          </Link>
        </div>
      </section>
    </div>
  )
}
