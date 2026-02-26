import { Gavel, Shield, TrendingUp, UserCheck } from "lucide-react"

import {
  CTAFooter,
  DetailSection,
  ProposalHeader,
  StatsSection
} from "@/components/proposal-page"

const tougherLawsItems: string[] = [
  "Fim da progressão de regime para crimes hediondos",
  "Aumento da pena mínima para roubo, furto e homicídio",
  'Fim da "saidinha" para presos de alta periculosidade',
  "Tipificação de crimes relacionados a facções como terrorismo"
]

const policeIntegrationItems: string[] = [
  "Criação de um banco de dados unificado entre as polícias",
  "Operações conjuntas e permanentes em áreas de alta criminalidade",
  "Fortalecimento do combate ao narcotráfico e lavagem de dinheiro"
]

const technologyItems: string[] = [
  "Implementação de sistemas de reconhecimento facial em áreas estratégicas",
  "Uso de drones e câmeras corporais para monitoramento e transparência",
  "Investimento em softwares de análise de dados para prevenção de crimes"
]

const oversightItems: string[] = [
  "Auditoria rigorosa dos contratos da segurança pública",
  "Destinação de emendas para compra de equipamentos e treinamento",
  "Transparência total nos gastos do Fundo Constitucional da Segurança"
]

const stats = [
  {
    icon: TrendingUp,
    color: "text-red-500",
    value: "+15%",
    label: "Aumento de roubos"
  },
  {
    icon: Gavel,
    color: "text-yellow-500",
    value: "80%",
    label: "Criminosos reincidentes"
  },
  {
    icon: UserCheck,
    color: "text-blue-500",
    value: "2.1k",
    label: "Déficit de policiais"
  },
  {
    icon: Shield,
    color: "text-green-500",
    value: "R$ 3.2bi",
    label: "Fundo Constitucional (Segurança)"
  }
]

const SecurityProposalPage = () => {
  return (
    <div>
      <ProposalHeader
        icon={Shield}
        title="Segurança Pública"
        subtitle="Impunidade custa vidas."
        variant="security"
      />

      <StatsSection title="A Segurança no DF em Números" stats={stats} />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                A segurança pública começa com leis federais fortes. Minha
                principal função será criar e aprovar leis mais duras, que
                acabem com a impunidade e deem à polícia as ferramentas
                necessárias para proteger o cidadão de bem.
              </p>

              <DetailSection
                title="Leis Mais Duras: Fim da Impunidade"
                description="Vou propor e lutar pela aprovação de leis que realmente punam os criminosos:"
                items={tougherLawsItems}
              />

              <DetailSection
                title="Integração e Inteligência Policial"
                description="O crime não respeita fronteiras entre corporações. Defendo a unificação de dados e operações para uma resposta mais rápida e eficiente:"
                items={policeIntegrationItems}
              />

              <DetailSection
                title="Tecnologia a Serviço da Segurança"
                description="Usar a tecnologia para multiplicar a capacidade de vigilância e resposta da polícia:"
                items={technologyItems}
              />

              <DetailSection
                title="Fiscalização do Fundo Constitucional"
                description="O DF recebe bilhões para a segurança. Meu papel é garantir que cada centavo seja investido onde realmente importa: na proteção do cidadão."
                items={oversightItems}
              />
            </div>

            <CTAFooter message="Juntos, vamos devolver a paz ao Distrito Federal." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityProposalPage
