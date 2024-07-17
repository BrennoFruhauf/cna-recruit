import "./globals.css"

import type { Metadata } from "next"

import { finalSix } from "@/config/fonts"
import { pageInfo } from "@/constants"

export const metadata: Metadata = {
  title: pageInfo.title,
  description: pageInfo.description,
  authors: [{ name: pageInfo.authorName }],
  openGraph: {
    type: "website",
    title: pageInfo.title,
    description: pageInfo.description,
    images: '/imgs/CNA.webp',
    locale: pageInfo.locale,
    url: pageInfo.url,
    countryName: "Brazil",
    siteName: "CNA Catalão",
    phoneNumbers: ["+556434116540"],
    emails: ["cnaidiomascatalao@gmail.com"],
  },
  twitter: {
    title: pageInfo.title,
    description: pageInfo.description,
    site: pageInfo.url,
    images: '/imgs/CNA.webp',
    card: "summary_large_image"
  },
  keywords: [
    "CNA",
    "Catalão",
    "CNA Catalão",
    "Recrutamento",
    "CNA Catalão Recrutamento",
    "Professor",
    "Inglês",
    "Professor de Inglês",
    "Ensino de Inglês",
    "Aulas de Inglês em Catalão",
    "Escola de Idiomas"
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={pageInfo.locale}>
      <body className={`${finalSix.className} bg-secondary min-w-52`}>
        {children}
      </body>
    </html>
  )
}
