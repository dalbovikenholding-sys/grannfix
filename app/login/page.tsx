'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const raw = searchParams.get('returnTo') || '/dashboard'
  const returnTo = raw.startsWith('/') && !raw.startsWith('//') && !raw.startsWith('/\\') ? raw : '/dashboard'

  const [epost, setEpost] = useState('')
  const [losenord, setLosenord] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Demo-inloggning: sätter en sessionstoken i kakan.
    // Ersätts med riktig autentisering (Supabase Auth / NextAuth) vid lansering.
    setTimeout(() => {
      document.cookie = 'grannfix_session=demo; path=/; max-age=86400; SameSite=Strict'
      router.push(returnTo)
    }, 600)
  }

  return (
    <div className="min-h-[calc(100vh-128px)] bg-[#f0faf4] flex items-center justify-center px-6 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-[#1a6b3c]">Grannfix</Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">Logga in</h1>
          <p className="text-gray-500 text-sm mt-2">Välkommen tillbaka</p>
        </div>

        <div className="bg-[#f0faf4] border border-[#1a6b3c]/20 rounded-xl px-4 py-3 mb-6 text-sm text-[#1a6b3c]">
          Grannfix lanserar hösten 2026 i Luleå. Registrering öppnar vid lansering.
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="epost" className="block text-sm font-medium text-gray-700 mb-1.5">
              E-postadress
            </label>
            <input
              id="epost"
              type="email"
              value={epost}
              onChange={e => setEpost(e.target.value)}
              placeholder="din@epost.se"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="losenord" className="block text-sm font-medium text-gray-700 mb-1.5">
              Lösenord
            </label>
            <input
              id="losenord"
              type="password"
              value={losenord}
              onChange={e => setLosenord(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold mt-1 disabled:opacity-60"
          >
            {loading ? 'Loggar in...' : 'Logga in'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Inget konto?{' '}
          <Link href="/registrera" className="text-[#1a6b3c] font-medium hover:underline">
            Registrera dig
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
