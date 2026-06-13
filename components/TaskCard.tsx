import Link from 'next/link'
import { KATEGORIER } from '@/lib/konstanter'
import type { Uppdrag } from '@/lib/supabase/types'

export default function TaskCard({ uppdrag }: { uppdrag: Uppdrag }) {
  const kat = KATEGORIER[uppdrag.kategori]
  const datumVisat = new Date(uppdrag.datum).toLocaleDateString('sv-SE', {
    day: 'numeric', month: 'short',
  })

  return (
    <div className="service-card border border-gray-100 rounded-2xl p-6 bg-white flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <span className="text-2xl">{kat.ikon}</span>
        <span className="text-xs font-medium bg-[#f0faf4] text-[#1a6b3c] px-3 py-1 rounded-full whitespace-nowrap">
          {kat.etikett}
        </span>
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
        <span className="font-bold text-[#1a6b3c] text-lg">{uppdrag.pris} kr</span>
        <Link
          href={`/uppdrag/${uppdrag.id}`}
          className="btn-primary bg-[#1a6b3c] text-white text-sm px-4 py-2 rounded-full font-medium"
        >
          Visa uppdrag
        </Link>
      </div>
    </div>
  )
}
