import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bli granne och tjäna pengar',
  description: 'Registrera dig som utförare på Grannfix. Ta uppdrag nära dig i Norrbotten och tjäna pengar på din fritid.',
  keywords: ['tjäna pengar Luleå', 'extrainkomst Norrbotten', 'bli helper Grannfix'],
  openGraph: {
    title: 'Bli granne och tjäna pengar | Grannfix',
    description: 'Ta uppdrag nära dig och tjäna pengar på din fritid i Norrbotten.',
    url: 'https://grannfix.se/bli-granne',
  },
}

export default function BliGranneLayout({ children }: { children: React.ReactNode }) {
  return children
}
