import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface Stat {
  icon: LucideIcon
  color: string
  value: string
  label: string
}

interface StatsSectionProps {
  title: string
  stats: Stat[]
}

export default function StatsSection({ title, stats }: StatsSectionProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-16">
          {stats.map(({ icon: Icon, color, value, label }) => (
            <div
              key={label}
              className="rounded-lg border text-card-foreground bg-white shadow-lg">
              <div className="p-6 text-center">
                <Icon className={cn("size-12 mx-auto mb-4", color)} />
                <div className={cn("text-3xl font-bold mb-2", color)}>
                  {value}
                </div>
                <p className="text-gray-600">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
