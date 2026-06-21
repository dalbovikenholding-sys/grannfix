'use client'

import { useState, useTransition } from 'react'
import { anmälIntresse } from '@/app/actions/uppdrag'

export default function IntresseKnapp({
  uppdragId,
  harAnmält,
  uppdragPris,
}: {
  uppdragId: string
  harAnmält: boolean
  uppdragPris: number
}) {
  const [anmält, setAnmält] = useState(harAnmält)
  const [meddelande, setMeddelande] = useState('')
  const [forelagnatPris, setForelagnatPris] = useState<string>('')
  const [visMeddelande, setVisMeddelande] = useState(false)
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function handleAnmäl() {
    startTransition(async () => {
      const parsadPris = forelagnatPris ? Number(forelagnatPris) : undefined
      const result = await anmälIntresse(uppdragId, meddelande || undefined, parsadPris)
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
        <>
          <textarea
            value={meddelande}
            onChange={e => setMeddelande(e.target.value)}
            placeholder="Kort meddelande till beställaren (valfritt)"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 resize-none text-sm"
          />
          <div>
            <label htmlFor="forelagnatPris" className="block text-sm font-medium text-gray-700 mb-1.5">
              Erbjud ett annat pris (valfritt)
            </label>
            <div className="relative">
              <input
                id="forelagnatPris"
                type="number"
                min={50}
                placeholder={String(uppdragPris)}
                value={forelagnatPris}
                onChange={e => setForelagnatPris(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 text-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kr</span>
            </div>
          </div>
        </>
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
