'use client'

import { useTransition } from 'react'
import { markeraSlutfört } from '@/app/actions/uppdrag'

export default function GodkännKnapp({ uppdragId }: { uppdragId: string }) {
  const [pending, startTransition] = useTransition()

  return (
    <div>
      <button
        onClick={() => startTransition(async () => { await markeraSlutfört(uppdragId) })}
        disabled={pending}
        className="w-full bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold disabled:opacity-60"
      >
        {pending ? 'Markerar...' : 'Godkänn avslutat arbete'}
      </button>
      <p className="text-center text-xs text-gray-400 mt-3">
        Bekräftar att arbetet är utfört och frigör betalningen.
      </p>
    </div>
  )
}
