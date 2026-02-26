import { CircleCheckBig } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProposalsGridProps {
  leftProposals: string[]
  rightProposals: string[]
  variant:
    | "health"
    | "transport"
    | "public-service"
    | "security"
    | "assistance"
    | "education"
}

const variantColors = {
  health: "text-orange-500",
  transport: "text-blue-500",
  "public-service": "text-green-500",
  security: "text-yellow-600",
  assistance: "text-purple-500",
  education: "text-amber-600"
}

export default function ProposalsGrid({
  leftProposals,
  rightProposals,
  variant
}: ProposalsGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div>
        {leftProposals.map((text) => (
          <div key={text} className="flex items-start gap-3 mb-4">
            <CircleCheckBig
              className={cn(
                "w-6 h-6 mt-1 flex-shrink-0",
                variantColors[variant]
              )}
            />
            <p className="text-lg text-gray-700">{text}</p>
          </div>
        ))}
      </div>

      <div>
        {rightProposals.map((text) => (
          <div key={text} className="flex items-start gap-3 mb-4">
            <CircleCheckBig
              className={cn(
                "w-6 h-6 mt-1 flex-shrink-0",
                variantColors[variant]
              )}
            />
            <p className="text-lg text-gray-700">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
