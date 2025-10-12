import { Bus, Clock, Heart, TramFront, TrendingUp } from "lucide-react"

import {
  CTAFooter,
  DetailSection,
  ProposalHeader,
  ProposalsGrid,
  StatsSection
} from "@/components/proposal-page"

const leftProposals: string[] = [
  "Expansão do metrô até Samambaia e Santa Maria",
  "200 km de novas ciclovias integradas",
  "BRT conectando todas as regiões administrativas",
  "Modernização da frota de ônibus"
]

const rightProposals: string[] = [
  "Aplicativo único para todo transporte público",
  "Terminais intermodais em pontos estratégicos",
  "Corredores exclusivos para ônibus",
  "Tarifa integrada para metrô e ônibus"
]

const financingItems: string[] = [
  "R$ 3 bilhões para expansão do metrô (Linhas Verde e Laranja)",
  "R$ 800 milhões para sistema BRT integrado",
  "R$ 500 milhões para infraestrutura cicloviária",
  "R$ 400 milhões para modernização de terminais"
]

const partnershipItems: string[] = [
  "Parceria com BNDES para financiamento de longo prazo",
  "Cooperação com Banco Mundial para projetos sustentáveis",
  "Atração de investimento privado via concessões",
  "Recursos do Novo PAC para infraestrutura urbana"
]

const oversightItems: string[] = [
  "Acompanhamento mensal das obras do metrô",
  "Auditoria dos contratos de transporte público",
  "Cobrança de cumprimento de cronogramas",
  "Transparência total no uso dos recursos"
]

const legislativeProposals: string[] = [
  "Marco legal para transporte multimodal",
  "Incentivos fiscais para uso de transporte público",
  "Regulamentação de aplicativos de mobilidade",
  "Subsídios para transporte estudantil"
]

const stats = [
  {
    icon: Clock,
    color: "text-red-500",
    value: "2h30",
    label: "Tempo médio de deslocamento"
  },
  {
    icon: Bus,
    color: "text-blue-500",
    value: "1.200",
    label: "Ônibus em circulação"
  },
  {
    icon: TramFront,
    color: "text-green-500",
    value: "29",
    label: "Estações de metrô"
  },
  {
    icon: TrendingUp,
    color: "text-orange-500",
    value: "R$ 5.2bi",
    label: "Investimento federal previsto"
  }
]

const TransportProposalPage = () => {
  return (
    <div>
      <ProposalHeader
        icon={Heart}
        title="Transporte e Infraestrutura"
        subtitle="Expansão do metrô, ciclovias e transporte público eficiente para toda Brasília"
        variant="transport"
      />

      <StatsSection title="Números do Transporte no DF" stats={stats} />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Minhas Propostas Resumidas
            </h2>

            <ProposalsGrid
              leftProposals={leftProposals}
              rightProposals={rightProposals}
              variant="transport"
            />

            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Como Vou Atuar Como Deputado Federal
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                O transporte público é uma competência compartilhada entre
                União, estados e municípios. Como deputado federal, vou atuar
                diretamente para garantir recursos federais e parcerias
                estratégicas para transformar a mobilidade urbana de Brasília.
              </p>

              <DetailSection
                title="Recursos Federais"
                description="Vou destinar emendas parlamentares para projetos de mobilidade urbana, priorizando:"
                items={financingItems}
              />

              <DetailSection
                title="Parcerias e Financiamento"
                description="Vou trabalhar para viabilizar parcerias que acelerem os projetos:"
                items={partnershipItems}
              />

              <DetailSection
                title="Fiscalização de Obras"
                description="Utilizarei meu mandato para fiscalizar o andamento das obras:"
                items={oversightItems}
              />

              <DetailSection
                title="Propostas Legislativas"
                description="Vou apresentar projetos de lei para modernizar o transporte:"
                items={legislativeProposals}
              />

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-lg mb-4">
                  Metas por ano de mandato:
                </h4>

                <div className="space-y-4">
                  <div>
                    <strong>2025:</strong> Aprovação de R$ 1 bilhão em emendas
                    para o metrô
                  </div>

                  <div>
                    <strong>2026:</strong> Início das obras da Linha Verde (Asa
                    Norte - Sobradinho)
                  </div>

                  <div>
                    <strong>2027:</strong> Inauguração de 50 km de novas
                    ciclovias
                  </div>

                  <div>
                    <strong>2028:</strong> Entrega da expansão do metrô até
                    Samambaia
                  </div>
                </div>
              </div>
            </div>

            <CTAFooter message="Juntos podemos transformar a saúde pública de Brasília" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransportProposalPage
