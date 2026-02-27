import Image from "next/image"
import Link from "next/link"

import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { PROPOSALS } from "@/lib/constants"

const proposalLinks = PROPOSALS

const participateLinks = [
  { href: "https://app.eliasmedeiros.bsb.br", label: "Seja um voluntário" },
  { href: "/streamline", label: "Desburocratize" },
  { href: "/report", label: "Denuncie" },
  { href: "/", label: "Fale conosco" }
]

const socialLinks = [
  {
    href: "https://www.facebook.com/EliasMedeirosTV",
    icon: FacebookIcon,
    label: "Facebook"
  },
  { href: "https://x.com/eliasmedeiros", icon: XIcon, label: "Twitter" },
  {
    href: "https://www.instagram.com/eliasmedeiros/",
    icon: InstagramIcon,
    label: "Instagram"
  },
  {
    href: "https://www.youtube.com/@eliasmedeiros",
    icon: YoutubeIcon,
    label: "YouTube"
  }
]

export const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Logo and Social */}
        <div>
          <Image
            src="/white-logo.png"
            alt="Medeiros Logo"
            width={112}
            height={112}
            className="mb-4"
          />
          <p className="text-gray-300">Eu por ti, nós por Brasília.</p>
          <div className="flex gap-4 mt-4">
            {socialLinks.map(({ icon: Icon, ...social }) => {
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}>
                  <Icon className="size-6" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Proposals */}
        <div>
          <h4 className="font-bold mb-4 text-white">Propostas</h4>
          <ul className="space-y-2">
            {proposalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Participate */}
        <div>
          <h4 className="font-bold mb-4 text-white">Participe</h4>
          <ul className="space-y-2">
            {participateLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4 text-white">Contato</h4>
          <p className="text-gray-300 mb-2">Receba nossas novidades</p>
          <div className="flex gap-2 mb-4">
            <input
              type="email"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              placeholder="Seu e-mail"
            />
            <Button className="font-medium h-10 px-4 py-2 bg-primary text-white hover:bg-primary/90">
              OK
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        <p>© 2026 Elias Medeiros. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
)
