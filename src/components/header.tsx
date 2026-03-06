"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import { HEADER_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

const PROPOSAL_HEADER_THEME: Record<
  string,
  {
    desktopBorder: string
    desktopHover: string
    icon: string
    titleHover: string
    mobileBorder: string
    mobileText: string
  }
> = {
  health: {
    desktopBorder: "border-red-100",
    desktopHover: "hover:bg-red-50 focus:bg-red-50",
    icon: "text-red-600",
    titleHover: "group-hover:text-red-600",
    mobileBorder: "border-red-400",
    mobileText: "text-red-700 hover:text-red-800"
  },
  education: {
    desktopBorder: "border-amber-100",
    desktopHover: "hover:bg-amber-50 focus:bg-amber-50",
    icon: "text-amber-600",
    titleHover: "group-hover:text-amber-600",
    mobileBorder: "border-amber-400",
    mobileText: "text-amber-700 hover:text-amber-800"
  },
  transport: {
    desktopBorder: "border-blue-100",
    desktopHover: "hover:bg-blue-50 focus:bg-blue-50",
    icon: "text-blue-600",
    titleHover: "group-hover:text-blue-600",
    mobileBorder: "border-blue-400",
    mobileText: "text-blue-700 hover:text-blue-800"
  },
  "public-service": {
    desktopBorder: "border-green-100",
    desktopHover: "hover:bg-green-50 focus:bg-green-50",
    icon: "text-green-600",
    titleHover: "group-hover:text-green-600",
    mobileBorder: "border-green-400",
    mobileText: "text-green-700 hover:text-green-800"
  },
  security: {
    desktopBorder: "border-slate-200",
    desktopHover: "hover:bg-slate-100 focus:bg-slate-100",
    icon: "text-slate-700",
    titleHover: "group-hover:text-slate-700",
    mobileBorder: "border-slate-400",
    mobileText: "text-slate-700 hover:text-slate-900"
  },
  assistance: {
    desktopBorder: "border-purple-100",
    desktopHover: "hover:bg-purple-50 focus:bg-purple-50",
    icon: "text-purple-600",
    titleHover: "group-hover:text-purple-600",
    mobileBorder: "border-purple-400",
    mobileText: "text-purple-700 hover:text-purple-800"
  }
}

function getProposalTheme(proposalId: string) {
  return PROPOSAL_HEADER_THEME[proposalId] ?? PROPOSAL_HEADER_THEME.security
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (isMenuOpen) {
      setIsMenuVisible(true)
    } else {
      timeoutId = setTimeout(() => {
        setIsMenuVisible(false)
      }, 300) // Corresponde à duração da animação
    }
    return () => clearTimeout(timeoutId)
  }, [isMenuOpen])

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className="bg-white lg:flex lg:items-center lg:justify-between px-2 lg:px-4 lg:container lg:mx-auto">
      <div className="flex justify-between items-center p-6">
        <Link href="/" className="size-fit">
          <Image src="/logo.png" width={150} height={150} alt="size-auto" />
        </Link>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleMenu}
          className="lg:hidden">
          {isMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </Button>
      </div>

      {isMenuVisible && (
        <div
          className={cn(
            isMenuOpen
              ? "animate-in slide-in-from-top-4"
              : "animate-out slide-out-to-top-4",
            "duration-300 lg:hidden"
          )}>
          <Separator />

          <ul className="flex flex-col gap-1 p-4">
            {HEADER_LINKS.map((item) => (
              <li key={item.id} className="flex flex-col">
                {item.proposals ? (
                  <>
                    <span className="text-primary font-medium py-2 px-3">
                      {item.name}
                    </span>
                    <ul className="space-y-1 pl-2">
                      {item.proposals.map((sublink) => {
                        const theme = getProposalTheme(sublink.id)

                        return (
                          <li
                            key={sublink.id}
                            className={cn(
                              "py-2 px-3 border-l-2",
                              theme.mobileBorder
                            )}>
                            <Link
                              href={sublink.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={cn(
                                "font-medium transition-colors duration-300",
                                theme.mobileText
                              )}>
                              {sublink.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground font-medium py-2 px-3">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Separator />

          <div className="space-y-3 p-4">
            <Button
              asChild
              variant="outline"
              className="h-10 w-full border-primary font-bold text-primary hover:bg-primary/10">
              <Link href="/quem-sou" onClick={() => setIsMenuOpen(false)}>
                Quem sou
              </Link>
            </Button>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground hover:text-primary-foreground font-bold h-10">
              <a
                href="https://app.eliasmedeiros.bsb.br"
                target="_blank"
                rel="noopener noreferrer">
                Seja um voluntário
              </a>
            </Button>
          </div>
        </div>
      )}

      <div className="hidden lg:flex">
        {HEADER_LINKS.map((item) =>
          item.proposals ? (
            <HoverCard key={item.id}>
              <HoverCardTrigger asChild>
                <Button
                  variant="ghost"
                  className="group data-[state=open]:bg-muted">
                  {item.name}
                  <ChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180 group-data-[state=open]:rotate-180" />
                </Button>
              </HoverCardTrigger>

              <HoverCardContent className="w-120 grid grid-cols-2 grid-rows-3 gap-3">
                {item.proposals.map(({ icon: Icon, ...proposal }) => {
                  const theme = getProposalTheme(proposal.id)

                  return (
                    <Link
                      href={proposal.href}
                      key={proposal.id}
                      className={cn(
                        "flex p-2 rounded-lg border hover:cursor-pointer transition-colors duration-300 group",
                        theme.desktopBorder,
                        theme.desktopHover
                      )}>
                      <Icon
                        className={cn("size-12 transition-colors", theme.icon)}
                      />
                      <div className="ml-4">
                        <h3
                          className={cn(
                            "font-medium transition-colors duration-300",
                            theme.titleHover
                          )}>
                          {proposal.title.split(" ")[0]}
                        </h3>
                        <p className="text-muted-foreground">
                          {proposal.description}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Button key={item.id} variant="ghost" asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          )
        )}
      </div>

      <div className="hidden items-center gap-2 lg:flex">
        <Button
          asChild
          variant="outline"
          className="h-10 border-primary font-bold text-primary hover:bg-primary/10">
          <Link href="/quem-sou">Quem sou</Link>
        </Button>
        <Button
          asChild
          className="bg-primary hover:bg-primary/80 text-primary-foreground hover:text-primary-foreground font-bold h-10">
          <a
            href="https://app.eliasmedeiros.bsb.br"
            target="_blank"
            rel="noopener noreferrer">
            Seja um voluntário
          </a>
        </Button>
      </div>
    </nav>
  )
}
