'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { KATEGORIER, STÄDER, PRISSUGGEST } from '@/lib/konstanter'
import { skapaUppdrag } from '@/app/actions/uppdrag'
import type { Kategori } from '@/lib/supabase/types'

const KATEGORILISTA = Object.entries(KATEGORIER) as [Kategori, { ikon: string; etikett: string }][]

export default function NyttUppdragPage() {
  const [steg, setSteg] = useState(1)
  const [form, setForm] = useState({
    kategori: '' as Kategori | '',
    titel: '',
    beskrivning: '',
    adress: '',
    stad: '',
    datum: '',
    pris: 400,
  })
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const fd = new FormData()
    Object.entries(form).forEach(([k, v]) => fd.set(k, String(v)))

    startTransition(async () => {
      const result = await skapaUppdrag(fd)
      if (result?.error) setError(result.error)
    })
  }

  return (
    <div className="min-h-[calc(100vh-128px)] bg-[#f0faf4] px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Link href="/uppdrag" className="text-sm text-[#1a6b3c] hover:underline">← Tillbaka</Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">Lägg ut uppdrag</h1>
          <div className="flex gap-2 mt-6">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className={`h-1.5 flex-1 rounded-full transition-colors ${n <= steg ? 'bg-[#1a6b3c]' : 'bg-gray-200'}`} />
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-2">Steg {steg} av 4</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          {steg === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Välj kategori</h2>
              <div className="grid grid-cols-2 gap-3">
                {KATEGORILISTA.map(([k, v]) => (
                  <button
                    key={k} type="button"
                    onClick={() => setForm(f => ({ ...f, kategori: k }))}
                    className={`p-5 rounded-2xl border-2 text-left transition-colors ${
                      form.kategori === k ? 'border-[#1a6b3c] bg-[#f0faf4]' : 'border-gray-100 hover:border-[#1a6b3c]/40'
                    }`}
                  >
                    <div className="text-3xl mb-2">{v.ikon}</div>
                    <p className="font-medium text-gray-900 text-sm">{v.etikett}</p>
                  </button>
                ))}
              </div>
              <button
                type="button" disabled={!form.kategori}
                onClick={() => setSteg(2)}
                className="btn-primary w-full mt-8 bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold disabled:opacity-40"
              >
                Fortsätt
              </button>
            </div>
          )}

          {steg === 2 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-gray-900">Beskriv uppdraget</h2>
              {[
                { id: 'titel', label: 'Titel', type: 'text', placeholder: 'T.ex. Flytt av 2:a i centrum' },
                { id: 'adress', label: 'Adress', type: 'text', placeholder: 'Gatuadress' },
                { id: 'datum', label: 'Önskat datum', type: 'date', placeholder: '' },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                  <input
                    id={f.id} type={f.type} value={(form as never)[f.id]}
                    onChange={e => setForm(prev => ({ ...prev, [f.id]: e.target.value }))}
                    placeholder={f.placeholder} required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="stad" className="block text-sm font-medium text-gray-700 mb-1.5">Stad</label>
                <select
                  id="stad" value={form.stad}
                  onChange={e => setForm(f => ({ ...f, stad: e.target.value }))}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 bg-white"
                >
                  <option value="" disabled>Välj stad</option>
                  {STÄDER.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="beskrivning" className="block text-sm font-medium text-gray-700 mb-1.5">Beskrivning</label>
                <textarea
                  id="beskrivning" value={form.beskrivning}
                  onChange={e => setForm(f => ({ ...f, beskrivning: e.target.value }))}
                  placeholder="Berätta mer om vad du behöver hjälp med" rows={4} required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 resize-none"
                />
              </div>
              <div className="flex gap-3 mt-2">
                <button type="button" onClick={() => setSteg(1)} className="flex-1 border-2 border-gray-200 text-gray-700 py-3.5 rounded-full font-semibold">Tillbaka</button>
                <button
                  type="button"
                  disabled={!form.titel || !form.beskrivning || !form.adress || !form.stad || !form.datum}
                  onClick={() => setSteg(3)}
                  className="btn-primary flex-1 bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold disabled:opacity-40"
                >
                  Fortsätt
                </button>
              </div>
            </div>
          )}

          {steg === 3 && (
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold text-gray-900">Sätt ditt pris</h2>
              {form.kategori && (
                <div className="bg-[#f0faf4] rounded-xl p-4 text-sm text-[#1a6b3c]">
                  Grannar brukar ta ungefär: <span className="font-semibold">{PRISSUGGEST[form.kategori as Kategori]}</span>
                </div>
              )}
              <div>
                <label htmlFor="pris" className="block text-sm font-medium text-gray-700 mb-3">
                  Ditt pris: <span className="text-[#1a6b3c] font-bold">{form.pris} kr</span>
                </label>
                <input
                  id="pris" type="range" min={50} max={10000} step={50}
                  value={form.pris}
                  onChange={e => setForm(f => ({ ...f, pris: Number(e.target.value) }))}
                  className="w-full accent-[#1a6b3c]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>50 kr</span><span>10 000 kr</span>
                </div>
              </div>
              <div>
                <label htmlFor="prisInput" className="block text-sm font-medium text-gray-700 mb-1.5">Eller ange manuellt</label>
                <div className="relative">
                  <input
                    id="prisInput" type="number" min={50} max={10000}
                    value={form.pris}
                    onChange={e => setForm(f => ({ ...f, pris: Number(e.target.value) }))}
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kr</span>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button type="button" onClick={() => setSteg(2)} className="flex-1 border-2 border-gray-200 text-gray-700 py-3.5 rounded-full font-semibold">Tillbaka</button>
                <button type="button" onClick={() => setSteg(4)} className="btn-primary flex-1 bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold">Granska</button>
              </div>
            </div>
          )}

          {steg === 4 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-gray-900">Granska och publicera</h2>
              <div className="bg-[#f0faf4] rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{form.kategori ? KATEGORIER[form.kategori].ikon : ''}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{form.titel}</p>
                    <p className="text-sm text-[#1a6b3c]">{form.kategori ? KATEGORIER[form.kategori].etikett : ''}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{form.beskrivning}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><p className="text-gray-400">Adress</p><p className="font-medium text-gray-900">{form.adress}</p></div>
                  <div><p className="text-gray-400">Stad</p><p className="font-medium text-gray-900">{form.stad}</p></div>
                  <div><p className="text-gray-400">Datum</p><p className="font-medium text-gray-900">{form.datum}</p></div>
                  <div><p className="text-gray-400">Pris</p><p className="font-bold text-[#1a6b3c] text-lg">{form.pris} kr</p></div>
                </div>
              </div>
              <p className="text-xs text-gray-400">
                Grannfix tar en serviceavgift på 15% när uppdraget är avslutat. Du betalar ingenting nu.
              </p>
              {error && <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>}
              <div className="flex gap-3">
                <button type="button" onClick={() => setSteg(3)} className="flex-1 border-2 border-gray-200 text-gray-700 py-3.5 rounded-full font-semibold">Tillbaka</button>
                <button type="submit" disabled={pending} className="btn-primary flex-1 bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold disabled:opacity-60">
                  {pending ? 'Publicerar...' : 'Publicera uppdrag'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
