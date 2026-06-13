import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logga in',
  description: 'Logga in på ditt Grannfix-konto och hantera dina uppdrag i Norrbotten.',
  robots: { index: false, follow: false },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}
