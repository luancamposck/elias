import { Gavel, Shield, TrendingUp, UserCheck } from "lucide-react"

import {
  CTAFooter,
  DetailSection,
  ProposalHeader,
  ProposalsGrid,
  StatsSection
} from "@/components/proposal-page"

const leftProposals: string[] = [
  "Leis mais duras contra criminosos",
  "Fim da progressão de regime para crimes hediondos",
  "Integração das forças policiais",
  "Combate ao narcotráfico e facções"
]

const rightProposals: string[] = [
  "Tecnologia e vigilância inteligente",
  "Câmeras corporais e drones",
  "Fiscalização do Fundo Constitucional",
  "Mais recursos para equipamentos e treinamento"
]

const financingItems: string[] = [
  "Destinação de emendas para compra de viaturas e equipamentos modernos",
  "Aumento dos recursos do Fundo Constitucional para a segurança do DF",
  "Verbas para contratação e treinamento de novos policiais",
  "Financiamento de sistemas de monitoramento e inteligência"
]

const legislativeItems: string[] = [
  "Fim da progressão de regime para crimes hediondos",
  "Aumento da pena mínima para roubo, furto e homicídio",
  'Fim da "saidinha" para presos de alta periculosidade',
  "Tipificação de crimes relacionados a facções como terrorismo"
]

const oversightItems: string[] = [
  "Auditoria rigorosa dos contratos da segurança pública",
  "Acompanhamento das operações conjuntas e seus resultados",
  "Transparência total nos gastos do Fundo Constitucional da Segurança",
  "Fiscalização da destinação de emendas para equipamentos e treinamento"
]

const goalItems: string[] = [
  "Aprovação de leis que acabem com a progressão de regime para crimes hediondos",
  "Criação do banco de dados unificado entre as polícias do DF",
  "Implementação de câmeras corporais em 100% dos policiais em operação",
  "Aumento de 30% nas emendas destinadas à segurança do DF",
  "Redução de 20% nos índices de criminalidade violenta"
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
    color: "text-primary",
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
            {/* AÇÃO */}
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Ação: O que será feito
            </h2>

            <ProposalsGrid
              leftProposals={leftProposals}
              rightProposals={rightProposals}
              variant="security"
            />

            <div className="prose prose-lg max-w-none text-foreground/80 mt-12 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                A segurança pública começa com leis federais fortes. Como
                deputado federal, minha principal função será criar e aprovar
                leis mais duras, que acabem com a impunidade e deem à polícia as
                ferramentas necessárias para proteger o cidadão de bem.
              </p>

              <DetailSection
                title="Financiamento e Recursos"
                description="Vou garantir que o DF receba os recursos necessários para equipar e fortalecer as forças de segurança:"
                items={financingItems}
              />

              <DetailSection
                title="Propostas de Lei"
                description="Vou propor e lutar pela aprovação de leis que realmente punam os criminosos:"
                items={legislativeItems}
              />
            </div>

            {/* META */}
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Meta: Resultados Concretos
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
              <div className="bg-gray-100 p-6 rounded-lg">
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
                O DF recebe bilhões para a segurança. Meu papel é garantir que
                cada centavo seja investido onde realmente importa: na proteção
                do cidadão.
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                {oversightItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <CTAFooter message="Juntos, vamos devolver a paz ao Distrito Federal." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityProposalPage
