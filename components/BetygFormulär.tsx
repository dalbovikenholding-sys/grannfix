'use client'

import { useState, useTransition } from 'react'
import { lämnaBetyg } from '@/app/actions/betyg'

export default function BetygFormulär({ uppdragId, tillId }: { uppdragId: string; tillId: string }) {
  const [stjärnor, setSjärnor] = useState(0)
  const [hover, setHover] = useState(0)
  const [kommentar, setKommentar] = useState('')
  const [skickat, setSkickat] = useState(false)
  const [fel, setFel] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  if (skickat) {
    return (
      <div className="bg-[#f0faf4] rounded-xl p-4 text-sm text-[#1a6b3c] text-center">
        Tack för ditt betyg!
      </div>
    )
  }

  return (
    <div className="border-t border-gray-100 pt-4">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Lämna betyg</p>
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map(s => (
          <button
            key={s}
            type="button"
            onClick={() => setSjärnor(s)}
            onMouseEnter={() => setHover(s)}
            onMouseLeave={() => setHover(0)}
            className="text-2xl leading-none"
          >
            <span className={(hover || stjärnor) >= s ? 'text-yellow-400' : 'text-gray-200'}>★</span>
          </button>
        ))}
      </div>
      <textarea
        value={kommentar}
        onChange={e => setKommentar(e.target.value)}
        placeholder="Kommentar (valfritt)"
        rows={2}
        className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none mb-3 focus:outline-none focus:ring-1 focus:ring-[#1a6b3c]"
      />
      {fel && <p className="text-red-500 text-xs mb-2">{fel}</p>}
      <button
        disabled={stjärnor === 0 || pending}
        onClick={() =>
          startTransition(async () => {
            const res = await lämnaBetyg(uppdragId, tillId, stjärnor, kommentar || undefined)
            if (res?.error) setFel(res.error)
            else setSkickat(true)
          })
        }
        className="w-full bg-[#1a6b3c] text-white py-2.5 rounded-full font-semibold text-sm disabled:opacity-50"
      >
        {pending ? 'Skickar...' : 'Skicka betyg'}
      </button>
    </div>
  )
}
