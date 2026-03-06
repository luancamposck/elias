import { BookOpen, Bus, HandHeart, Heart, Shield, Users } from "lucide-react"

const PROPOSALS = [
  {
    id: "health",
    href: "/propostas/saude",
    icon: Heart,
    title: "Saúde Pública",
    description:
      "Recursos federais que não chegam e fiscalização que não acompanha"
  },
  {
    id: "education",
    href: "/propostas/educacao",
    icon: BookOpen,
    title: "Educação",
    description: "Base sólida para um futuro com mais oportunidades."
  },
  {
    id: "transport",
    href: "/propostas/transporte",
    icon: Bus,
    title: "Transporte e Infraestrutura",
    description: "Planejamento travado e execução sem previsibilidade"
  },
  {
    id: "public-service",
    href: "/propostas/servico-publico",
    icon: Users,
    title: "Servidores e Serviço Público",
    description: "Condições que afetam diretamente a entrega do serviço público"
  },
  {
    id: "security",
    href: "/propostas/seguranca",
    icon: Shield,
    title: "Segurança Pública",
    description: "Legislação que precisa acompanhar a realidade do DF"
  },
  {
    id: "assistance",
    href: "/propostas/assistencia",
    icon: HandHeart,
    title: "Assistência Social",
    description: "Programas que existem no papel mas não chegam a quem precisa"
  }
]

export default PROPOSALS
