"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export const StaggerContainer = ({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.1
}: StaggerContainerProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: stagger, delayChildren } }
    }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, className }: StaggerItemProps) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: 120,
          damping: 18
        }
      }
    }}
  >
    {children}
  </motion.div>
)
