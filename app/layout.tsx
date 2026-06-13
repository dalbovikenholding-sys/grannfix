import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })

export const metadata: Metadata = {
  title: {
    default: "Grannfix | Grannhjälp i Norrbotten",
    template: "%s | Grannfix",
  },
  description: "Anlita grannen för flytt, städ, trädgård och småfix i Norrbotten. Du sätter priset, grannen hjälper till. Snabb hjälp i Luleå, Boden, Piteå och hela länet.",
  keywords: [
    "grannhjälp",
    "Norrbotten",
    "Luleå",
    "Boden",
    "Piteå",
    "flytthjälp Luleå",
    "städhjälp Luleå",
    "snöskottning Luleå",
    "trädgårdshjälp Norrbotten",
    "IKEA montering Luleå",
    "småfix Luleå",
    "hantverkare Luleå",
    "billig flytthjälp Norrbotten",
    "grannfix",
  ],
  authors: [{ name: "Grannfix" }],
  creator: "Grannfix",
  publisher: "Grannfix",
  metadataBase: new URL("https://grannfix.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grannfix | Grannhjälp i Norrbotten",
    description: "Anlita grannen för flytt, städ, trädgård och småfix. Snabbt, prisvärt och lokalt i Norrbotten.",
    url: "https://grannfix.se",
    siteName: "Grannfix",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Grannfix – Grannhjälp i Norrbotten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grannfix | Grannhjälp i Norrbotten",
    description: "Anlita grannen för flytt, städ, trädgård och småfix. Snabbt, prisvärt och lokalt i Norrbotten.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Lägg till Google Search Console-verifieringskod här när sajten är live
    // google: "xxxx",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={geist.variable}>
      <body className="font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
