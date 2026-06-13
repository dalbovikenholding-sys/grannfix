'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: '/uppdrag', label: 'Hitta uppdrag' },
    { href: '/bli-granne', label: 'Bli granne' },
    { href: '/#priser', label: 'Priser' },
  ]

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4"
        style={{ maxWidth: 'calc(100% - 2rem)' }}
        aria-label="Huvudnavigation"
      >
        <div
          className="max-w-4xl mx-auto"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '9999px',
            padding: '10px 20px',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.12)'
              : '0 2px 12px rgba(0,0,0,0.06)',
            transition: 'box-shadow 300ms cubic-bezier(0.23,1,0.32,1)',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-[17px] font-bold tracking-tight text-[#1a6b3c] shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            Grannfix
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7 text-sm text-gray-600">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#1a6b3c] transition-colors duration-[120ms]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-[#1a6b3c] transition-colors duration-[120ms] font-medium"
            >
              Logga in
            </Link>
            <Link
              href="/registrera"
              className="btn-primary bg-[#1a6b3c] hover:bg-[#145530] text-white text-sm px-5 py-2 rounded-full font-semibold"
            >
              Registrera dig
            </Link>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden w-8 h-8 relative flex flex-col items-center justify-center shrink-0"
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            <span
              className="block absolute h-[2px] w-5 bg-gray-800 rounded-full"
              style={{
                transform: menuOpen ? 'rotate(45deg) translateY(0)' : 'translateY(-5px)',
                transition: 'transform 280ms cubic-bezier(0.23,1,0.32,1)',
              }}
            />
            <span
              className="block absolute h-[2px] w-5 bg-gray-800 rounded-full"
              style={{
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 180ms cubic-bezier(0.23,1,0.32,1)',
              }}
            />
            <span
              className="block absolute h-[2px] w-5 bg-gray-800 rounded-full"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translateY(0)' : 'translateY(5px)',
                transition: 'transform 280ms cubic-bezier(0.23,1,0.32,1)',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-menu-overlay fixed inset-0 z-40 bg-white flex flex-col px-8 pt-28 pb-12 md:hidden${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-2 flex-1">
          {navLinks.map(link => (
            <div key={link.href} className="mobile-menu-link">
              <Link
                href={link.href}
                className="block text-3xl font-bold text-gray-900 hover:text-[#1a6b3c] py-3 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="mobile-menu-link flex flex-col gap-3">
          <Link
            href="/login"
            className="btn-secondary w-full border-2 border-[#1a6b3c] text-[#1a6b3c] px-6 py-3.5 rounded-full font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Logga in
          </Link>
          <Link
            href="/registrera"
            className="btn-primary w-full bg-[#1a6b3c] text-white px-6 py-3.5 rounded-full font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Registrera dig
          </Link>
        </div>
      </div>
    </>
  )
}
