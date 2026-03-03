import {
  Activity,
  BarChart3,
  Shield,
  ShieldCheck,
  Target,
  TrendingDown,
  UserCheck,
  Users
} from "lucide-react"

import {
  CTAFooter,
  DetailSection,
  ProposalHeader,
  StatsSection
} from "@/components/proposal-page"

const stats = [
  {
    icon: Users,
    color: "text-blue-500",
    value: "+15%",
    label: "Aumento do efetivo"
  },
  {
    icon: TrendingDown,
    color: "text-green-500",
    value: "80%",
    label: "Menos reincidência"
  },
  {
    icon: UserCheck,
    color: "text-orange-500",
    value: "21 mil",
    label: "Detenções por ano"
  },
  {
    icon: Shield,
    color: "text-blue-600",
    value: "R$ 3,2bi",
    label: "Fundo Constitucional"
  }
]

const SecurityProposalPage = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-20 grid grid-cols-3 gap-0">
          <span className="block size-6 bg-orange-500 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 bg-orange-500 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 bg-orange-300 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 bg-white ring-1 ring-black/10 sm:size-8 md:size-10" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-20 grid grid-cols-3 gap-0">
          <span className="block size-6 bg-white ring-1 ring-black/10 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 bg-orange-300 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 bg-orange-500 sm:size-8 md:size-10" />
          <span className="block size-6 sm:size-8 md:size-10" />
          <span className="block size-6 bg-orange-500 sm:size-8 md:size-10" />
        </div>

        <ProposalHeader
          icon={ShieldCheck}
          title="Segurança é Prioridade. Proteção é Compromisso."
          subtitle="O Distrito Federal avançou. Mas não podemos retroceder. Segurança é ordem, presença e responsabilidade."
          variant="security"
        />
      </div>

      <StatsSection
        title="Resultados que mostram direção — mas exigem continuidade."
        stats={stats}
      />

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Target className="text-orange-500 size-8" />
                Diagnóstico Estratégico
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed font-medium">
                  O DF evoluiu. Houve reforço no efetivo, redução da
                  reincidência e investimentos recordes. Mas segurança não é
                  evento. É sistema permanente.
                </p>
                <p className="mt-4">
                  Sabemos que o medo de retroceder é real. Segurança exige
                  prioridade constante e coragem para manter o que funciona,
                  ajustando o que ainda precisa de ordem.
                </p>
              </div>
            </div>

            <div className="mb-16 bg-gray-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  O que está em jogo não são números. São vidas.
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Você merece voltar para casa em paz, proteger sua família e
                  ter controle sobre o seu bairro. Proteção, Ordem e Respeito
                  são os pilares para que a vida em Brasília seja plena. O
                  Estado deve estar presente onde o cidadão mais precisa.
                </p>
              </div>
              <Shield className="absolute -right-10 -bottom-10 size-48 text-white/5 rotate-12" />
            </div>

            <h2 className="text-3xl font-bold mb-10 text-gray-900">
              Ação: O Plano de Proteção e Ordem
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Activity className="size-5 text-orange-500" />
                  Vida e Ordem
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Combate firme às organizações criminosas</li>
                  <li>• Integração real das forças policiais</li>
                  <li>• Presença territorial permanente nas RAs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <UserCheck className="size-5 text-blue-500" />
                  Fim da Reincidência
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Monitoramento ativo de criminosos reincidentes</li>
                  <li>• Tecnologia integrada de dados criminais</li>
                  <li>• Acompanhamento rigoroso pós-cárcere</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <BarChart3 className="size-5 text-green-500" />
                  Tecnologia e Inteligência
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Ampliação do uso de dados estratégicos</li>
                  <li>• Monitoramento por manchas criminais</li>
                  <li>• Digitalização completa da segurança pública</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-900">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <ShieldCheck className="size-5 text-gray-900" />
                  Sistema Prisional Eficiente
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Ampliação responsável de vagas</li>
                  <li>• Gestão moderna e focada em resultados</li>
                  <li>• Ressocialização com controle e disciplina</li>
                </ul>
              </div>
            </div>

            <DetailSection
              title="Investimento inteligente, não gasto improvisado"
              description="A gestão do Fundo Constitucional exige responsabilidade institucional:"
              items={[
                "Garantia de manutenção e ampliação dos recursos federais",
                "Melhor gestão orçamentária com foco em equipamentos de ponta",
                "Uso estratégico dos investimentos em inteligência policial"
              ]}
            />

            <DetailSection
              title="Propostas de Lei"
              description="Atuarei no Congresso Nacional por uma legislação que proteja o cidadão:"
              items={[
                "Endurecimento de penas contra organizações criminosas",
                "Modernização do sistema penal para reduzir a impunidade",
                "Reforço à integração nacional das polícias e inteligência"
              ]}
            />

            <div className="bg-orange-50 p-8 rounded-2xl mb-16 border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="size-7 text-orange-600" />
                Metas: Resultados Concretos
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p>Redução contínua de crimes violentos letais</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p>Monitoramento público de indicadores criminais</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p>Painel de metas por Região Administrativa</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p>Avaliação permanente de desempenho policial</p>
                </div>
              </div>
            </div>

            <DetailSection
              title="Fiscalização e Transparência"
              description="Transparência fortalece a confiança. Meu compromisso é com:"
              items={[
                "Fortalecimento do controle social sobre a segurança",
                "Dados públicos acessíveis e em tempo real",
                "Prestação de contas periódica sobre os investimentos"
              ]}
            />

            <CTAFooter message="Segurança não é promessa. É prioridade. Junte-se à defesa da vida." />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecurityProposalPage
