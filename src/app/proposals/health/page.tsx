import { Clock, Heart, MapPin, TrendingUp, Users } from "lucide-react"

import {
  CTAFooter,
  DetailSection,
  ProposalHeader,
  ProposalsGrid,
  StatsSection
} from "@/components/proposal-page"

const leftProposals: string[] = [
  "Redução das filas em 50% em 2 anos",
  "Construção de 20 novos postos de saúde",
  "Ampliação do Hospital de Base",
  "Telemedicina para consultas básicas"
]

const rightProposals: string[] = [
  "Fiscalização rigorosa dos recursos federais",
  "Parcerias público-privadas",
  "Programa de medicina preventiva",
  "Especialidades médicas em todas as regiões"
]

const financingItems: string[] = [
  "Construção de novos hospitais regionais",
  "Modernização dos equipamentos existentes",
  "Contratação de mais profissionais de saúde",
  "Implementação de sistemas digitais de gestão"
]

const legislativeProposals: string[] = [
  "Lei da Telemedicina Ampliada para consultas de rotina",
  "Marco legal para parcerias público-privadas na saúde",
  "Regulamentação de clínicas populares subsidiadas",
  'Criação do "SUS Digital" com agendamento online'
]

const oversightItems: string[] = [
  "Aplicação correta dos recursos federais",
  "Tempo de espera em hospitais e postos",
  "Qualidade dos serviços prestados",
  "Cumprimento de metas estabelecidas pelo Ministério da Saúde"
]

const goalItems: string[] = [
  "Reduzir tempo de espera para consultas especializadas de 6 meses para 30 dias",
  "Construir 20 novas unidades básicas de saúde",
  "Ampliar em 500 novos leitos a rede hospitalar do DF",
  "Implementar atendimento 24h em todas as UPAs",
  "Criar 5 novos centros de especialidades médicas"
]

const stats = [
  {
    icon: Clock,
    color: "text-red-500",
    value: "4h",
    label: "Tempo médio de espera"
  },
  {
    icon: MapPin,
    color: "text-blue-500",
    value: "156",
    label: "Postos de saúde"
  },
  {
    icon: Users,
    color: "text-primary",
    value: "600k",
    label: "Pessoas na fila do SUS"
  },
  {
    icon: TrendingUp,
    color: "text-green-500",
    value: "R$ 2.8bi",
    label: "Orçamento federal para DF"
  }
]

const HealthProposalPage = () => {
  return (
    <div>
      <ProposalHeader
        icon={Heart}
        title="Saúde Pública"
        subtitle="Saúde não é discurso. É atendimento funcionando."
        variant="health"
      />

      <StatsSection
        title="Diagnóstico: A Realidade da Saúde no DF"
        stats={stats}
      />

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
              variant="health"
            />

            <div className="prose prose-lg max-w-none text-foreground/80 mt-12 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Como deputado federal, terei poder direto para fiscalizar e
                garantir que os recursos federais destinados à saúde do Distrito
                Federal sejam aplicados corretamente e de forma eficiente.
              </p>
              <DetailSection
                title="Financiamento Federal"
                description="O DF recebe anualmente R$ 2,8 bilhões em recursos federais para a saúde. Vou propor emendas parlamentares para aumentar esse valor em 30%, priorizando:"
                items={financingItems}
              />
              <DetailSection
                title="Propostas de Lei"
                description="Vou apresentar projetos de lei para agilizar o atendimento e reduzir as filas:"
                items={legislativeProposals}
              />
            </div>

            {/* META */}
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Meta: Resultados Concretos
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
              <div className="bg-primary/10 p-6 rounded-lg">
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
                Utilizarei meu mandato para fiscalizar rigorosamente:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                {oversightItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <CTAFooter message="Juntos podemos transformar a saúde pública de Brasília" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthProposalPage
