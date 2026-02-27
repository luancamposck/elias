"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
}

const offsets: Record<Direction, Record<string, number>> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: -40 },
  right: { x: 40 }
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  direction = "up"
}: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, ...offsets[direction] }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const
    }}
  >
    {children}
  </motion.div>
)
