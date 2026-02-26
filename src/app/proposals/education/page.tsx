import {
  BookOpen,
  CircleDollarSign,
  School,
  TrendingDown,
  Users
} from "lucide-react"

import {
  CTAFooter,
  DetailSection,
  ProposalHeader,
  ProposalsGrid,
  StatsSection
} from "@/components/proposal-page"

const leftProposals: string[] = [
  "Foco no ensino básico e técnico de qualidade",
  "Valorização e plano de carreira para professores",
  "Implementação de escolas cívico-militares",
  "Programa de alfabetização na idade certa"
]

const rightProposals: string[] = [
  "Parcerias com setor privado para vagas técnicas",
  "Menos ideologia, mais conhecimento prático (Escola sem Partido)",
  "Apoio e regulamentação da educação domiciliar (homeschooling)",
  "Tecnologia e inovação em sala de aula"
]

const financingItems: string[] = [
  "Aumento do repasse para o FUNDEB no DF",
  "Recursos para construção e reforma de escolas",
  "Verbas para programas de capacitação de professores",
  "Financiamento para projetos de tecnologia educacional"
]

const legislativeItems: string[] = [
  "Lei de Incentivo ao Ensino Técnico e Profissionalizante",
  "Projeto 'Escola Sem Partido' para garantir neutralidade ideológica",
  "Marco regulatório para a educação domiciliar (homeschooling)",
  "Simplificação do acesso a programas de bolsas de estudo"
]

const stats = [
  {
    icon: TrendingDown,
    color: "text-red-500",
    value: "21º",
    label: "Lugar do DF no ranking do IDEB"
  },
  {
    icon: School,
    color: "text-blue-500",
    value: "30%",
    label: "Das escolas com estrutura precária"
  },
  {
    icon: Users,
    color: "text-yellow-500",
    value: "1.5k",
    label: "Déficit de professores na rede"
  },
  {
    icon: CircleDollarSign,
    color: "text-green-500",
    value: "R$ 4.5bi",
    label: "Orçamento federal para Educação/DF"
  }
]

const EducationProposalPage = () => {
  return (
    <div>
      <ProposalHeader
        icon={BookOpen}
        title="Educação"
        subtitle="Educação de qualidade forma cidadãos livres."
        variant="education"
      />

      <StatsSection title="O Desafio da Educação no DF" stats={stats} />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Minhas Propostas Resumidas
            </h2>

            <ProposalsGrid
              leftProposals={leftProposals}
              rightProposals={rightProposals}
              variant="education"
            />

            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Como Vou Atuar Como Deputado Federal
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Como deputado federal, minha missão é garantir que a educação no
                Distrito Federal seja um pilar para a formação de cidadãos
                críticos e preparados para o futuro, livre de doutrinação
                ideológica.
              </p>

              <DetailSection
                title="Financiamento e Recursos"
                description="Vou lutar em Brasília para aumentar o investimento na educação do DF, priorizando:"
                items={financingItems}
              />

              <DetailSection
                title="Legislação e Projetos de Lei"
                description="Apresentarei projetos para modernizar a educação e focar no que realmente importa:"
                items={legislativeItems}
              />

              <DetailSection
                title="Fiscalização Rigorosa"
                description="É meu dever assegurar que os recursos da educação sejam usados com máxima eficiência. Vou fiscalizar a aplicação dos fundos, como o FUNDEB, e a qualidade do ensino para garantir que o dinheiro público se transforme em resultados reais para os alunos."
                items={[]}
              />
            </div>

            <CTAFooter message="Juntos, podemos construir um futuro melhor através da educação." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationProposalPage
