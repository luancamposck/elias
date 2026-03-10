"use client"

import {
  BriefcaseBusiness,
  Building2,
  Flag,
  Globe2,
  HandHeart,
  Landmark,
  MapPin,
  Users,
  type LucideIcon
} from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

import { TimelineCarousel } from "@/components/quem-sou/timeline-carousel"

import { cn } from "@/lib/utils"

type TimelineIconName =
  | "community"
  | "politics"
  | "candidacy"
  | "government"
  | "business"
  | "social"
  | "global"
  | "current"

export type TimelineEntry = {
  year: string
  title: string
  description: string[]
  imageSrc?: string
  imageAlt?: string
  list?: string[]
  iconName: TimelineIconName
  tags?: string[]
  highlight?: string
  images?: string[]
  mediaLabel?: string
  variant?: "light" | "dark"
}

const ENTRY_ICON_MAP: Record<TimelineIconName, LucideIcon> = {
  community: MapPin,
  politics: Users,
  candidacy: Flag,
  government: Landmark,
  business: BriefcaseBusiness,
  social: HandHeart,
  global: Globe2,
  current: Building2
}

const visualVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 56,
    y: 18,
    scale: 0.92,
    rotate: direction * 2
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
}

const cardVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 72,
    y: 26,
    rotate: direction * 1.8,
    filter: "blur(10px)"
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
}

const markerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    y: 18
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring" as const,
      stiffness: 180,
      damping: 16
    }
  }
}

function TimelineVisual({
  entry,
  className
}: {
  entry: TimelineEntry
  className?: string
}) {
  const Icon = ENTRY_ICON_MAP[entry.iconName]

  if (!entry.imageSrc) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.7rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(236,103,28,0.96),rgba(236,103,28,0.78))] p-2 shadow-[0_24px_56px_-32px_rgba(236,103,28,0.55)]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.26),transparent_38%)]" />
        <div className="absolute -right-4 top-4 text-white/10">
          <Icon className="size-24" />
        </div>
        <div className="absolute bottom-4 right-4 size-10 rotate-12 rounded-sm bg-white/[0.12]" />
        <div
          className="absolute left-5 top-20 size-4 bg-white/[0.18]"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />

        <div className="relative flex aspect-[16/10] flex-col justify-between rounded-[1.3rem] border border-white/20 p-5 text-white">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex rounded-full border border-white/[0.18] bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              {entry.mediaLabel ?? "Arquivo visual"}
            </span>
            <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/[0.18] bg-white/10 backdrop-blur-sm">
              <Icon className="size-5 text-white" />
            </span>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-white/[0.92] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A2644]">
              {entry.year}
            </span>
            <p className="mt-3 max-w-[15rem] text-xl font-bold leading-tight">
              {entry.title}
            </p>
            {entry.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.18] bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white p-2 shadow-[0_24px_60px_-34px_rgba(26,38,68,0.24)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.3rem] bg-[#efe7e0]">
        {entry.images && entry.images.length > 1 ? (
          <TimelineCarousel
            images={entry.images}
            alt={entry.imageAlt ?? entry.title}
          />
        ) : (
          <Image
            src={entry.imageSrc}
            alt={entry.imageAlt ?? entry.title}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2644]/28 via-transparent to-white/8" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,103,28,0.16),transparent_34%)]" />

        <div className="absolute left-3 top-3 z-20 inline-flex rounded-full border border-white/[0.18] bg-[#0a0f1c]/[0.58] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.82] backdrop-blur-sm">
          {entry.mediaLabel ?? "Arquivo"}
        </div>
        <div className="absolute right-3 top-3 z-20 inline-flex size-10 items-center justify-center rounded-xl border border-white/[0.16] bg-white/[0.12] backdrop-blur-sm">
          <Icon className="size-5 text-white/[0.92]" />
        </div>
        <div className="absolute left-3 bottom-3 z-20 inline-flex rounded-full bg-white/[0.92] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A2644]">
          {entry.year}
        </div>
        <div className="absolute bottom-3 right-3 z-20 flex max-w-[68%] flex-wrap justify-end gap-2">
          {entry.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.18] bg-[#0a0f1c]/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/[0.82] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute -bottom-2 -right-2 size-10 rotate-12 rounded-sm bg-primary/85 shadow-[--shadow-glow]" />
        <div
          className="absolute left-5 top-[34%] size-4 bg-white/[0.24]"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </div>
    </div>
  )
}

function TimelineCardDetails({
  entry,
  compact = false
}: {
  entry: TimelineEntry
  compact?: boolean
}) {
  const isDark = entry.variant === "dark"
  const Icon = ENTRY_ICON_MAP[entry.iconName]

  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          isDark ? "line-pattern opacity-20" : "dot-pattern opacity-35"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,103,28,0.13),transparent_34%)]",
          isDark ? "opacity-90" : "opacity-65"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -right-6 top-4 z-0",
          isDark ? "text-white/[0.06]" : "text-primary/[0.07]"
        )}
      >
        <Icon className="size-24" />
      </div>
      <div
          className={cn(
            "pointer-events-none absolute bottom-4 right-4 z-0 size-9 rounded-sm",
            isDark ? "bg-white/[0.07]" : "bg-primary/10"
          )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-14 top-16 z-0 size-4",
          isDark ? "bg-white/10" : "bg-primary/[0.12]"
        )}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div
          className={cn(
            "inline-flex size-12 items-center justify-center rounded-xl ring-1",
            isDark
              ? "bg-gradient-to-br from-orange-500/[0.24] to-orange-500/[0.08] ring-orange-300/30"
              : "bg-gradient-to-br from-primary/[0.18] to-primary/5 ring-primary/[0.18]"
          )}
        >
          <Icon
            className={cn(
              "size-6",
              isDark ? "text-orange-200" : "text-primary"
            )}
          />
        </div>

        <span
          className={cn(
            "whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]",
            isDark
              ? "border border-white/12 bg-white/10 text-white/80"
              : "border border-primary/15 bg-primary/[0.06] text-foreground/65"
          )}
        >
          {entry.year}
        </span>
      </div>

      <div
        className={cn(
          "relative z-10 mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r",
          isDark ? "from-orange-300 to-orange-300/20" : "from-primary to-primary/30"
        )}
      />

      <h3
        className={cn(
          "relative z-10 mt-4 text-2xl font-bold leading-tight",
          isDark ? "text-white" : "text-foreground"
        )}
      >
        {entry.title}
      </h3>

      <div
        className={cn(
          "relative z-10 mt-4 space-y-3 text-base leading-relaxed",
          isDark ? "text-slate-100/86" : "text-foreground/68"
        )}
      >
        {entry.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {entry.highlight ? (
        <div
          className={cn(
            "relative z-10 mt-5 rounded-2xl border px-4 py-3",
            isDark
              ? "border-orange-300/[0.18] bg-white/[0.06]"
              : "border-primary/[0.14] bg-primary/5"
          )}
        >
          <p
            className={cn(
              "text-sm font-semibold leading-relaxed",
              isDark ? "text-orange-100" : "text-foreground/75"
            )}
          >
            {entry.highlight}
          </p>
        </div>
      ) : null}

      {entry.list ? (
        <ul
          className={cn(
            "relative z-10 mt-5 space-y-2 text-sm leading-relaxed",
            isDark ? "text-slate-100/84" : "text-foreground/70"
          )}
        >
          {entry.list.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className={cn(
                  "mt-2 size-1.5 shrink-0 rounded-full",
                  isDark ? "bg-orange-300" : "bg-primary"
                )}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {entry.tags?.length ? (
        <div className="relative z-10 mt-5 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]",
                isDark
                  ? "border border-white/10 bg-white/[0.06] text-white/80"
                  : "border border-primary/15 bg-primary/5 text-foreground/68"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {compact ? <TimelineVisual entry={entry} className="relative z-10 mt-6" /> : null}
    </>
  )
}

function TimelineTextCard({
  entry,
  className
}: {
  entry: TimelineEntry
  className?: string
}) {
  const isDark = entry.variant === "dark"

  return (
    <article
      className={cn(
        "card-premium relative border-l-4 p-6 sm:p-7",
        isDark
          ? "border-slate-400/20 border-l-orange-400 bg-[#16223c]/94 shadow-[0_22px_52px_-30px_rgba(8,12,24,0.74)] backdrop-blur-sm"
          : "border-slate-200 border-l-primary bg-white/96",
        className
      )}
    >
      <TimelineCardDetails entry={entry} />
    </article>
  )
}

function TimelineCompactCard({ entry }: { entry: TimelineEntry }) {
  const isDark = entry.variant === "dark"

  return (
    <article
      className={cn(
        "card-premium relative border-l-4 p-6",
        isDark
          ? "border-slate-400/20 border-l-orange-400 bg-[#16223c]/94 shadow-[0_22px_52px_-30px_rgba(8,12,24,0.74)] backdrop-blur-sm"
          : "border-slate-200 border-l-primary bg-white/96"
      )}
    >
      <TimelineCardDetails entry={entry} compact />
    </article>
  )
}

export function TimelineShowcase({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative mt-12 md:mt-14">
      <div className="pointer-events-none absolute bottom-0 left-4 top-0 z-10 w-[2px] bg-gradient-to-b from-primary/20 via-primary/85 to-primary/20 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-8 md:space-y-10 lg:space-y-12">
        {entries.map((entry, index) => {
          const imageLeft = index % 2 === 0
          const visualDirection = imageLeft ? -1 : 1
          const cardDirection = imageLeft ? 1 : -1

          return (
            <div key={`${entry.year}-${entry.title}`} className="relative">
              <div className="relative pl-11 md:hidden">
                <motion.div
                  variants={markerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-90px" }}
                  className="absolute left-0 top-7 z-20 flex flex-col items-center"
                >
                  <div className="size-4 rounded-full border-4 border-white bg-primary shadow-[0_0_0_6px_rgba(236,103,28,0.14)]" />
                  <span className="mt-4 -rotate-90 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/45">
                    {entry.year}
                  </span>
                </motion.div>

                <motion.div
                  custom={cardDirection}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative z-10"
                >
                  <TimelineCompactCard entry={entry} />
                </motion.div>
              </div>

              <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_6rem_minmax(0,1fr)] md:items-center md:gap-5 lg:gap-8">
                {imageLeft ? (
                  <motion.div
                    custom={visualDirection}
                    variants={visualVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                  >
                    <TimelineVisual entry={entry} />
                  </motion.div>
                ) : (
                  <motion.div
                    custom={cardDirection}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                  >
                    <TimelineTextCard entry={entry} />
                  </motion.div>
                )}

                <motion.div
                  variants={markerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  className="relative z-20 flex flex-col items-center py-6"
                >
                  <div className="size-5 rounded-full border-[5px] border-white bg-primary shadow-[0_0_0_8px_rgba(236,103,28,0.14)]" />
                  <div className="mt-4 rounded-full border border-slate-200 bg-white/95 px-3 py-1 shadow-[0_10px_22px_-18px_rgba(26,38,68,0.3)]">
                    <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">
                      {entry.year}
                    </span>
                  </div>
                </motion.div>

                {imageLeft ? (
                  <motion.div
                    custom={cardDirection}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                  >
                    <TimelineTextCard entry={entry} />
                  </motion.div>
                ) : (
                  <motion.div
                    custom={visualDirection}
                    variants={visualVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                  >
                    <TimelineVisual entry={entry} />
                  </motion.div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
