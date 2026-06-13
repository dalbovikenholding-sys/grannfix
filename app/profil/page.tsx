import type { Metadata } from 'next'
import Link from 'next/link'
import { mockUppdrag } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Min profil',
  description: 'Din profil på Grannfix med betyg, recensioner och uppdragshistorik.',
  robots: { index: false, follow: false },
}

const MOCK_PROFIL = {
  namn: 'Anna K.',
  stad: 'Luleå',
  betyg: 4.8,
  antalUppdrag: 11,
  verifierad: true,
  beskrivning: 'Bor i Luleå centrum och hjälper gärna grannar med flytt, städ och småfix. Har bil med dragkrok.',
  recensioner: [
    { namn: 'Marcus L.', betyg: 5, text: 'Bästa grannen man kan tänka sig. Snabb, noggrann och trevlig.' },
    { namn: 'Sara N.', betyg: 5, text: 'Hjälpte oss flytta en hel lägenhet på en förmiddag. Väldigt rekommenderad.' },
    { namn: 'Peter G.', betyg: 4, text: 'Bra hjälp med trädgården. Kom i tid och jobbade strukturerat.' },
  ],
}

export default function ProfilPage() {
  const menaUppdrag = mockUppdrag.slice(0, 3)
  const snittBetyg = MOCK_PROFIL.recensioner.reduce((s, r) => s + r.betyg, 0) / MOCK_PROFIL.recensioner.length

  return (
    <div className="min-h-[calc(100vh-128px)] bg-[#f0faf4] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center sticky top-24">
              <div className="w-24 h-24 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center text-4xl font-bold text-[#1a6b3c] mx-auto mb-4">
                {MOCK_PROFIL.namn.charAt(0)}
              </div>
              <h1 className="text-xl font-bold text-gray-900 mb-1">{MOCK_PROFIL.namn}</h1>
              <p className="text-gray-400 text-sm mb-3">{MOCK_PROFIL.stad}</p>
              {MOCK_PROFIL.verifierad && (
                <div className="inline-flex items-center gap-1.5 bg-[#f0faf4] text-[#1a6b3c] text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                  <span>BankID-verifierad</span>
                </div>
              )}
              <div className="flex justify-center items-center gap-1.5 mb-6">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="font-bold text-gray-900">{MOCK_PROFIL.betyg.toFixed(1)}</span>
                <span className="text-gray-400 text-sm">({MOCK_PROFIL.antalUppdrag} uppdrag)</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{MOCK_PROFIL.beskrivning}</p>
              <Link
                href="/dashboard"
                className="btn-secondary w-full block border-2 border-[#1a6b3c] text-[#1a6b3c] py-3 rounded-full font-semibold text-sm"
              >
                Redigera profil
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#1a6b3c]">{MOCK_PROFIL.antalUppdrag}</p>
                  <p className="text-gray-400 text-sm mt-1">Avslutade uppdrag</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1a6b3c]">{snittBetyg.toFixed(1)}</p>
                  <p className="text-gray-400 text-sm mt-1">Genomsnittligt betyg</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1a6b3c]">100%</p>
                  <p className="text-gray-400 text-sm mt-1">Svarade i tid</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recensioner</h2>
              <div className="flex flex-col gap-6">
                {MOCK_PROFIL.recensioner.map((r, i) => (
                  <div key={i} className={i > 0 ? 'pt-6 border-t border-gray-100' : ''}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">
                        {r.namn.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{r.namn}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <span key={j} className={j < r.betyg ? 'text-yellow-400 text-xs' : 'text-gray-200 text-xs'}>★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Senaste uppdrag</h2>
              <div className="flex flex-col gap-3">
                {menaUppdrag.map(u => (
                  <Link
                    key={u.id}
                    href={`/uppdrag/${u.id}`}
                    className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 hover:text-[#1a6b3c] transition-colors group"
                  >
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-[#1a6b3c] transition-colors">{u.titel}</p>
                      <p className="text-gray-400 text-sm">{u.stad} · {u.datum}</p>
                    </div>
                    <span className="font-bold text-[#1a6b3c] whitespace-nowrap ml-4">{u.pris} kr</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
