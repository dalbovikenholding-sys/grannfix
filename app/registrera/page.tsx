'use client'

import Link from 'next/link'
import { useState } from 'react'

const STÄDER = ['Luleå', 'Boden', 'Piteå', 'Kiruna', 'Gällivare', 'Övriga Norrbotten']

export default function RegistreraPage() {
  const [form, setForm] = useState({
    namn: '',
    epost: '',
    stad: '',
    losenord: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="min-h-[calc(100vh-128px)] bg-[#f0faf4] flex items-center justify-center px-6 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-[#1a6b3c]">Grannfix</Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">Skapa konto</h1>
          <p className="text-gray-500 text-sm mt-2">Kom igång med Grannfix gratis</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="namn" className="block text-sm font-medium text-gray-700 mb-1.5">
              Namn
            </label>
            <input
              id="namn"
              name="namn"
              type="text"
              value={form.namn}
              onChange={handleChange}
              placeholder="För- och efternamn"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="epost" className="block text-sm font-medium text-gray-700 mb-1.5">
              E-postadress
            </label>
            <input
              id="epost"
              name="epost"
              type="email"
              value={form.epost}
              onChange={handleChange}
              placeholder="din@epost.se"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="stad" className="block text-sm font-medium text-gray-700 mb-1.5">
              Stad
            </label>
            <select
              id="stad"
              name="stad"
              value={form.stad}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 bg-white transition-colors"
            >
              <option value="" disabled>Välj stad</option>
              {STÄDER.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="losenord" className="block text-sm font-medium text-gray-700 mb-1.5">
              Lösenord
            </label>
            <input
              id="losenord"
              name="losenord"
              type="password"
              value={form.losenord}
              onChange={handleChange}
              placeholder="Minst 8 tecken"
              required
              minLength={8}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold mt-1"
          >
            Skapa konto
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Har du redan ett konto?{' '}
          <Link href="/login" className="text-[#1a6b3c] font-medium hover:underline">
            Logga in
          </Link>
        </p>
      </div>
    </div>
  )
}
