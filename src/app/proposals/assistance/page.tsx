import { HandHeart, House, TrendingDown, Users } from "lucide-react"

import {
  CTAFooter,
  DetailSection,
  ProposalHeader,
  ProposalsGrid,
  StatsSection
} from "@/components/proposal-page"

const leftProposals: string[] = [
  "Programa de Renda Mínima Distrital",
  "Capacitação profissional para jovens",
  "Apoio ao microempreendedorismo",
  "Fortalecimento de creches e abrigos"
]

const rightProposals: string[] = [
  "Fiscalização dos recursos federais",
  "Parcerias com ONGs e setor privado",
  "Infraestrutura em áreas carentes",
  "Segurança alimentar e nutricional"
]

const financingItems: string[] = [
  "Ampliação do Bolsa Família e outros benefícios",
  "Recursos para construção de moradias populares",
  "Verbas para programas de qualificação profissional",
  "Financiamento para restaurantes comunitários"
]

const legislativeItems: string[] = [
  "Lei de Incentivo à Contratação de Jovens em vulnerabilidade",
  "Projeto de qualificação profissional para beneficiários de programas sociais",
  "Marco regulatório para parcerias com o terceiro setor na assistência",
  "Simplificação do acesso a programas de microcrédito para empreendedores de baixa renda"
]

const stats = [
  {
    icon: Users,
    color: "text-red-500",
    value: "600k",
    label: "Pessoas com renda de até R$450"
  },
  {
    icon: TrendingDown,
    color: "text-yellow-500",
    value: "14.8%",
    label: "Taxa de desemprego"
  },
  {
    icon: House,
    color: "text-blue-500",
    value: "100k",
    label: "Famílias em vulnerabilidade"
  },
  {
    icon: HandHeart,
    color: "text-purple-500",
    value: "R$ 1.5bi",
    label: "Recursos para programas sociais"
  }
]

const AssistanceProposalPage = () => {
  return (
    <div>
      <ProposalHeader
        icon={HandHeart}
        title="Assistência Social"
        subtitle="Assistência social deve libertar, não aprisionar."
        variant="assistance"
      />

      <StatsSection title="O Desafio Social no DF" stats={stats} />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Minhas Propostas Resumidas
            </h2>

            <ProposalsGrid
              leftProposals={leftProposals}
              rightProposals={rightProposals}
              variant="assistance"
            />

            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Como Vou Atuar Como Deputado Federal
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Como deputado federal, meu papel é garantir que o Distrito
                Federal receba os recursos necessários e tenha leis que apoiem o
                desenvolvimento social, combatendo a desigualdade em suas
                raízes.
              </p>

              <DetailSection
                title="Financiamento e Recursos"
                description="Vou lutar em Brasília para aumentar o repasse de verbas para a assistência social no DF, focando em:"
                items={financingItems}
              />

              <DetailSection
                title="Legislação e Projetos de Lei"
                description="Apresentarei projetos para criar um ambiente de mais oportunidades:"
                items={legislativeItems}
              />

              <DetailSection
                title="Fiscalização Rigorosa"
                description="É meu dever garantir que cada centavo enviado pelo governo federal seja usado corretamente. Vou fiscalizar a aplicação dos recursos em programas sociais para evitar desvios e garantir que a ajuda chegue a quem realmente precisa."
                items={[]}
              />
            </div>

            <CTAFooter message="Juntos podemos construir um DF mais justo para todos." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssistanceProposalPage
