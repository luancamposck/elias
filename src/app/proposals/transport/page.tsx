import { Bus, Clock, TramFront, TrendingUp } from "lucide-react"

import {
  CTAFooter,
  ProposalHeader,
  StatsSection
} from "@/components/proposal-page"

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
    color: "text-primary",
    value: "R$ 5.2bi",
    label: "Investimento federal previsto"
  }
]

const goalItems: string[] = [
  "Aprovação de R$ 1 bilhão em emendas para o metrô",
  "Início das obras da Linha Verde (Asa Norte - Sobradinho)",
  "Inauguração de 50 km de novas ciclovias integradas",
  "Entrega da expansão do metrô até Samambaia"
]

const TransportProposalPage = () => {
  return (
    <div>
      <ProposalHeader
        icon={Bus}
        title="Transporte e Infraestrutura"
        subtitle="Menos tempo no trânsito, mais tempo para viver."
        variant="transport"
      />

      <StatsSection title="Diagnóstico: O Transporte no DF" stats={stats} />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* DIAGNÓSTICO */}
            <div className="mb-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                O problema: Brasília cresce. A mobilidade não acompanha.
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                O transporte público não atende à demanda, as obras estão
                paradas e o cidadão perde horas no trânsito. Isso não é um
                problema de falta de dinheiro, mas de falta de gestão e
                prioridade.
              </p>
            </div>

            {/* AÇÃO */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Ação: Minha prioridade é o seu tempo.
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p>
                  Meu foco é destravar obras essenciais como a expansão do metrô
                  e os corredores BRT. Vou trabalhar para modernizar a frota de
                  ônibus e integrar todo o sistema com um aplicativo único e
                  tarifa justa. Chega de promessas. É hora de ação e resultado.
                </p>
              </div>
            </div>

            {/* META */}
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Meta: Resultados Concretos
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
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
              <p>
                Meu mandato será um instrumento de fiscalização constante sobre
                o andamento das obras, a aplicação dos recursos federais e a
                auditoria dos contratos de transporte público. A cobrança por
                resultados será implacável, com transparência total no uso de
                cada centavo do seu imposto.
              </p>
            </div>

            <CTAFooter message="Juntos podemos destravar a mobilidade de Brasília." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransportProposalPage
