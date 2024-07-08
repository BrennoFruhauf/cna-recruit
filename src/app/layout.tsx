import "./globals.css"

import type { Metadata } from "next"

import { finalSix } from "@/config/fonts"
import { pageInfo } from "@/constants"

export const metadata: Metadata = {
  title: pageInfo.title,
  description: pageInfo.description,
  authors: [{ name: pageInfo.authorName }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${finalSix.className} bg-secondary min-w-52`}>
        {children}
      </body>
    </html>
  )
}
