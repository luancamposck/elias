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
                    <ul className="pl-4 border-l-primary/30 border-l-2">
                      {item.proposals.map((sublink) => {
                        return (
                          <li key={sublink.id} className="py-2 px-3">
                            <Link
                              href={sublink.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-foreground font-medium">
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

          <div className="p-4">
            <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground hover:text-primary-foreground font-bold h-10">
              Seja um voluntário
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
                {item.proposals.map(({ icon: Icon, ...proposal }) => (
                  <Link
                    href={proposal.href}
                    key={proposal.id}
                    className="flex p-2 rounded-lg hover:cursor-pointer hover:bg-primary/10 focus:bg-primary/10 transition-colors duration-300 group">
                    <Icon className="size-12 text-primary" />
                    <div className="ml-4">
                      <h3 className="font-medium group-hover:text-primary transition-colors duration-300">
                        {proposal.title.split(" ")[0]}
                      </h3>
                      <p className="text-muted-foreground">
                        {proposal.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Button key={item.id} variant="ghost" asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          )
        )}
      </div>

      <Button className="hidden lg:flex bg-primary hover:bg-primary/80 text-primary-foreground hover:text-primary-foreground font-bold h-10">
        Seja um voluntário
      </Button>
    </nav>
  )
}
