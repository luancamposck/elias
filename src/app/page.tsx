import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  ClipboardCheck,
  FileSearch2,
  ShieldCheck
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PROPOSALS } from "@/lib/constants"

const CONTEXT_POINTS = [
  "Decisões federais pouco visíveis afetam o dia a dia do DF.",
  "Detalhes ignorados mudam custo, prazo e impacto real.",
  "Menos ruído político e mais foco em funcionamento."
]

const ROLE_POINTS = [
  "Representar é responder pelo impacto de cada decisão.",
  "Deputado federal não executa obra: legisla, fiscaliza e corrige rumo.",
  "Compromisso: prioridade clara, debate responsável e entrega correta."
]

const ACTION_POINTS = [
  {
    icon: Banknote,
    title: "Orçamento onde faz diferença",
    description:
      "Recursos federais direcionados para prioridades que chegam na ponta."
  },
  {
    icon: FileSearch2,
    title: "Fiscalização por resultado",
    description:
      "Acompanhamento público para cobrar execução, prazo e qualidade."
  },
  {
    icon: ClipboardCheck,
    title: "Leis para melhorar execução",
    description: "Regras que reduzem travas e aumentam previsibilidade."
  },
  {
    icon: Building2,
    title: "Articulação com impacto amplo",
    description:
      "Coordenação institucional para soluções que alcancem todo o DF."
  }
]

const PROPOSAL_FLOWS: Record<
  string,
  {
    contexto: string
    detalhe: string
    consequencia: string
    encaminhamento: string
  }
> = {
  health: {
    contexto: "A saúde do DF depende de decisões federais de repasse e gestão.",
    detalhe: "Recursos previstos atrasam ou chegam sem foco de execução.",
    consequencia: "Filas maiores e atendimento mais instável.",
    encaminhamento:
      "Vincular repasse a meta de entrega e fiscalização contínua."
  },
  transport: {
    contexto: "Mobilidade exige coordenação entre orçamento, obra e operação.",
    detalhe: "Projetos travam por priorização ruim e cronograma frágil.",
    consequencia: "Mais tempo perdido e custo maior para quem trabalha.",
    encaminhamento:
      "Planejamento com etapas públicas, metas e cobrança por resultado."
  },
  security: {
    contexto: "Segurança pública depende de integração federativa real.",
    detalhe: "A legislação não acompanha o ritmo das novas dinâmicas do crime.",
    consequencia: "Forças sobrecarregadas e prevenção menos eficiente.",
    encaminhamento:
      "Atualizar normas com foco operacional e monitoramento permanente."
  },
  "public-service": {
    contexto: "Serviço público forte começa em boas condições de trabalho.",
    detalhe: "Processos burocráticos e estruturas frágeis atrasam entregas.",
    consequencia: "Cidadão espera mais e recebe menos previsibilidade.",
    encaminhamento:
      "Ajustar regras e gestão para serviço contínuo e mensurável."
  },
  assistance: {
    contexto: "Assistência social precisa chegar rápido a quem tem urgência.",
    detalhe: "Programas existem, mas execução e integração ainda falham.",
    consequencia: "Famílias ficam sem proteção no momento crítico.",
    encaminhamento:
      "Conectar cadastro, repasse e acompanhamento com transparência."
  }
}

const CONFIDENCE_POINTS = [
  "Menos discurso, mais previsibilidade de ação.",
  "Coerência ao longo do tempo, sem mudar de tom conforme o vento.",
  "Debate firme, sem radicalização desnecessária.",
  "Método claro para acompanhar cada encaminhamento."
]

const Home = () => {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-96px)] items-center text-white">
        <Image
          src="/main-banner.jpg"
          alt="Brasilia ao amanhecer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/50" />

        <div className="container relative z-10 mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-300 sm:text-base">
              DF precisa de menos ruído e mais funcionamento
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              O que trava em Brasília e como corrigir com critério
            </h1>
            <p className="max-w-2xl text-base text-gray-100 sm:text-lg md:text-xl">
              Decisões federais afetam o DF todos os dias. O foco aqui é
              explicar impacto, responsabilidade e encaminhamento.
            </p>
            <Button
              asChild
              size="lg"
              className="h-11 bg-orange-500 px-8 text-base font-semibold text-white hover:bg-orange-600">
              <Link href="#acompanhar">
                Acompanhe e entenda
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600 sm:text-base">
              Contexto
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Antes de prometer, explicar o que está acontecendo
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {CONTEXT_POINTS.map((point) => (
              <div
                key={point}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-base text-gray-700 shadow-sm sm:text-lg">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600 sm:text-base">
              Posicionamento
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Representar é responder pelo impacto
            </h2>
            <div className="mt-8 space-y-4">
              {ROLE_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-orange-500" />
                  <p className="text-base text-gray-700 sm:text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600 sm:text-base">
              Como atua como deputado federal
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Sem promessa vazia, com método e acompanhamento
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {ACTION_POINTS.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <Icon className="size-8 text-orange-500" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {title}
                </h3>
                <p className="mt-3 text-base text-gray-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600 sm:text-base">
              Problemas e propostas
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Cada área segue a mesma regra de responsabilidade
            </h2>
            <div className="mt-6 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              Contexto → Detalhe → Consequência → Encaminhamento
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPOSALS.map(({ icon: Icon, ...proposal }) => (
              <Link key={proposal.href} href={proposal.href}>
                <div className="rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="p-6">
                    <Icon className="size-10 text-orange-500 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {proposal.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {proposal.description}
                    </p>
                    <div className="flex items-center text-orange-500 font-medium mt-auto">
                      Ver detalhes
                      <ArrowRight className="size-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600 sm:text-base">
              Confiança
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Consistência para longo prazo
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {CONFIDENCE_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-orange-500" />
                  <p className="text-base text-gray-700 sm:text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="acompanhar" className="bg-white pb-16 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-blue-900 p-7 text-white shadow-lg sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-300 sm:text-base">
              Acompanhar é o primeiro passo
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Receba explicações sobre decisões federais que impactam o DF
            </h2>
            <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
              Conteúdo objetivo para entender o que muda na sua rotina e como
              acompanhar cada encaminhamento.
            </p>

            <form className="mt-7 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Seu e-mail"
                className="h-11 w-full rounded-md border border-blue-700 bg-blue-950/60 px-3 text-base text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Button
                type="submit"
                className="h-11 bg-orange-500 px-8 text-base font-semibold text-white hover:bg-orange-600">
                Acompanhar
              </Button>
            </form>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-base text-gray-600 sm:text-lg">
              Se quiser participar de forma mais direta, o próximo passo é
              voluntário.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
              <Link href="/streamline">Seja voluntário</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
