import { Gavel, Shield, TrendingUp, UserCheck } from "lucide-react"

import {
  CTAFooter,
  DetailSection,
  ProposalHeader,
  ProposalsGrid,
  StatsSection
} from "@/components/proposal-page"

const leftProposals: string[] = [
  "Endurecimento de penas para crimes graves",
  'Fim da "saidinha" para presos',
  "Aumento do efetivo policial",
  "Investimento em tecnologia e inteligência"
]

const rightProposals: string[] = [
  "Reforma do Código Penal",
  "Combate ao narcotráfico nas fronteiras",
  "Valorização e treinamento das forças policiais",
  "Integração entre polícias e inteligência"
]

const financingItems: string[] = [
  "Fim da progressão de regime para crimes hediondos",
  "Aumento da pena mínima para roubo, furto e homicídio",
  "Tipificação de crimes relacionados a facções como terrorismo",
  "Revisão do Estatuto do Desarmamento para permitir que o cidadão de bem possa se defender"
]

const partnershipItems: string[] = [
  "Contratação de mais policiais para o DF",
  "Compra de viaturas, armamento e equipamentos modernos",
  "Implementação de sistemas de vigilância com câmeras e inteligência artificial",
  "Programas de treinamento e capacitação para as polícias"
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

const TransportProposalPage = () => {
  return (
    <div>
      <ProposalHeader
        icon={Shield}
        title="Segurança Pública"
        subtitle="Leis mais duras, valorização da polícia e combate ao crime organizado."
        variant="security"
      />

      <StatsSection title="A Segurança no DF em Números" stats={stats} />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Minhas Propostas Resumidas
            </h2>

            <ProposalsGrid
              leftProposals={leftProposals}
              rightProposals={rightProposals}
              variant="security"
            />

            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Como Vou Atuar Como Deputado Federal
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                A segurança pública começa com leis federais fortes. Como
                deputado, minha principal função será criar e aprovar leis mais
                duras, que acabem com a impunidade e deem à polícia as
                ferramentas necessárias para proteger o cidadão de bem.
              </p>

              <DetailSection
                title="Projetos de Lei (Tolerância Zero)"
                description="Vou propor e lutar pela aprovação de leis que realmente punam os criminosos:"
                items={financingItems}
              />

              <DetailSection
                title="Recursos e Fiscalização"
                description="O DF recebe bilhões do Fundo Constitucional para a segurança. Vou fiscalizar cada centavo e destinar emendas para:"
                items={partnershipItems}
              />
            </div>

            <CTAFooter message="Juntos podemos transformar a saúde pública de Brasília" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransportProposalPage
