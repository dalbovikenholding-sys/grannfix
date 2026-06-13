'use client'

import { useState, useTransition } from 'react'
import { anmälIntresse } from '@/app/actions/uppdrag'

export default function IntresseKnapp({ uppdragId, harAnmält }: { uppdragId: string; harAnmält: boolean }) {
  const [anmält, setAnmält] = useState(harAnmält)
  const [meddelande, setMeddelande] = useState('')
  const [visMeddelande, setVisMeddelande] = useState(false)
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function handleAnmäl() {
    startTransition(async () => {
      const result = await anmälIntresse(uppdragId, meddelande || undefined)
      if (result.ok) {
        setAnmält(true)
        setVisMeddelande(false)
      } else {
        setError(result.error ?? 'Något gick fel.')
      }
    })
  }

  if (anmält) {
    return (
      <div className="bg-[#f0faf4] rounded-xl px-4 py-3 text-sm text-[#1a6b3c] text-center font-medium">
        Du har anmält intresse
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {visMeddelande && (
        <textarea
          value={meddelande}
          onChange={e => setMeddelande(e.target.value)}
          placeholder="Kort meddelande till beställaren (valfritt)"
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 resize-none text-sm"
        />
      )}
      {error && <p className="text-red-600 text-xs">{error}</p>}
      <button
        type="button" disabled={pending}
        onClick={() => visMeddelande ? handleAnmäl() : setVisMeddelande(true)}
        className="btn-primary w-full bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold disabled:opacity-60"
      >
        {pending ? 'Skickar...' : visMeddelande ? 'Skicka intresseanmälan' : 'Anmäl intresse'}
      </button>
    </div>
  )
}
