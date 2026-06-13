import type { Metadata } from 'next'
import Link from 'next/link'
import { mockUppdrag, KATEGORIER } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Min sida',
  description: 'Hantera dina uppdrag och din profil på Grannfix.',
  robots: { index: false, follow: false },
}

const MOCK_NAMN = 'Anna K.'
const MINA_UPPDRAG = mockUppdrag.slice(0, 2)
const HJÄLPER_MED = mockUppdrag.slice(3, 5)

export default function DashboardPage() {
  return (
    <div className="min-h-[calc(100vh-128px)] bg-[#f0faf4] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Hej, {MOCK_NAMN}</h1>
          <p className="text-gray-500 mt-1">Välkommen tillbaka till Grannfix</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold text-[#1a6b3c]">4</p>
            <p className="text-gray-500 text-sm mt-1">Lagda uppdrag</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold text-[#1a6b3c]">7</p>
            <p className="text-gray-500 text-sm mt-1">Avslutade uppdrag</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold text-[#1a6b3c]">2 150 kr</p>
            <p className="text-gray-500 text-sm mt-1">Intjänat totalt</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Link
            href="/uppdrag/ny"
            className="bg-[#1a6b3c] text-white rounded-2xl p-8 flex flex-col gap-3 hover:bg-[#114a29] transition-colors"
          >
            <span className="text-3xl">+</span>
            <div>
              <p className="font-semibold text-lg">Lägg ut nytt uppdrag</p>
              <p className="text-[#a7d9bc] text-sm mt-1">Beskriv vad du behöver hjälp med och sätt ditt pris</p>
            </div>
          </Link>
          <Link
            href="/uppdrag"
            className="bg-white text-gray-900 rounded-2xl p-8 flex flex-col gap-3 border border-gray-100 shadow-sm hover:border-[#1a6b3c] transition-colors"
          >
            <span className="text-3xl">🔍</span>
            <div>
              <p className="font-semibold text-lg">Hitta uppdrag att hjälpa med</p>
              <p className="text-gray-500 text-sm mt-1">Bläddra bland uppdrag i din stad och anmäl intresse</p>
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Mina uppdrag</h2>
            {MINA_UPPDRAG.length > 0 ? (
              <div className="flex flex-col gap-3">
                {MINA_UPPDRAG.map(u => {
                  const kat = KATEGORIER[u.kategori]
                  return (
                    <Link
                      key={u.id}
                      href={`/uppdrag/${u.id}`}
                      className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:border-[#1a6b3c] transition-colors"
                    >
                      <span className="text-2xl">{kat.ikon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{u.titel}</p>
                        <p className="text-gray-400 text-sm">{u.stad} · {u.intresserade} intresserade</p>
                      </div>
                      <span className="font-bold text-[#1a6b3c] whitespace-nowrap">{u.pris} kr</span>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 border border-gray-100 text-center text-gray-400">
                <p>Inga aktiva uppdrag</p>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Uppdrag jag hjälper med</h2>
            {HJÄLPER_MED.length > 0 ? (
              <div className="flex flex-col gap-3">
                {HJÄLPER_MED.map(u => {
                  const kat = KATEGORIER[u.kategori]
                  return (
                    <Link
                      key={u.id}
                      href={`/uppdrag/${u.id}`}
                      className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:border-[#1a6b3c] transition-colors"
                    >
                      <span className="text-2xl">{kat.ikon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{u.titel}</p>
                        <p className="text-gray-400 text-sm">{u.stad} · {u.datum}</p>
                      </div>
                      <span className="font-bold text-[#1a6b3c] whitespace-nowrap">{u.pris} kr</span>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 border border-gray-100 text-center text-gray-400">
                <p>Inga aktiva åtaganden</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
