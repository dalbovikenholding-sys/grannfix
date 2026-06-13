import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skapa konto',
  description: 'Registrera dig på Grannfix gratis. Anlita grannar eller tjäna pengar på uppdrag nära dig i Norrbotten.',
  robots: { index: true, follow: true },
}

export default function RegistreraLayout({ children }: { children: React.ReactNode }) {
  return children
}
