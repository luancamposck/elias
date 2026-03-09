import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  HandHeart,
  MapPin,
  ShieldCheck,
  Target
} from "lucide-react"

import { ShareButton } from "@/components/share-button"
import { Reveal } from "@/components/motion/reveal"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { CTAFooter, ProposalHeader } from "@/components/proposal-page"
import { Button } from "@/components/ui/button"

const heroHighlights = [
  "Mais de 600 mil pessoas inscritas no CADÚnico no DF.",
  "Bilhões investidos.",
  "Pouca mobilidade real."
]

const silentEffects = ["Dependência prolongada", "Frustração social crescente"]

const modelShiftItems = [
  {
    icon: Target,
    title: "1. Plano Individual de Autonomia",
    description:
      "Cada família inscrita no CADÚnico terá uma trajetória clara de evolução socioeconômica."
  },
  {
    icon: BriefcaseBusiness,
    title: "2. Benefício com Porta de Saída",
    description:
      "Transferência de renda conectada a capacitação real, emprego ou empreendedorismo assistido."
  },
  {
    icon: ShieldCheck,
    title: "3. Contrato por Resultado",
    description:
      "ONGs e parceiros só recebem integralmente se entregarem reinserção produtiva comprovada."
  },
  {
    icon: BarChart3,
    title: "4. Transparência Radical",
    description:
      "Painel público com entradas, permanência média, saídas para renda própria e evolução mensal."
  }
]

const panelItems = [
  "Entradas no cadastro",
  "Tempo médio de permanência",
  "Saídas para renda própria",
  "Indicadores mensais de evolução"
]

const mandateGoals = [
  "Reduzir em 30% a dependência prolongada no CADÚnico",
  "Garantir plano individual para 100% dos beneficiários",
  "Inserir pelo menos 25% em trajetória produtiva em até 24 meses",
  "Publicação mensal de indicadores abertos"
]

const conversionSteps = ["Começo", "Meio", "Saída"]

const AssistanceProposalPage = () => {
  return (
    <div className="bg-white">
      <ProposalHeader
        icon={HandHeart}
        title="Assistência Social"
        subtitle="Assistência social deve libertar, não aprisionar."
        variant="assistance"
      />

      <section className="relative overflow-hidden border-b bg-gradient-to-b from-white via-orange-50/50 to-white py-16">
        <div
          className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-orange-400/10 blur-[84px]"
          style={{ animation: "orb-float 18s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-[7%] top-10 size-10 rounded-sm bg-slate-900/10"
          style={{ animation: "geo-float-1 16s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-10 right-[8%] size-11 bg-orange-400/20"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "geo-float-2 20s ease-in-out infinite"
          }}
          aria-hidden="true"
        />
        <HandHeart
          className="pointer-events-none absolute right-[14%] top-10 size-14 text-orange-300/40"
          style={{ animation: "geo-float-3 21s ease-in-out infinite" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">
                Assistência Social que Liberta.
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-slate-700">
                Não é sobre manter pessoas no cadastro. É sobre tirar pessoas da
                vulnerabilidade.
              </p>
            </Reveal>

            <StaggerContainer className="mb-8 grid gap-4 md:grid-cols-3">
              {heroHighlights.map((item) => (
                <StaggerItem key={item}>
                  <article className="group rounded-2xl border border-orange-200 border-l-4 border-l-orange-500 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_22px_46px_-30px_rgba(236,103,28,0.55)]">
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 ring-1 ring-orange-200">
                      <MapPin className="size-5 text-orange-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
                    </div>
                    <p className="font-medium text-slate-800">{item}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.1}>
              <p className="mb-8 text-xl font-semibold text-slate-900">
                Brasília merece política social com saída planejada.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="h-11 bg-orange-500 px-7 font-bold text-white hover:bg-orange-600">
                  <a
                    href="https://app.eliasmedeiros.bsb.br"
                    target="_blank"
                    rel="noopener noreferrer">
                    QUERO APOIAR ESSA MUDANÇA
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-orange-300 px-7 font-bold text-orange-700 hover:bg-orange-500 hover:text-white">
                  <a href="#virada-modelo">
                    QUERO RECEBER AS PROPOSTAS COMPLETAS
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#1A2644] via-slate-900 to-[#1A2644] py-16 text-white">
        <div
          className="pointer-events-none absolute right-[5%] top-10 size-11 rounded-sm bg-orange-300/20"
          style={{ animation: "geo-float-3 19s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-12 left-[4%] size-9 bg-white/10"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "geo-float-1 23s ease-in-out infinite"
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="mb-6 text-3xl font-bold">
                O problema que ninguém enfrenta
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mb-8 space-y-4 text-lg leading-relaxed text-slate-100">
                <p>O modelo atual administra vulnerabilidade.</p>
                <p>Não supera vulnerabilidade.</p>
                <p>Benefício entra. A renda própria não chega.</p>
                <p>
                  Famílias permanecem anos no cadastro. Sem plano individual.
                  Sem meta pública de saída.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mb-4 text-lg font-semibold text-white">
                Isso gera dois efeitos silenciosos:
              </p>
            </Reveal>

            <StaggerContainer className="mb-8 grid gap-4 sm:grid-cols-2">
              {silentEffects.map((effect) => (
                <StaggerItem key={effect}>
                  <article className="rounded-2xl border border-slate-400/20 border-l-4 border-l-orange-400 bg-slate-800/55 p-5 shadow-[0_16px_36px_-24px_rgba(8,12,24,0.75)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/55 hover:bg-slate-800/75 hover:shadow-[0_22px_48px_-24px_rgba(236,103,28,0.45)]">
                    <p className="font-semibold text-slate-100">• {effect}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.1}>
              <p className="text-2xl font-bold text-orange-200">
                Assistência precisa proteger. Mas também precisa libertar.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="virada-modelo"
        className="relative overflow-hidden border-b border-slate-200 bg-white py-16">
        <div
          className="pointer-events-none absolute left-[8%] top-16 size-10 rounded-sm bg-orange-500/10"
          style={{ animation: "geo-float-2 18s ease-in-out infinite" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mb-4 flex items-center gap-3 text-3xl font-bold text-slate-900">
                <Target className="size-8 text-orange-500" />A virada de modelo
              </h2>
              <p className="mb-10 text-xl text-slate-700">
                Do benefício permanente para a autonomia estruturada.
              </p>
            </Reveal>

            <StaggerContainer className="mb-10 grid gap-6 md:grid-cols-2">
              {modelShiftItems.map(({ icon: Icon, title, description }) => (
                <StaggerItem key={title}>
                  <article className="group rounded-2xl border border-slate-200 border-l-4 border-l-orange-500 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_22px_50px_-30px_rgba(236,103,28,0.55)]">
                    <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 ring-1 ring-orange-200">
                      <Icon className="size-5 text-orange-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
                    </div>
                    <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-500/20" />
                    <h3 className="mb-3 text-xl font-bold text-slate-900 transition-transform duration-300 group-hover:translate-x-1">
                      {title}
                    </h3>
                    <p className="leading-relaxed text-slate-700">
                      {description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.1}>
              <div className="mb-8 rounded-2xl border border-orange-200/80 bg-gradient-to-br from-orange-50 to-orange-100/40 p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                  Painel público com:
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {panelItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="font-bold text-orange-600">•</span>
                      <p className="text-slate-800">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <Button
                asChild
                className="h-11 bg-orange-500 px-7 font-bold text-white hover:bg-orange-600">
                <a
                  href="https://app.eliasmedeiros.bsb.br"
                  target="_blank"
                  rel="noopener noreferrer">
                  EU APOIO UMA ASSISTÊNCIA COM RESULTADO
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-orange-100 bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Metas claras
              </h2>
              <p className="mb-6 text-lg text-slate-700">
                Até o final do mandato:
              </p>
            </Reveal>

            <StaggerContainer className="mb-8 grid gap-4 sm:grid-cols-2">
              {mandateGoals.map((goal) => (
                <StaggerItem key={goal}>
                  <article className="group rounded-2xl border border-orange-200/80 border-l-4 border-l-orange-500 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_22px_46px_-30px_rgba(236,103,28,0.5)]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-orange-600 transition-transform duration-300 group-hover:scale-105" />
                      <p className="text-slate-800">{goal}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.1}>
              <p className="text-xl font-semibold text-slate-900">
                Meta pública gera cobrança. Cobrança gera eficiência.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#1A2644] via-slate-900 to-[#1A2644] py-16 text-white">
        <div
          className="pointer-events-none absolute right-[6%] top-12 size-10 rounded-sm bg-orange-300/20"
          style={{ animation: "geo-float-3 20s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-[7%] bottom-12 size-9 bg-white/10"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "geo-float-1 22s ease-in-out infinite"
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="mb-8 text-3xl font-bold text-white">
                Por que isso é diferente?
              </h2>
            </Reveal>

            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <article className="rounded-2xl border border-slate-400/20 border-l-4 border-l-orange-400 bg-slate-800/60 p-6 shadow-[0_16px_36px_-24px_rgba(8,12,24,0.75)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/55 hover:bg-slate-800/80 hover:shadow-[0_22px_48px_-24px_rgba(236,103,28,0.45)]">
                  <p className="text-lg leading-relaxed text-slate-100">
                    Não é corte de benefício.{" "}
                    <span className="font-semibold text-orange-200">
                      É aumento de expectativa.
                    </span>
                  </p>
                </article>
              </StaggerItem>
              <StaggerItem>
                <article className="rounded-2xl border border-slate-400/20 border-l-4 border-l-orange-400 bg-slate-800/60 p-6 shadow-[0_16px_36px_-24px_rgba(8,12,24,0.75)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/55 hover:bg-slate-800/80 hover:shadow-[0_22px_48px_-24px_rgba(236,103,28,0.45)]">
                  <p className="text-lg leading-relaxed text-slate-100">
                    Não é redução do Estado.{" "}
                    <span className="font-semibold text-orange-200">
                      É aumento de eficiência.
                    </span>
                  </p>
                </article>
              </StaggerItem>
              <StaggerItem>
                <article className="rounded-2xl border border-slate-400/20 border-l-4 border-l-orange-400 bg-slate-800/60 p-6 shadow-[0_16px_36px_-24px_rgba(8,12,24,0.75)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/55 hover:bg-slate-800/80 hover:shadow-[0_22px_48px_-24px_rgba(236,103,28,0.45)]">
                  <p className="text-lg leading-relaxed text-slate-100">
                    Não é discurso ideológico.{" "}
                    <span className="font-semibold text-orange-200">
                      É gestão com métrica.
                    </span>
                  </p>
                </article>
              </StaggerItem>
            </StaggerContainer>

            <Reveal delay={0.1}>
              <p className="mt-8 text-2xl font-bold text-orange-200">
                O Estado deve ser ponte. Não moradia permanente.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-16">
        <div
          className="pointer-events-none absolute left-[7%] top-14 size-10 rounded-sm bg-[#1A2644]/10"
          style={{ animation: "geo-float-1 21s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[9%] bottom-10 size-11 bg-orange-300/25"
          style={{ animation: "geo-float-3 20s ease-in-out infinite" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Brasília é de quem participa.
              </h2>
              <div className="mb-8 space-y-4 text-lg leading-relaxed text-slate-700">
                <p>Participar é exigir política que funcione.</p>
                <p>Assistência que transforma.</p>
                <p>Transparência que dá confiança.</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Button
                asChild
                className="h-11 bg-orange-500 px-7 font-bold text-white hover:bg-orange-600">
                <a
                  href="https://app.eliasmedeiros.bsb.br"
                  target="_blank"
                  rel="noopener noreferrer">
                  QUERO PARTICIPAR DESSA MUDANÇA
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#1A2644] via-slate-900 to-slate-900 py-16 text-white">
        <div
          className="pointer-events-none absolute left-[5%] bottom-14 size-11 rounded-sm bg-orange-300/20"
          style={{ animation: "geo-float-2 20s ease-in-out infinite" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="mb-8 text-3xl font-bold">
                Assistência social precisa ter:
              </h2>
            </Reveal>

            <div className="relative mb-8">
              <div className="pointer-events-none absolute left-10 right-10 top-1/2 hidden -translate-y-1/2 border-t border-orange-300/35 md:block" />
              <StaggerContainer className="relative grid gap-4 md:grid-cols-3">
                {conversionSteps.map((step, index) => (
                  <StaggerItem key={step}>
                    <article className="rounded-2xl border border-slate-400/20 border-l-4 border-l-orange-400 bg-slate-800/60 p-5 shadow-[0_16px_36px_-24px_rgba(8,12,24,0.75)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/55 hover:bg-slate-800/80 hover:shadow-[0_22px_48px_-24px_rgba(236,103,28,0.45)]">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="inline-flex size-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                          {index + 1}
                        </span>
                        <p className="font-semibold text-slate-100">{step}</p>
                      </div>
                      <div className="h-1 w-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-400/20" />
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <Reveal delay={0.1}>
              <p className="mb-8 text-lg leading-relaxed text-slate-100">
                Se você acredita que dignidade é autonomia, essa proposta é para
                você.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
                <Button
                  asChild
                  className="h-11 bg-orange-500 px-7 font-bold text-white hover:bg-orange-600">
                  <a
                    href="https://app.eliasmedeiros.bsb.br"
                    target="_blank"
                    rel="noopener noreferrer">
                    APOIAR AGORA
                  </a>
                </Button>

                <ShareButton
                  variant="link"
                  className="h-11 border-orange-300/70 bg-transparent px-7 font-bold text-orange-100 hover:bg-orange-500 hover:text-white">
                  COMPARTILHAR ESSA PROPOSTA
                </ShareButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-16">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto max-w-4xl">
            <CTAFooter message="Assistência social que protege, transforma e cria autonomia." />
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default AssistanceProposalPage
