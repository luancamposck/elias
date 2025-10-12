import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAFooterProps {
  message: string
  className?: string
}

export default function CTAFooter({ message, className }: CTAFooterProps) {
  return (
    <div className={cn("bg-blue-900 text-white p-8 rounded-lg", className)}>
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
        <Button className="h-10 bg-orange-500 text-white hover:bg-orange-600 font-bold px-8 py-3">
          Apoie Esta Proposta
        </Button>

        <Button className="h-10 border bg-background border-orange-500 text-orange-500 hover:bg-yellow-400 hover:text-blue-900 font-bold px-8 py-3">
          Compartilhar
        </Button>
      </div>
    </div>
  )
}
