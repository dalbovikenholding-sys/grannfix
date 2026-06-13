'use client'

import Link from 'next/link'
import { useState, useTransition } from 'react'
import { registrera } from '@/app/actions/auth'

const STÄDER = ['Luleå', 'Boden', 'Piteå', 'Kiruna', 'Gällivare', 'Övriga Norrbotten']

export default function RegistreraPage() {
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const fd = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await registrera(fd)
      if (result?.error) setError(result.error)
    })
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
            <label htmlFor="namn" className="block text-sm font-medium text-gray-700 mb-1.5">Namn</label>
            <input
              id="namn" name="namn" type="text"
              placeholder="För- och efternamn"
              required autoComplete="name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="epost" className="block text-sm font-medium text-gray-700 mb-1.5">E-postadress</label>
            <input
              id="epost" name="epost" type="email"
              placeholder="din@epost.se"
              required autoComplete="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="stad" className="block text-sm font-medium text-gray-700 mb-1.5">Stad</label>
            <select
              id="stad" name="stad" required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 bg-white transition-colors"
            >
              <option value="" disabled>Välj stad</option>
              {STÄDER.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="losenord" className="block text-sm font-medium text-gray-700 mb-1.5">Lösenord</label>
            <input
              id="losenord" name="losenord" type="password"
              placeholder="Minst 8 tecken"
              required minLength={8} autoComplete="new-password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          <p className="text-xs text-gray-400">
            Genom att registrera dig godkänner du våra{' '}
            <Link href="/anvandarvillkor" className="text-[#1a6b3c] hover:underline">användarvillkor</Link>
            {' '}och{' '}
            <Link href="/integritetspolicy" className="text-[#1a6b3c] hover:underline">integritetspolicy</Link>.
          </p>
          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
          )}
          <button
            type="submit" disabled={pending}
            className="btn-primary w-full bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold mt-1 disabled:opacity-60 transition-opacity"
          >
            {pending ? 'Skapar konto...' : 'Skapa konto'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Har du redan ett konto?{' '}
          <Link href="/login" className="text-[#1a6b3c] font-medium hover:underline">Logga in</Link>
        </p>
      </div>
    </div>
  )
}
