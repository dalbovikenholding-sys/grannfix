'use client'

import { useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function BildUppladdning({ onUrl }: { onUrl: (url: string | null) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [förhandsvisning, setFörhandsvisning] = useState<string | null>(null)
  const [laddar, setLaddar] = useState(false)
  const [fel, setFel] = useState('')
  const [dragÖver, setDragÖver] = useState(false)

  async function behandlaFil(fil: File) {
    if (!fil.type.startsWith('image/')) {
      setFel('Filen måste vara en bild.')
      return
    }
    if (fil.size > 5 * 1024 * 1024) {
      setFel('Bilden får max vara 5 MB.')
      return
    }
    setFel('')
    setLaddar(true)

    const ext = fil.name.split('.').pop() ?? 'jpg'
    const sökväg = `${crypto.randomUUID()}.${ext}`

    const supabase = createClient()
    const { error: uploadFel } = await supabase.storage
      .from('uppdrag-bilder')
      .upload(sökväg, fil)

    if (uploadFel) {
      setFel('Uppladdningen misslyckades. Försök igen.')
      setLaddar(false)
      return
    }

    const { data } = supabase.storage.from('uppdrag-bilder').getPublicUrl(sökväg)
    setFörhandsvisning(data.publicUrl)
    onUrl(data.publicUrl)
    setLaddar(false)
  }

  function hanteraFilval(e: React.ChangeEvent<HTMLInputElement>) {
    const fil = e.target.files?.[0]
    if (fil) behandlaFil(fil)
  }

  function hanteraDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragÖver(false)
    const fil = e.dataTransfer.files?.[0]
    if (fil) behandlaFil(fil)
  }

  function taBort() {
    setFörhandsvisning(null)
    onUrl(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="flex flex-col gap-3">
      {förhandsvisning ? (
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={förhandsvisning}
            alt="Förhandsgranskning"
            className="w-full aspect-video object-cover rounded-2xl"
          />
          <button
            type="button"
            onClick={taBort}
            className="absolute top-3 right-3 bg-white/90 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow hover:bg-white transition-colors"
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={e => { e.preventDefault(); setDragÖver(true) }}
          onDragLeave={() => setDragÖver(false)}
          onDrop={hanteraDrop}
          className={`w-full border-2 border-dashed rounded-2xl p-8 flex flex-col items-center gap-3 transition-colors ${
            dragÖver ? 'border-[#1a6b3c] bg-[#f0faf4]' : 'border-gray-200 hover:border-[#1a6b3c]/60 hover:bg-[#f0faf4]/50'
          }`}
        >
          {laddar ? (
            <div className="w-8 h-8 border-2 border-[#1a6b3c] border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span className="text-3xl">📷</span>
              <span className="text-sm font-medium text-gray-700">Lägg till bild</span>
              <span className="text-xs text-gray-400">Dra hit eller klicka för att välja (max 5 MB)</span>
            </>
          )}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={hanteraFilval}
      />
      {fel && <p className="text-red-600 text-sm">{fel}</p>}
    </div>
  )
}
