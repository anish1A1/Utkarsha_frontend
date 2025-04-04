import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/component/header"
import Footer from "@/component/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "E-Commerce Store",
  description: "Shop the latest products at great prices",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
      </body>
    </html>
  )
}

