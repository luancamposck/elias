"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
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

  const items = [
    {
      id: 0,
      name: "Home",
      href: "/home"
    },
    {
      id: 1,
      name: "Propostas",
      href: "#",
      sublinks: [
        {
          id: 0,
          name: "Saúde",
          href: "/propostas/saude"
        },
        {
          id: 1,
          name: "Transporte",
          href: "/propostas/transporte"
        },
        {
          id: 2,
          name: "Servidores",
          href: "/propostas/servidores"
        },
        {
          id: 3,
          name: "Segurança",
          href: "/propostas/seguranca"
        },
        {
          id: 4,
          name: "Assistência Social",
          href: "/propostas/assistencia-social"
        }
      ]
    },
    {
      id: 2,
      name: "Músicas",
      href: "/musicas"
    },
    {
      id: 3,
      name: "Desburocratize",
      href: "/desburocratize"
    },
    {
      id: 4,
      name: "Denuncie",
      href: "/denuncie"
    }
  ]

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className=" sticky top-0 z-20 bg-white">
      <div className="flex justify-between items-center p-3">
        <Image src="/logo.png" width={96} height={96} alt="" />

        <Button variant="ghost" size="icon" onClick={handleToggleMenu}>
          {isMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </Button>
      </div>

      {isMenuVisible && (
        <div
          className={cn(
            isMenuOpen
              ? "animate-in slide-in-from-top-4"
              : "animate-out slide-out-to-top-4",
            "duration-300"
          )}>
          <Separator />

          <ul className="flex flex-col gap-1 p-4">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col">
                {item.sublinks ? (
                  <>
                    <span className="text-orange-600 font-medium py-2 px-3">
                      {item.name}
                    </span>
                    <ul className="pl-4 border-l-orange-200 border-l-2">
                      {item.sublinks.map((sublink) => {
                        return (
                          <li key={sublink.id} className="py-2 px-3">
                            <Link
                              href={sublink.href}
                              className="text-gray-800 font-medium">
                              {sublink.name}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-800 font-medium py-2 px-3">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}

            {/* {items.map((item) => {
                if (item.sublinks) {
                  return (
                    <li>
                      <p className="text-orange-200 font-semibold">
                        {item.name}
                      </p>
                      <ul>
                        {item.sublinks.map((sublink) => {
                          return (
                            <li>
                              <a href={sublink.href}>{sublink.name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return <li>{item.name}</li>;
                }
              })} */}
          </ul>

          <Separator />

          <div className="p-4">
            <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black hover:text-black font-bold h-10">
              Seja um voluntário
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
