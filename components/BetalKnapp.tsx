'use client'

import { useState, useTransition } from 'react'

export default function BetalKnapp({ uppdragId }: { uppdragId: string }) {
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function handleBetala() {
    startTransition(async () => {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uppdragId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error ?? 'Betalning misslyckades.')
      }
    })
  }

  return (
    <div className="flex flex-col gap-3">
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        type="button" disabled={pending}
        onClick={handleBetala}
        className="btn-primary w-full bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold disabled:opacity-60"
      >
        {pending ? 'Öppnar betalning...' : 'Betala och starta uppdraget'}
      </button>
      <p className="text-xs text-gray-400 text-center">Betalas ut till grannen när du godkänt jobbet</p>
    </div>
  )
}
