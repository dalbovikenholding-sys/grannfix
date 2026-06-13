import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-semibold text-lg mb-3">Grannfix</p>
          <p className="text-sm leading-relaxed">Grannhjälp i Norrbotten. Snabbt, prisvärt och lokalt.</p>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Tjänster</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/uppdrag?kategori=flytt" className="hover:text-white transition-colors">Flytta &amp; bära</Link></li>
            <li><Link href="/uppdrag?kategori=stad" className="hover:text-white transition-colors">Städhjälp</Link></li>
            <li><Link href="/uppdrag?kategori=tradgard" className="hover:text-white transition-colors">Trädgård &amp; snöskottning</Link></li>
            <li><Link href="/uppdrag?kategori=smaffix" className="hover:text-white transition-colors">Småfix &amp; montering</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Kontakt</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:hej@grannfix.se" className="hover:text-white transition-colors">
                hej@grannfix.se
              </a>
            </li>
            <li>Luleå, Norrbotten</li>
            <li className="pt-2">
              <Link href="/integritetspolicy" className="hover:text-white transition-colors">Integritetspolicy</Link>
            </li>
            <li>
              <Link href="/anvandarvillkor" className="hover:text-white transition-colors">Användarvillkor</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-8 text-center text-sm">
        <p>© 2026 Grannfix, ett Dalboviken-projekt</p>
      </div>
    </footer>
  )
}
