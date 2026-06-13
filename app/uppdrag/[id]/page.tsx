import Link from 'next/link'
import { mockUppdrag, KATEGORIER } from '@/lib/mockData'
import TaskCard from '@/components/TaskCard'
import { notFound } from 'next/navigation'

export default async function UppdragDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const uppdrag = mockUppdrag.find(u => u.id === id)

  if (!uppdrag) {
    notFound()
  }

  const kat = KATEGORIER[uppdrag.kategori]
  const liknande = mockUppdrag.filter(u => u.id !== id && u.kategori === uppdrag.kategori).slice(0, 3)

  const datumVisat = new Date(uppdrag.datum).toLocaleDateString('sv-SE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-[calc(100vh-128px)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link href="/uppdrag" className="text-sm text-[#1a6b3c] hover:underline flex items-center gap-1 mb-8">
          ← Tillbaka till uppdrag
        </Link>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{kat.ikon}</span>
              <span className="text-sm font-medium bg-[#f0faf4] text-[#1a6b3c] px-3 py-1 rounded-full">
                {kat.etikett}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{uppdrag.titel}</h1>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">{uppdrag.beskrivning}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#f0faf4] rounded-xl p-4">
                <p className="text-xs font-medium text-[#1a6b3c] uppercase tracking-wider mb-1">Stad</p>
                <p className="font-medium text-gray-900">{uppdrag.stad}</p>
              </div>
              <div className="bg-[#f0faf4] rounded-xl p-4">
                <p className="text-xs font-medium text-[#1a6b3c] uppercase tracking-wider mb-1">Adress</p>
                <p className="font-medium text-gray-900">{uppdrag.adress}</p>
              </div>
              <div className="bg-[#f0faf4] rounded-xl p-4">
                <p className="text-xs font-medium text-[#1a6b3c] uppercase tracking-wider mb-1">Önskat datum</p>
                <p className="font-medium text-gray-900">{datumVisat}</p>
              </div>
              <div className="bg-[#f0faf4] rounded-xl p-4">
                <p className="text-xs font-medium text-[#1a6b3c] uppercase tracking-wider mb-1">Intresserade</p>
                <p className="font-medium text-gray-900">{uppdrag.intresserade} grannar</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Karta (placeholder)</p>
              <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-400 text-sm">{uppdrag.adress}</p>
              </div>
            </div>

            {liknande.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Liknande uppdrag</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {liknande.map(u => (
                    <TaskCard key={u.id} uppdrag={u} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 flex flex-col gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Betalning</p>
                <p className="text-4xl font-bold text-[#1a6b3c] mb-1">{uppdrag.pris} kr</p>
                <p className="text-gray-400 text-sm mb-6">Betalas ut efter godkänt arbete</p>
                <Link
                  href="/registrera"
                  className="btn-primary w-full block text-center bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold"
                >
                  Anmäl intresse
                </Link>
                <p className="text-center text-xs text-gray-400 mt-3">Du behöver ett konto för att anmäla intresse</p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Beställare</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center font-bold text-[#1a6b3c] text-lg">
                    {uppdrag.beställare.namn.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{uppdrag.beställare.namn}</p>
                    <p className="text-gray-400 text-sm">{uppdrag.stad}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium text-gray-900">{uppdrag.beställare.betyg.toFixed(1)}</span>
                  <span className="text-gray-400">({uppdrag.beställare.antalUppdrag} uppdrag)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
