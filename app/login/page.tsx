'use client'

import Link from 'next/link'
import { useState, useTransition, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { loggaIn } from '@/app/actions/auth'

function LoginForm() {
  const searchParams = useSearchParams()
  const returnTo = searchParams.get('returnTo') || '/dashboard'
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const fd = new FormData(e.currentTarget)
    fd.set('returnTo', returnTo)

    startTransition(async () => {
      const result = await loggaIn(fd)
      if (result?.error) setError(result.error)
    })
  }

  return (
    <div className="min-h-[calc(100vh-128px)] bg-[#f0faf4] flex items-center justify-center px-6 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-[#1a6b3c]">Grannfix</Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">Logga in</h1>
          <p className="text-gray-500 text-sm mt-2">Välkommen tillbaka</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="epost" className="block text-sm font-medium text-gray-700 mb-1.5">
              E-postadress
            </label>
            <input
              id="epost"
              name="epost"
              type="email"
              placeholder="din@epost.se"
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="losenord" className="block text-sm font-medium text-gray-700 mb-1.5">
              Lösenord
            </label>
            <input
              id="losenord"
              name="losenord"
              type="password"
              placeholder="••••••••"
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#1a6b3c]/30 focus:border-[#1a6b3c] text-gray-900 transition-colors"
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="btn-primary w-full bg-[#1a6b3c] text-white py-3.5 rounded-full font-semibold mt-1 disabled:opacity-60 transition-opacity"
          >
            {pending ? 'Loggar in...' : 'Logga in'}
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
