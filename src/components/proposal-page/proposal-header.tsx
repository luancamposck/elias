import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProposalHeaderProps {
  icon: LucideIcon
  title: string
  subtitle: string
  variant:
    | "health"
    | "transport"
    | "public-service"
    | "security"
    | "assistance"
    | "education"
}

const variantStyles = {
  health: "from-red-600 to-red-800",
  transport: "from-blue-600 to-blue-800",
  "public-service": "from-green-600 to-green-800",
  security: "from-gray-700 to-gray-900",
  assistance: "from-purple-600 to-purple-800",
  education: "from-amber-600 to-amber-800"
}

const ProposalHeader = ({
  icon: Icon,
  title,
  subtitle,
  variant
}: ProposalHeaderProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r text-white py-16 sm:py-20",
        variantStyles[variant]
      )}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Icon className="size-16 sm:size-20 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
export default ProposalHeader
