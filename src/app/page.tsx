import { ArrowRight, BarChart3, FileSearch2, Scale } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { HeroItem, HeroReveal } from "@/components/motion/hero-reveal"
import { Reveal } from "@/components/motion/reveal"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
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
  { icon: FileSearch2, title: "Diagnosticar antes de prometer" },
  { icon: BarChart3, title: "Medir antes de gastar" },
  { icon: Scale, title: "Fiscalizar antes de aprovar" }
]

const PRIORITY_SUMMARIES: Record<string, string> = {
  health: "Gestão eficiente salva vidas todos os dias.",
  education: "Educação de qualidade constrói o futuro.",
  transport: "Tempo perdido também é custo para famílias.",
  security: "Lei firme protege quem cumpre o dever.",
  "public-service": "Serviço público forte entrega com previsibilidade.",
  assistance: "Assistência correta alcança quem mais precisa."
}

const Home = () => (
  <>
    {/* ── Hero ─────────────────────────────────────────────── */}
    <section className="relative flex min-h-[calc(100vh-96px)] items-center overflow-hidden text-white">
      <Image
        src="/main-banner.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/90 via-[#0a0f1c]/70 to-[#0a0f1c]/40" />

      {/* Atmospheric orbs */}
      <div
        data-orb
        className="pointer-events-none absolute -right-32 top-1/4 size-[400px] rounded-full bg-primary/50 blur-[100px]"
        style={{ animation: "orb-float 20s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-orb
        className="pointer-events-none absolute -left-20 bottom-1/4 size-[300px] rounded-full bg-primary/30 blur-[80px]"
        style={{ animation: "orb-float-alt 25s ease-in-out infinite" }}
        aria-hidden="true"
      />

      {/* Floating geometry */}
      <div
        data-geo
        className="pointer-events-none absolute right-[12%] top-[18%] size-14 rounded-sm bg-primary/20"
        style={{ animation: "geo-float-1 16s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute bottom-[22%] left-[8%] size-10 bg-primary/15"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-2 19s ease-in-out infinite"
        }}
        aria-hidden="true"
      />

      <HeroReveal className="container relative z-10 mx-auto px-4 py-10 sm:py-14 md:py-16">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <HeroItem>
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm sm:text-sm">
              Decisão e participação
            </p>
          </HeroItem>

          <HeroItem>
            <h1 className="text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              O que acontece em Brasília{" "}
              <span className="text-primary drop-shadow-[0_0_24px_rgba(236,103,28,0.3)]">
                chega até você.
              </span>
            </h1>
          </HeroItem>

          <HeroItem>
            <p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Política não é discurso. É decisão que impacta sua vida todos os
              dias.
            </p>
          </HeroItem>

          <HeroItem>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 bg-primary px-8 text-base font-semibold text-white shadow-[--shadow-glow] hover:bg-primary/90 hover:shadow-[--shadow-glow-strong]"
                style={{ animation: "glow-pulse 3s ease-in-out infinite" }}>
                <a href="https://app.eliasmedeiros.bsb.br" target="_blank" rel="noopener noreferrer">
                  Eu participo
                  <ArrowRight className="size-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-white/20 bg-white/[0.06] px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white">
                <Link href="#diagnostico">
                  Entenda como isso impacta você
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </HeroItem>
        </div>
      </HeroReveal>
    </section>

    {/* ── Diagnóstico ──────────────────────────────────────── */}
    <section
      id="diagnostico"
      className="dot-pattern relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Warm radial glow from top */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(236,103,28,0.05),transparent)]"
        aria-hidden="true"
      />
      {/* Floating geometry */}
      <div
        data-geo
        className="pointer-events-none absolute right-[6%] top-[15%] size-12 rounded-sm bg-primary/10"
        style={{ animation: "geo-float-3 18s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute bottom-[20%] left-[4%] size-9 bg-primary/[0.07]"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-1 22s ease-in-out infinite"
        }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Quando a política falha,{" "}
            <span className="text-primary">você sente.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {DIAGNOSTIC_POINTS.map((point) => (
            <StaggerItem key={point}>
              <article className="card-premium p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-primary/40" />
                <p className="relative z-10 text-base font-semibold leading-snug text-foreground sm:text-lg">
                  {point}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* ── Visão de País ────────────────────────────────────── */}
    <section className="relative overflow-hidden bg-warm-paper py-20 sm:py-28">
      {/* Accent wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_50%,rgba(236,103,28,0.04),transparent)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4">
        <Reveal>
          <div className="accent-bar mx-auto max-w-4xl rounded-2xl border border-gray-100 bg-white p-8 pl-10 shadow-sm sm:p-12 sm:pl-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Não é ataque pessoal.{" "}
              <span className="text-primary">É escolha de visão de país.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/65 sm:text-lg">
              Você prefere um deputado que expande o Estado ou que cobra
              resultado?
            </p>
            <p className="mt-2 text-base font-semibold text-foreground sm:text-lg">
              A diferença não está no discurso. Está no voto.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Pilares de Representação ─────────────────────────── */}
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Subtle line pattern */}
      <div className="line-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Representar é responder pelo impacto.
          </h2>
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
          {REPRESENTATION_PILLARS.map(({ icon: Icon, title }) => (
            <StaggerItem key={title}>
              <article className="card-premium p-7">
                <div className="relative z-10 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="relative z-10 mt-5 text-xl font-bold text-foreground">
                  {title}
                </h3>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* ── História ─────────────────────────────────────────── */}
    <section className="relative overflow-hidden bg-warm-paper py-20 sm:py-28">
      {/* Decorative orbs */}
      <div
        data-orb
        className="pointer-events-none absolute -right-24 top-1/4 size-[420px] rounded-full bg-primary/40 blur-[100px]"
        style={{ animation: "orb-float 20s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-orb
        className="pointer-events-none absolute -left-16 bottom-1/4 size-[300px] rounded-full bg-primary/25 blur-[80px]"
        style={{ animation: "orb-float-alt 25s ease-in-out infinite" }}
        aria-hidden="true"
      />

      {/* Floating geometry */}
      <div
        data-geo
        className="pointer-events-none absolute right-[10%] top-[12%] size-16 rounded-sm bg-primary/15"
        style={{ animation: "geo-float-1 15s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute bottom-[18%] left-[5%] size-12 bg-primary/[0.12]"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-2 20s ease-in-out infinite"
        }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute left-[15%] top-[8%] size-10 rounded-sm bg-primary/10"
        style={{ animation: "geo-float-3 22s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute bottom-[10%] right-[18%] size-9 bg-primary/[0.08]"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-1 17s ease-in-out infinite"
        }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <Reveal
            direction="right"
            className="order-first md:order-last md:col-span-5">
            <Image
              src="/elias-medeiros.png"
              alt="Elias Medeiros"
              width={400}
              height={500}
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl object-cover shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
            />
          </Reveal>

          <Reveal direction="left" className="md:col-span-7">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Por que decidi{" "}
                <span className="text-primary">entrar na política</span>
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/65">
                <p>Eu não entrei na política por impulso.</p>
                <p>
                  Entrei porque entendi que decisões mal feitas custam caro para
                  quem trabalha, empreende e sustenta uma família.
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
                className="mt-8 h-12 bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90"
                style={{ boxShadow: "var(--shadow-glow)" }}>
                <a href="https://app.eliasmedeiros.bsb.br" target="_blank" rel="noopener noreferrer">
                  Participar agora
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ── Áreas Prioritárias ───────────────────────────────── */}
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Warm radial glow from center */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(236,103,28,0.04),transparent)]"
        aria-hidden="true"
      />
      {/* Dot pattern overlay */}
      <div className="dot-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* Floating shapes */}
      <div
        data-geo
        className="pointer-events-none absolute left-[4%] top-[20%] size-12 bg-primary/10"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-2 21s ease-in-out infinite"
        }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute right-[7%] bottom-[15%] size-11 rounded-sm bg-primary/[0.07]"
        style={{ animation: "geo-float-3 19s ease-in-out infinite" }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Áreas prioritárias
          </h2>
        </Reveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROPOSALS.map(({ icon: Icon, ...proposal }) => (
            <StaggerItem key={proposal.href}>
              <Link
                href={proposal.href}
                className="card-premium group block p-6">
                <div className="relative z-10 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="relative z-10 mt-5 text-xl font-bold text-foreground">
                  {proposal.title}
                </h3>
                <p className="relative z-10 mt-2 text-base leading-relaxed text-foreground/60">
                  {PRIORITY_SUMMARIES[proposal.id] ?? proposal.description}
                </p>
                <span className="relative z-10 mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Ver detalhes
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* ── Brasília Photo Strip ─────────────────────────────── */}
    <section className="relative h-[280px] overflow-hidden sm:h-[360px] md:h-[440px]">
      <Image
        src="/brasilia.jpeg"
        alt="Vista aérea da Esplanada dos Ministérios, Brasília"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/70 via-[#0a0f1c]/25 to-transparent" />
      <div className="relative z-10 flex h-full items-end justify-center px-4 pb-8 sm:pb-10">
        <Reveal>
          <p className="max-w-2xl text-center text-2xl font-extrabold leading-tight text-white drop-shadow-md sm:text-3xl md:text-4xl">
            O futuro de Brasília começa com participação.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ── CTA Participar ───────────────────────────────────── */}
    <section id="participar" className="bg-warm-paper py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="relative flex flex-col items-center overflow-hidden rounded-2xl p-8 text-white shadow-lg lg:p-40">
            <Image
              src="/roda-de-conversa.png"
              alt="Roda de conversa"
              fill
              className="object-cover sm:object-fill"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/90 via-[#0a0f1c]/70 to-[#0a0f1c]/45" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Brasília é de quem participa.
              </h2>
              <p className="mt-4 max-w-3xl text-base text-white/75 sm:text-lg">
                Mandato não é palco. É responsabilidade compartilhada.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  className="h-11 bg-primary px-7 text-base font-semibold text-white hover:bg-primary/90"
                  style={{ boxShadow: "var(--shadow-glow)", animation: "glow-pulse 3s ease-in-out infinite" }}>
                  <a href="https://app.eliasmedeiros.bsb.br" target="_blank" rel="noopener noreferrer">Participar</a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-white/20 bg-white/[0.06] px-7 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white">
                  <a href="https://app.eliasmedeiros.bsb.br" target="_blank" rel="noopener noreferrer">Enviar proposta</a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-white/20 bg-white/[0.06] px-7 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white">
                  <a href="https://app.eliasmedeiros.bsb.br" target="_blank" rel="noopener noreferrer">Denunciar irregularidade</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Encerramento ─────────────────────────────────────── */}
    <section className="bg-white pb-28 pt-20 text-center sm:pb-32 sm:pt-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl p-8 shadow-sm sm:p-10">
            <Image
              src="/people.jpeg"
              alt="Encontro comunitário ao ar livre"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/90 via-[#0a0f1c]/70 to-[#0a0f1c]/45" />

            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Boa política melhora tudo ao redor.
              </h2>
              <p className="mt-4 text-lg text-white/75 sm:text-xl">
                Você participa. Eu represento.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 h-12 bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90"
                style={{ boxShadow: "var(--shadow-glow)" }}>
                <a href="https://app.eliasmedeiros.bsb.br" target="_blank" rel="noopener noreferrer">
                  Participar agora
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── FAB Participar (CSS-only entrance) ──────────────── */}
    <a
      href="https://app.eliasmedeiros.bsb.br"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Participar agora"
      className="fixed bottom-5 right-4 z-50 inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:bottom-6 sm:right-6 sm:h-11 sm:text-base"
      style={{
        boxShadow: "var(--shadow-glow)",
        animation: "fab-enter 0.5s cubic-bezier(0.22,1,0.36,1) 1.5s both"
      }}>
      Participar
    </a>
  </>
)

export default Home
