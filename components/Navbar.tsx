import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-[#1a6b3c]">
          Grannfix
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link href="/uppdrag" className="hover:text-[#1a6b3c] active:opacity-60 transition-colors duration-[120ms]">
            Hitta uppdrag
          </Link>
          <Link href="/bli-granne" className="hover:text-[#1a6b3c] active:opacity-60 transition-colors duration-[120ms]">
            Bli granne
          </Link>
          <Link href="/#priser" className="hover:text-[#1a6b3c] active:opacity-60 transition-colors duration-[120ms]">
            Priser
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-[#1a6b3c] active:opacity-60 transition-colors duration-[120ms] font-medium"
          >
            Logga in
          </Link>
          <Link
            href="/registrera"
            className="btn-primary bg-[#1a6b3c] text-white text-sm px-5 py-2 rounded-full font-medium"
          >
            Registrera dig
          </Link>
        </div>
      </div>
    </nav>
  )
}
