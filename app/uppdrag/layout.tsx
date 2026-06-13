import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uppdrag i Norrbotten',
  description: 'Hitta uppdrag nära dig i Luleå, Boden, Piteå och hela Norrbotten. Flytt, städ, trädgård och småfix.',
  keywords: ['uppdrag Luleå', 'grannhjälp Norrbotten', 'tjäna pengar Luleå'],
  openGraph: {
    title: 'Uppdrag i Norrbotten | Grannfix',
    description: 'Bläddra bland uppdrag och tjäna pengar som granne i Norrbotten.',
    url: 'https://grannfix.se/uppdrag',
  },
}

export default function UppdragLayout({ children }: { children: React.ReactNode }) {
  return children
}
