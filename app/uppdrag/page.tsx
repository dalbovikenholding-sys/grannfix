'use client'

import { useState, useMemo } from 'react'
import { mockUppdrag, KATEGORIER, type Kategori } from '@/lib/mockData'
import TaskCard from '@/components/TaskCard'
import Link from 'next/link'

const STÄDER = ['Alla', 'Luleå', 'Boden', 'Piteå', 'Kiruna', 'Gällivare']

export default function UppdragPage() {
  const [kategori, setKategori] = useState<Kategori | ''>('')
  const [stad, setStad] = useState('Alla')
  const [sortera, setSortera] = useState<'nyast' | 'pris'>('nyast')

  const filtreradeLista = useMemo(() => {
    let result = [...mockUppdrag]

    if (kategori) {
      result = result.filter(u => u.kategori === kategori)
    }

    if (stad !== 'Alla') {
      result = result.filter(u => u.stad === stad)
    }

    if (sortera === 'nyast') {
      result.sort((a, b) => b.skapadDatum.localeCompare(a.skapadDatum))
    } else {
      result.sort((a, b) => a.pris - b.pris)
    }

    return result
  }, [kategori, stad, sortera])

  return (
    <div className="min-h-[calc(100vh-128px)] bg-white">
      <div className="bg-[#f0faf4] px-6 py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hitta uppdrag</h1>
          <p className="text-gray-500 mb-8">Bläddra bland uppdrag i Norrbotten och anmäl ditt intresse</p>

          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2">
              <label htmlFor="kategori" className="text-sm font-medium text-gray-700 whitespace-nowrap">Kategori</label>
              <select
                id="kategori"
                value={kategori}
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
                id="stad"
                value={stad}
                onChange={e => setStad(e.target.value)}
                className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c]"
              >
                {STÄDER.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sortera" className="text-sm font-medium text-gray-700">Sortera</label>
              <select
                id="sortera"
                value={sortera}
                onChange={e => setSortera(e.target.value as 'nyast' | 'pris')}
                className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c]"
              >
                <option value="nyast">Nyast</option>
                <option value="pris">Lägst pris</option>
              </select>
            </div>
            <div className="ml-auto">
              <Link
                href="/uppdrag/ny"
                className="btn-primary bg-[#1a6b3c] text-white text-sm px-5 py-2.5 rounded-full font-medium"
              >
                Lägg ut uppdrag
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-400 mb-6">{filtreradeLista.length} uppdrag hittades</p>
          {filtreradeLista.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtreradeLista.map(u => (
                <TaskCard key={u.id} uppdrag={u} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-medium mb-2">Inga uppdrag hittades</p>
              <p className="text-sm">Prova att ändra filter eller lägg ut ett eget uppdrag</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
