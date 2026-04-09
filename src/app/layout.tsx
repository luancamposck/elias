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
  // IMPORTANTE:
  // Escolha aqui a URL CANÔNICA do site.
  // Se você quer usar www, mantenha tudo com www.
  // Ex.: https://www.seudominio.com
  metadataBase: new URL("https://www.eliasmedeiros.bsb.br"),

  title: "Elias Medeiros | Boa política melhora tudo ao redor",
  description:
    "Diagnóstico claro, visão de país e participação ativa para destravar Brasília com responsabilidade.",

  alternates: {
    canonical: "/"
  },

  openGraph: {
    title: "Elias Medeiros | Boa política melhora tudo ao redor",
    description:
      "Diagnóstico claro, visão de país e participação ativa para destravar Brasília com responsabilidade.",
    url: "/",
    siteName: "Elias Medeiros",
    locale: "pt_BR",
    type: "website",

    images: [
      {
        // ESTA imagem será usada no Open Graph:
        // - Facebook
        // - WhatsApp (geralmente usa OG também)
        // - Messenger
        // - outras redes/apps de mensagem que leem og:image
        //
        // Também é a imagem principal do ecossistema Meta para preview de link.
        url: "/social/og-meta.png",
        width: 1200,
        height: 630,
        alt: "Elias Medeiros - Boa política melhora tudo ao redor"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Elias Medeiros | Boa política melhora tudo ao redor",
    description:
      "Diagnóstico claro, visão de país e participação ativa para destravar Brasília com responsabilidade.",

    // ESTA imagem será usada no X/Twitter
    images: ["/social/og-meta.jpg"]
  }

  // OBSERVAÇÃO SOBRE INSTAGRAM:
  // Não existe um campo separado tipo "instagram.image" no Metadata API do Next.js.
  // Então você não controla uma imagem EXCLUSIVA do Instagram por aqui.
  // No Next, a separação oficial é basicamente:
  // - openGraph => Facebook / apps de mensagem / previews OG
  // - twitter   => X/Twitter
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
