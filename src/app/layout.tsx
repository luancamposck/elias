import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"

import "./globals.css"

import { Footer } from "@/components/footer"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/sonner"

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const metadata: Metadata = {
  title: "Elias Medeiros",
  description: ""
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="pt-BR">
    <body className={`${ubuntu.variable} antialiased`}>
      <GoogleAnalytics />
      <Header />
      {children}
      <Footer />
      <Toaster />
    </body>
  </html>
)

export default RootLayout
