"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export const HeroReveal = ({ children, className }: Props) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.15 } }
    }}
  >
    {children}
  </motion.div>
)

export const HeroItem = ({ children, className }: Props) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1] as const
        }
      }
    }}
  >
    {children}
  </motion.div>
)
