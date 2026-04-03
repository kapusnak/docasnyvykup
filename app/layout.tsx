import type { Metadata } from "next"
import { Cardo, Inter } from "next/font/google"

import { AppToaster } from "@/components/app-toaster"
import { GoogleAdsGtag } from "@/components/google-ads-gtag"
import { GoogleAnalytics } from "@/components/google-analytics"
import { GoogleTagManager } from "@/components/google-tag-manager"

import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

const cardo = Cardo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-cardo",
  display: "swap",
})

const siteTitle = "Dočasný výkup nemovitostí a vozidel | Rychlé financování se zpětným odkupem"
const siteDescription =
  "Získejte finanční prostředky a nadále užívejte svou nemovitost nebo vůz. Dočasný výkup nemovitostí a vozidel s možností zpětného odkupu."

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://docasnyvykup.cz"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Dočasný výkup",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/og-docasnyvykup.webp", width: 1200, height: 630, alt: "Dočasný výkup", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-docasnyvykup.webp"],
  },
  icons: {
    icon: [{ url: "/cropped-docasnyvykup-logo-circled.webp", sizes: "512x512", type: "image/webp" }],
    apple: "/cropped-docasnyvykup-logo-circled.webp",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} ${cardo.variable}`}>
      <body className="min-h-screen font-sans">
        <GoogleTagManager />
        <GoogleAdsGtag />
        {children}
        <GoogleAnalytics />
        <AppToaster />
      </body>
    </html>
  )
}
