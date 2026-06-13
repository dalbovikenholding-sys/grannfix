import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })

export const metadata: Metadata = {
  title: "Grannfix | Grannhjälp i Norrbotten",
  description: "Anlita grannen för flytt, städ, trädgård och småfix i Norrbotten. Du sätter priset, vi kopplar ihop dig med en pålitlig granne samma dag.",
  metadataBase: new URL("https://grannfix.se"),
  openGraph: {
    title: "Grannfix | Grannhjälp i Norrbotten",
    description: "Anlita grannen för flytt, städ, trädgård och småfix. Snabbt, prisvärt och lokalt.",
    siteName: "Grannfix",
    locale: "sv_SE",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={geist.variable}>
      <body>{children}</body>
    </html>
  )
}
