import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fluent Paradigm Technologies | Innovation with Integrity",
  description:
    "Fluent Paradigm Technologies builds advanced platforms and digital solutions for education, government, and enterprise.",

  openGraph: {
    title: "Fluent Paradigm Technologies | Innovation with Integrity",
    description:
      "Fluent Paradigm Technologies builds advanced platforms and digital solutions for education, government, and enterprise.",
    url: "https://www.fluentparadigm.com",
    siteName: "Fluent Paradigm Technologies",
    images: ["/logo.png"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fluent Paradigm Technologies | Innovation with Integrity",
    description:
      "Fluent Paradigm Technologies builds advanced platforms and digital solutions for education, government, and enterprise.",
    images: ["/logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
