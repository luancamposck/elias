import { Award, CircleCheck, TrendingUp, Users } from "lucide-react"

import {
  CTAFooter,
  DetailSection,
  ProposalHeader,
  ProposalsGrid,
  StatsSection
} from "@/components/proposal-page"

const leftProposals: string[] = [
  "Reestruturação de carreiras e salários",
  "Defesa da estabilidade e do concurso público",
  "Programas de capacitação e qualificação",
  "Melhoria das condições de trabalho"
]

const rightProposals: string[] = [
  "Combate ao assédio moral",
  "Desburocratização e modernização",
  "Saúde e bem-estar do servidor",
  "Gestão por mérito e desempenho"
]

const financingItems: string[] = [
  "Lutar contra a Reforma Administrativa (PEC 32) nos pontos que prejudicam os servidores",
  "Defender a manutenção da estabilidade como garantia de um serviço impessoal",
  "Trabalhar pela recomposição salarial das categorias com perdas inflacionárias",
  "Apoiar a realização de concursos públicos para suprir a defasagem de pessoal"
]

const partnershipItems: string[] = [
  "Digitalização e desburocratização de processos",
  "Investimento em programas de capacitação e desenvolvimento de lideranças",
  "Criação de políticas de saúde mental para os servidores",
  "Incentivo à inovação e à gestão baseada em resultados e mérito"
]

const stats = [
  {
    icon: Users,
    color: "text-blue-500",
    value: "200k+",
    label: "Servidores no DF"
  },
  {
    icon: Award,
    color: "text-red-500",
    value: "8 anos",
    label: "Sem reajuste para diversas categorias"
  },
  {
    icon: TrendingUp,
    color: "text-yellow-500",
    value: "30%",
    label: "Defasagem em várias áreas"
  },
  {
    icon: CircleCheck,
    color: "text-green-500",
    value: "92%",
    label: "Aprovação do serviço (pesq. interna)"
  }
]

const TransportProposalPage = () => {
  return (
    <div>
      <ProposalHeader
        icon={Users}
        title="Serviço Público"
        subtitle="Valorização do servidor, eficiência e um serviço público de qualidade para o cidadão."
        variant="public-service"
      />

      <StatsSection title="O Serviço Público em Foco" stats={stats} />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Minhas Propostas Resumidas
            </h2>

            <ProposalsGrid
              leftProposals={leftProposals}
              rightProposals={rightProposals}
              variant="public-service"
            />

            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Como Vou Atuar Como Deputado Federal
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Um serviço público de excelência depende de servidores
                valorizados. Como deputado federal, serei uma voz ativa em
                defesa dos direitos dos servidores e da modernização da máquina
                pública, garantindo que o cidadão receba o melhor atendimento.
              </p>

              <DetailSection
                title="Defesa dos Direitos dos Servidores"
                description="Atuarei firmemente no Congresso Nacional contra propostas que retirem direitos dos servidores. Minhas prioridades são:"
                items={financingItems}
              />

              <DetailSection
                title="Modernização e Eficiência"
                description="Valorizar o servidor também é dar a ele as melhores condições de trabalho. Vou propor leis e destinar recursos para:"
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
