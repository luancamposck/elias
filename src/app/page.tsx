import { ArrowRight, BarChart3, FileSearch2, Scale } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PROPOSALS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Elias Medeiros | Boa política melhora tudo ao redor",
  description:
    "Diagnóstico claro, visão de país e participação ativa para destravar Brasília com responsabilidade."
}

const DIAGNOSTIC_POINTS = [
  "Imposto alto é escolha política.",
  "Hospital lotado é falha de gestão.",
  "Trânsito parado é falta de planejamento.",
  "Impunidade é decisão legislativa."
]

const REPRESENTATION_PILLARS = [
  {
    icon: FileSearch2,
    title: "Diagnosticar antes de prometer"
  },
  {
    icon: BarChart3,
    title: "Medir antes de gastar"
  },
  {
    icon: Scale,
    title: "Fiscalizar antes de aprovar"
  }
]

const PRIORITY_SUMMARIES: Record<string, string> = {
  health: "Gestão eficiente salva vidas todos os dias.",
  education: "Educação de qualidade constrói o futuro.",
  transport: "Tempo perdido também é custo para famílias.",
  security: "Lei firme protege quem cumpre o dever.",
  "public-service": "Serviço público forte entrega com previsibilidade.",
  assistance: "Assistência correta alcança quem mais precisa."
}

const Home = () => {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-96px)] items-center text-white">
        <Image
          src="/main-banner.jpg"
          alt=""
          // data-ai-hint={mainBanner.hint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/50" />

        <div className="container relative z-10 mx-auto px-4 py-10 sm:py-14 md:py-16">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <p className="inline-flex items-center rounded-full border border-blue-200/30 bg-blue-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100 sm:text-sm">
              Decisão e participação
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              O que acontece em Brasília chega até você.
            </h1>
            <p className="max-w-2xl text-base text-blue-100 sm:text-lg">
              Política não é discurso. É decisão que impacta sua vida todos os
              dias.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-11 bg-orange-500 px-8 text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600">
                <Link href="/streamline">
                  Eu participo
                  <ArrowRight className="size-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 border-blue-200/60 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                <Link href="#diagnostico">
                  Entenda como isso impacta você
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="diagnostico" className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Quando a política falha, você sente.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {DIAGNOSTIC_POINTS.map((point) => (
              <article
                key={point}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <p className="text-base font-semibold text-gray-800 sm:text-lg">
                  {point}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Não é ataque pessoal. É escolha de visão de país.
            </h2>
            <p className="mt-5 text-base text-gray-700 sm:text-lg">
              Você prefere um deputado que expande o Estado ou que cobre
              resultado?
            </p>
            <p className="mt-2 text-base font-semibold text-gray-800 sm:text-lg">
              A diferença não está no discurso. Está no voto.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Representar é responder pelo impacto.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {REPRESENTATION_PILLARS.map(({ icon: Icon, title }) => (
              <article
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <Icon className="size-8 text-orange-500" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 order-first md:order-last">
              <Image
                src="/elias-medeiros.png"
                alt="Elias Medeiros"
                // data-ai-hint={placeholderImages.politicianStory.hint}
                width={400}
                height={500}
                className="mx-auto aspect-[4/5] w-full max-w-sm rounded-lg object-cover shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              />
            </div>
            <div className="md:col-span-7">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Por que decidi entrar na política
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
                  <p>Eu não entrei na política por impulso.</p>
                  <p>
                    Entrei porque entendi que decisões mal feitas custam caro
                    para quem trabalha, empreende e sustenta uma família.
                  </p>
                  <p>
                    O que acontece em Brasília chega até você — e isso exige
                    responsabilidade.
                  </p>
                  <p>
                    Escolhi participar para representar com método, equilíbrio e
                    compromisso.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 h-11 bg-orange-500 px-8 text-base font-semibold text-white hover:bg-orange-600">
                  <Link href="#participar">
                    Participar agora
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Áreas prioritárias
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROPOSALS.map(({ icon: Icon, ...proposal }) => (
              <Link
                key={proposal.href}
                href={proposal.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md">
                <article className="h-full">
                  <Icon className="size-9 text-orange-500" />
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {proposal.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-700">
                    {PRIORITY_SUMMARIES[proposal.id] ?? proposal.description}
                  </p>
                  <span className="mt-5 inline-flex items-center font-semibold text-orange-600">
                    Ver detalhes
                    <ArrowRight className="size-5 transition group-hover:translate-x-1" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="participar" className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-blue-900 p-8 text-white shadow-lg sm:p-10">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Brasília é de quem participa.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
              Mandato não é palco. É responsabilidade compartilhada.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                className="h-11 bg-orange-500 px-7 text-base font-semibold text-white hover:bg-orange-600">
                <Link href="/streamline">Participar</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 border-blue-200/50 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                <Link href="/streamline">Enviar proposta</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 border-blue-200/50 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                <Link href="/report">Denunciar irregularidade</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-28 pt-16 text-center sm:pb-32 sm:pt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Boa política melhora tudo ao redor.
            </h2>
            <p className="mt-4 text-lg text-gray-700 sm:text-xl">
              Você participa. Eu represento.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-11 bg-orange-500 px-8 text-base font-semibold text-white hover:bg-orange-600">
              <Link href="/streamline">
                Participar agora
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Link
        href="/streamline"
        aria-label="Participar agora"
        className="fixed bottom-5 right-4 z-50 inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-5 text-sm font-semibold text-white shadow-xl shadow-orange-500/35 transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6 sm:h-11 sm:text-base">
        Participar
      </Link>
    </>
  )
}

export default Home
