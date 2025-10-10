import { Bus, HandHeart, Heart, Shield, Users } from "lucide-react"

const PROPOSALS = [
  {
    id: "health",
    href: "/proposals/health",
    icon: Heart,
    title: "Saúde Pública",
    description: "Redução de filas, mais hospitais e postos de saúde"
  },
  {
    id: "transport",
    href: "/proposals/transport",
    icon: Bus,
    title: "Transporte e Infraestrutura",
    description: "Expansão do metrô, ciclovias e transporte eficiente"
  },
  {
    id: "public-service",
    href: "/proposals/public-service",
    icon: Users,
    title: "Servidores e Serviço Público",
    description: "Valorização, capacitação e modernização"
  },
  {
    id: "security",
    href: "/proposals/security",
    icon: Shield,
    title: "Segurança Pública",
    description: "Endurecimento de penas e combate ao crime"
  },
  {
    id: "assistance",
    href: "/proposals/assistance",
    icon: HandHeart,
    title: "Assistência Social",
    description: "Programas de renda e combate à pobreza"
  }
]

export default PROPOSALS
