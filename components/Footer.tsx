import Link from 'next/link'

const cols = [
  {
    heading: 'Tjänster',
    links: [
      { href: '/uppdrag?kategori=flytt',    label: 'Flytta & bära' },
      { href: '/uppdrag?kategori=stad',     label: 'Städhjälp' },
      { href: '/uppdrag?kategori=tradgard', label: 'Trädgård & snöskottning' },
      { href: '/uppdrag?kategori=smafix',   label: 'Småfix & montering' },
      { href: '/uppdrag?kategori=hamtning', label: 'Hämta & lämna' },
    ],
  },
  {
    heading: 'Grannfix',
    links: [
      { href: '/bli-granne',        label: 'Bli granne' },
      { href: '/uppdrag',           label: 'Hitta uppdrag' },
      { href: '/#priser',           label: 'Priser' },
      { href: '/integritetspolicy', label: 'Integritetspolicy' },
      { href: '/anvandarvillkor',   label: 'Användarvillkor' },
    ],
  },
  {
    heading: 'Kontakt',
    links: [
      { href: 'mailto:hej@grannfix.se', label: 'hej@grannfix.se' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="text-[22px] font-extrabold tracking-tight text-[#1a6b3c] block mb-4"
            >
              Grannfix
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Grannhjälp i Norrbotten. Snabbt, prisvärt och lokalt i Luleå, Boden och Piteå.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span
                style={{
                  display: 'inline-block',
                  width: '7px',
                  height: '7px',
                  borderRadius: '9999px',
                  background: '#22a05a',
                }}
              />
              <span className="text-xs text-gray-400">Lanserar Luleå hösten 2026</span>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((col) => (
              <div key={col.heading}>
                <p
                  className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-5"
                  style={{ color: '#9ca3af' }}
                >
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-[#1a6b3c] transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-400"
          style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
        >
          <span>© 2026 Grannfix, ett Dalboviken-projekt. Luleå, Sverige.</span>
          <span className="flex items-center gap-6">
            <Link href="/integritetspolicy" className="hover:text-[#1a6b3c] transition-colors">
              Integritetspolicy
            </Link>
            <Link href="/anvandarvillkor" className="hover:text-[#1a6b3c] transition-colors">
              Användarvillkor
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
