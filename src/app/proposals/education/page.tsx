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

const oversightItems: string[] = [
  "Aplicação dos recursos do FUNDEB no DF",
  "Qualidade da infraestrutura escolar",
  "Cumprimento das metas do Plano Nacional de Educação",
  "Transparência nos contratos de merenda e transporte escolar"
]

const goalItems: string[] = [
  "Aumentar em 25% o repasse do FUNDEB para o DF",
  "Reformar e equipar 100 escolas da rede pública",
  "Reduzir o déficit de professores em 50%",
  "Implementar ensino técnico em 30 novas escolas",
  "Alcançar o top 10 do ranking do IDEB"
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
    color: "text-primary",
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
            {/* AÇÃO */}
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Ação: O que será feito
            </h2>

            <ProposalsGrid
              leftProposals={leftProposals}
              rightProposals={rightProposals}
              variant="education"
            />

            <div className="prose prose-lg max-w-none text-foreground/80 mt-12 mb-12">
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
            </div>

            {/* META */}
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Meta: Resultados Concretos
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">
                  Até o final do mandato:
                </h4>
                <ul className="space-y-2">
                  {goalItems.map((m) => (
                    <li key={m}>✓ {m}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FISCALIZAÇÃO */}
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Fiscalização: Controle e Transparência
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
              <p className="mb-6">
                É meu dever assegurar que os recursos da educação sejam usados
                com máxima eficiência. Vou fiscalizar rigorosamente:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                {oversightItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <CTAFooter message="Juntos, podemos construir um futuro melhor através da educação." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationProposalPage
