import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/profil", "/uppdrag/ny"],
      },
    ],
    sitemap: "https://grannfix.se/sitemap.xml",
  }
}
