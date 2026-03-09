"use client"

import { toast } from "sonner"

import { Button, type buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"

type ShareButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    text?: string
    shareTitle?: string
  }

export function ShareButton({
  text = "Dá uma olhada nisso aqui:",
  shareTitle,
  children = "Compartilhar",
  ...buttonProps
}: ShareButtonProps) {
  const copyCurrentUrl = async () => {
    await navigator.clipboard.writeText(window.location.href)
    toast.success("Link copiado para a área de transferência.")
  }

  const handleShare = async () => {
    try {
      const currentUrl = window.location.href

      const shareData: ShareData = {
        title: shareTitle ?? document.title,
        text,
        url: currentUrl,
      }

      const hasNativeShare = typeof navigator.share === "function"
      const canShare =
        typeof navigator.canShare === "function"
          ? navigator.canShare(shareData)
          : true

      if (!hasNativeShare || !canShare) {
        await copyCurrentUrl()
        return
      }

      await navigator.share(shareData)
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return

      console.error(error)

      try {
        await copyCurrentUrl()
      } catch (copyError) {
        console.error(copyError)
        toast.error("Não foi possível compartilhar nem copiar o link.")
      }
    }
  }

  return (
    <Button type="button" onClick={handleShare} {...buttonProps}>
      {children}
    </Button>
  )
}
