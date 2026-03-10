import Image from "next/image"

import { ShareButton } from "@/components/share-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAFooterProps {
  message: string
  className?: string
}

export default function CTAFooter({ message, className }: CTAFooterProps) {
  return (
    <div className={cn("relative overflow-hidden bg-blue-900 text-white p-8 rounded-lg", className)}>
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brazil-green via-brazil-yellow to-brazil-green"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-[200px] rounded-full bg-brazil-green/[0.08] blur-[80px]"
        aria-hidden="true"
      />
      <div className="mx-auto w-[150px] h-[50px] relative">
        <Image
          src="/white-logo.png"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      <p className="text-lg mt-2 mb-6 text-center">{message}</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="h-10 bg-primary text-white hover:bg-primary/90 font-bold px-8 py-3">
          <a href="https://app.eliasmedeiros.bsb.br" target="_blank" rel="noopener noreferrer">
            Apoie Esta Proposta
          </a>
        </Button>

        <ShareButton className="h-10 border bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-3">
          Compartilhar
        </ShareButton>
      </div>
    </div>
  )
}
