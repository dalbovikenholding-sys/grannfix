'use client'

import { useState, useMemo } from 'react'
import TaskCard from '@/components/TaskCard'
import type { Uppdrag, Kategori } from '@/lib/supabase/types'
import { KATEGORIER } from '@/lib/konstanter'

const STÄDER = ['Alla', 'Luleå', 'Boden', 'Piteå', 'Kiruna', 'Gällivare']

interface Props {
  uppdrag: Uppdrag[]
}

export default function UppdragLista({ uppdrag }: Props) {
  const [kategori, setKategori] = useState<Kategori | ''>('')
  const [stad, setStad] = useState('Alla')
  const [sortera, setSortera] = useState<'nyast' | 'pris'>('nyast')

  const filtrerade = useMemo(() => {
    let result = [...uppdrag]
    if (kategori) result = result.filter(u => u.kategori === kategori)
    if (stad !== 'Alla') result = result.filter(u => u.stad === stad)
    if (sortera === 'pris') result.sort((a, b) => a.pris - b.pris)
    return result
  }, [uppdrag, kategori, stad, sortera])

  return (
    <>
      <div className="flex flex-wrap gap-3 items-center mb-6">
        <div className="flex items-center gap-2">
          <label htmlFor="kategori" className="text-sm font-medium text-gray-700 whitespace-nowrap">Kategori</label>
          <select
            id="kategori" value={kategori}
            onChange={e => setKategori(e.target.value as Kategori | '')}
            className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c]"
          >
            <option value="">Alla</option>
            {(Object.entries(KATEGORIER) as [Kategori, { ikon: string; etikett: string }][]).map(([k, v]) => (
              <option key={k} value={k}>{v.etikett}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="stad" className="text-sm font-medium text-gray-700">Stad</label>
          <select
            id="stad" value={stad}
            onChange={e => setStad(e.target.value)}
            className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c]"
          >
            {STÄDER.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sortera" className="text-sm font-medium text-gray-700">Sortera</label>
          <select
            id="sortera" value={sortera}
            onChange={e => setSortera(e.target.value as 'nyast' | 'pris')}
            className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c]"
          >
            <option value="nyast">Nyast</option>
            <option value="pris">Lägst pris</option>
          </select>
        </div>
        <p className="ml-auto text-sm text-gray-400">{filtrerade.length} uppdrag</p>
      </div>

      {filtrerade.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrerade.map(u => <TaskCard key={u.id} uppdrag={u as never} />)}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-medium mb-2">Inga uppdrag hittades</p>
          <p className="text-sm">Prova att ändra filter eller lägg ut ett eget uppdrag</p>
        </div>
      )}
    </>
  )
}
