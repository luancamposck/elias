import {
  BarChart3,
  Bus,
  ShieldCheck,
  Target,
  TramFront,
  TrendingUp
} from "lucide-react"

import { CTAFooter, ProposalHeader } from "@/components/proposal-page"

const metroStats = [
  {
    icon: TramFront,
    color: "text-blue-700",
    value: "42,38 km",
    label: "Extensão da malha metroviária"
  },
  {
    icon: Target,
    color: "text-orange-500",
    value: "29",
    label: "Estações em operação"
  },
  {
    icon: TrendingUp,
    color: "text-blue-600",
    value: "160 a 180 mil",
    label: "Passageiros por dia"
  },
  {
    icon: Bus,
    color: "text-slate-800",
    value: "Ônibus",
    label: "Principal modal de deslocamento"
  }
]

const expansionItems = [
  "Samambaia: 3,6 km adicionais e duas novas estações (35 e 36), com investimento superior a R$ 400 milhões e previsão até 2028.",
  "Ceilândia: Projeto de 2,3 km com duas novas estações aguardando liberação final para execução.",
  "Linha 2 (em estudo): Viabilidade técnica para conectar Gama, Santa Maria, Recanto das Emas, Riacho Fundo, Núcleo Bandeirante, Candangolândia e Cruzeiro ao Plano Piloto."
]

const consequences = [
  "Tempo excessivo de deslocamento",
  "Superlotação",
  "Menor acesso a oportunidades",
  "Desigualdade territorial"
]

const mandateGoals = [
  "Fiscalização ativa das obras em andamento",
  "Transparência pública de cronogramas",
  "Defesa de prioridade orçamentária para mobilidade",
  "Apoio a projetos que reduzam o tempo médio de deslocamento"
]

const oversightItems = [
  "Relatórios públicos de avanço físico das obras",
  "Monitoramento de prazos",
  "Cobrança de desempenho contratual",
  "Debate técnico com especialistas e sociedade"
]

const TransportProposalPage = () => {
  return (
    <div className="bg-white">
      <ProposalHeader
        icon={Bus}
        title="Transporte e Infraestrutura"
        subtitle="Menos tempo no trânsito, mais tempo para viver."
        variant="transport"
      />

      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-slate-900 flex items-center gap-3">
              <BarChart3 className="size-8 text-orange-500" />
              Diagnóstico
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {metroStats.map(({ icon: Icon, color, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border bg-white p-5 shadow-sm text-center">
                  <Icon className={`size-8 mx-auto mb-3 ${color}`} />
                  <p className={`text-2xl font-bold mb-1 ${color}`}>{value}</p>
                  <p className="text-slate-600">{label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Expansões oficiais em andamento e em estudo
              </h3>
              <ul className="space-y-4 text-slate-700">
                {expansionItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xl leading-relaxed font-medium text-slate-800">
              O problema não é falta de projeto. É ritmo, prioridade e
              fiscalização.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              O problema
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-4 mb-8">
              <p>Brasília cresceu para longe. O transporte não acompanhou.</p>
              <p className="font-semibold text-slate-900">Consequências:</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {consequences.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <p className="text-slate-800">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-lg">
              <p className="text-slate-900 font-semibold">
                Quando o transporte falha, a cidade trava.
              </p>
              <p className="text-slate-700">
                E quando a cidade trava, a economia desacelera.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Brasília não é longe. Está mal conectada.
            </h2>
            <div className="space-y-4 text-lg sm:text-xl text-slate-100">
              <p>Perder até 2h30 por dia no trânsito não é detalhe.</p>
              <p>
                São quase 40 dias por ano dentro de ônibus ou carro. Em quatro
                anos, isso vira 5 meses da sua vida parados no congestionamento.
              </p>
              <p className="text-orange-400 font-bold text-2xl">
                Mobilidade não é conforto. É tempo de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              O que fazer
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-3 mb-10">
              <p>
                Não é anunciar obra nova. É garantir que as que já existem
                avancem com eficiência.
              </p>
              <p className="font-semibold text-slate-900">
                Minha atuação será focada em:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  1. Execução com prazo
                </h3>
                <p className="text-slate-700">
                  Acompanhamento permanente das expansões de Samambaia e
                  Ceilândia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  2. Cobrança técnica da Linha 2
                </h3>
                <p className="text-slate-700">
                  Defesa de prioridade para que os estudos avancem para projeto
                  executivo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-slate-900 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  3. Integração inteligente
                </h3>
                <p className="text-slate-700">
                  Ônibus e metrô funcionando como sistema único, com
                  planejamento baseado em dados reais de fluxo.
                </p>
              </div>
            </div>

            <p className="text-xl font-semibold text-slate-900">
              Mobilidade não pode depender de calendário eleitoral.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50 border-b border-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900 flex items-center gap-3">
              <Target className="size-8 text-orange-500" />
              Metas do mandato
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {mandateGoals.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-slate-800">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-slate-900">
              Menos promessa. Mais acompanhamento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <ShieldCheck className="size-8 text-orange-500" />
              Fiscalização
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-4 mb-8">
              <p>
                Dinheiro público investido em mobilidade precisa gerar resultado
                visível:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {oversightItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <p className="text-slate-800">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-slate-900">
              Infraestrutura não é gasto. É investimento produtivo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">A decisão</h2>
            <p className="text-lg sm:text-xl text-slate-100 leading-relaxed mb-6">
              Você prefere aceitar como normal perder meses da sua vida no
              trânsito ou apoiar um mandato que trata mobilidade como prioridade
              estratégica?
            </p>
            <p className="text-2xl font-semibold text-orange-400">
              Brasília é de quem participa. Você participa. Eu represento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CTAFooter message="Brasília é de quem participa. Você participa. Eu represento." />
          </div>
        </div>
      </section>
    </div>
  )
}

export default TransportProposalPage
