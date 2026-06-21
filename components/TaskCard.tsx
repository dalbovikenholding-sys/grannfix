import Link from 'next/link'
import { KATEGORIER } from '@/lib/konstanter'
import type { Uppdrag } from '@/lib/supabase/types'

export default function TaskCard({ uppdrag }: { uppdrag: Uppdrag }) {
  const kat = KATEGORIER[uppdrag.kategori]
  const datumVisat = new Date(uppdrag.datum).toLocaleDateString('sv-SE', {
    day: 'numeric', month: 'short',
  })

  return (
    <div className="service-card border border-gray-100 rounded-2xl bg-white flex flex-col overflow-hidden">
      {uppdrag.bild_url ? (
        <div className="relative">
          <img
            src={uppdrag.bild_url}
            alt={uppdrag.titel}
            className="w-full aspect-video object-cover rounded-t-2xl"
          />
          {uppdrag.status !== 'öppen' && (
            <span className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full ${
              uppdrag.status === 'slutfört' ? 'bg-gray-900/70 text-white' : 'bg-yellow-500/90 text-white'
            }`}>
              {uppdrag.status === 'slutfört' ? 'Slutfört' : 'Pågår'}
            </span>
          )}
        </div>
      ) : null}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          {!uppdrag.bild_url && <span className="text-2xl">{kat.ikon}</span>}
          <div className="flex items-center gap-2 ml-auto">
            {uppdrag.fordonsstorlek === 'skåpbil_xl' && (
              <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">XL</span>
            )}
            <span className="text-xs font-medium bg-[#f0faf4] text-[#1a6b3c] px-3 py-1 rounded-full whitespace-nowrap">
              {kat.etikett}
            </span>
            {!uppdrag.bild_url && uppdrag.status !== 'öppen' && (
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                uppdrag.status === 'slutfört' ? 'bg-gray-100 text-gray-500' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {uppdrag.status === 'slutfört' ? 'Slutfört' : 'Pågår'}
              </span>
            )}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1 leading-snug">{uppdrag.titel}</h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{uppdrag.beskrivning}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span>{uppdrag.stad}</span>
          <span>·</span>
          <span>{datumVisat}</span>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-gray-50">
          <div>
            <span className="font-bold text-[#1a6b3c] text-lg">{uppdrag.pris} kr</span>
            <p className="text-xs text-gray-400">Du behåller ca {Math.round(uppdrag.pris * 0.85)} kr</p>
          </div>
          <Link
            href={`/uppdrag/${uppdrag.id}`}
            className="btn-primary bg-[#1a6b3c] text-white text-sm px-4 py-2 rounded-full font-medium"
          >
            Visa uppdrag
          </Link>
        </div>
      </div>
    </div>
  )
}
