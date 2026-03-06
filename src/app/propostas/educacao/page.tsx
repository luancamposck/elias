import {
  BarChart3,
  Book,
  BookOpen,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  Microscope,
  MonitorSmartphone,
  NotebookPen,
  Presentation,
  School,
  Target,
  TrendingDown,
  Users
} from "lucide-react"
import Image from "next/image"

import { Reveal } from "@/components/motion/reveal"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { CTAFooter, ProposalHeader } from "@/components/proposal-page"

const realityStats = [
  {
    icon: TrendingDown,
    title: "IDEB dos anos finais: 4,6",
    subtitle: "Meta nacional: 5,5"
  },
  {
    icon: BarChart3,
    title: "Só 13,9% dos alunos aprendem matemática adequadamente",
    subtitle: "Aprendizagem abaixo do nível esperado"
  },
  {
    icon: Microscope,
    title: "Apenas 16% das escolas têm laboratório de ciências",
    subtitle: "Estrutura insuficiente para ensino completo"
  },
  {
    icon: Users,
    title: "Mais de 449 mil estudantes dependem da rede pública",
    subtitle: "Uma responsabilidade que exige gestão eficiente"
  }
]

const globalCases = [
  {
    location: "Estônia",
    description: "Autonomia escolar, tecnologia e professores valorizados."
  },
  {
    location: "Singapura",
    description:
      "Formação rigorosa de professores e metas claras de aprendizagem."
  },
  {
    location: "Joinville",
    description: "Monitoramento constante do aprendizado de cada aluno."
  },
  {
    location: "Minas Gerais",
    description:
      "Avaliação contínua e intervenção rápida em escolas com dificuldades."
  }
]

const actionPlan = [
  {
    icon: ChartColumnIncreasing,
    title: "Monitoramento do aprendizado",
    description:
      "Cada aluno acompanhado de perto, com avaliações frequentes para identificar dificuldades rapidamente e agir antes que o problema se torne permanente."
  },
  {
    icon: School,
    title: "Autonomia escolar com responsabilidade",
    description:
      "Diretores com mais liberdade para gerir suas escolas, com metas claras de desempenho e acompanhamento constante dos resultados."
  },
  {
    icon: Presentation,
    title: "Valorização e formação de professores",
    description:
      "Capacitação contínua, carreira estruturada e reconhecimento pelo desempenho."
  },
  {
    icon: MonitorSmartphone,
    title: "Tecnologia educacional inteligente",
    description:
      "Uso de ferramentas digitais e inteligência artificial para apoiar professores e personalizar o aprendizado dos alunos."
  },
  {
    icon: BriefcaseBusiness,
    title: "Ensino técnico e preparação para o futuro",
    description:
      "Ampliação das escolas técnicas e conexão maior entre educação e mercado de trabalho."
  },
  {
    icon: NotebookPen,
    title: "Reforço e nivelamento escolar",
    description:
      "Programas estruturados de recuperação em matemática e português para alunos com dificuldades."
  }
]

const impactAreas = ["segurança", "emprego", "renda", "desenvolvimento social"]

const EducationProposalPage = () => {
  return (
    <div className="bg-white">
      <ProposalHeader
        icon={BookOpen}
        title="Educação de qualidade forma cidadãos livres"
        subtitle="O futuro do seu filho não pode esperar"
        variant="education"
      />

      <section className="relative overflow-hidden border-b bg-gradient-to-b from-white via-slate-50 to-white py-16">
        <div
          data-orb
          className="pointer-events-none absolute -right-24 top-1/3 size-72 rounded-full bg-orange-400/12 blur-[80px]"
          style={{ animation: "orb-float 18s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          data-geo
          className="pointer-events-none absolute left-[6%] top-10 size-10 rounded-sm bg-blue-600/10"
          style={{ animation: "geo-float-1 17s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          data-geo
          className="pointer-events-none absolute bottom-10 right-[8%] size-11 bg-orange-400/20"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "geo-float-2 20s ease-in-out infinite"
          }}
          aria-hidden="true"
        />
        <Book
          className="pointer-events-none absolute right-[14%] top-10 size-14 text-orange-300/40"
          style={{ animation: "geo-float-3 21s ease-in-out infinite" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <Reveal className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Educação
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-700 sm:text-xl">
              <p>
                Brasília investe bilhões de reais em educação todos os anos.
              </p>
              <p>
                Mesmo assim, muitos alunos terminam a escola sem aprender o
                básico.
              </p>
              <p>Educação não pode ser promessa permanente.</p>
              <p className="text-2xl font-bold text-orange-600">
                Precisa ser resultado.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-700/70 bg-gradient-to-br from-slate-800 via-slate-800 to-blue-900 py-16">
        <div
          data-geo
          className="pointer-events-none absolute right-[5%] top-10 size-11 rounded-sm bg-orange-300/25"
          style={{ animation: "geo-float-3 19s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          data-geo
          className="pointer-events-none absolute bottom-12 left-[4%] size-9 bg-white/10"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "geo-float-1 23s ease-in-out infinite"
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-white">
                <BarChart3 className="size-8 text-orange-500" />A realidade da
                educação no DF
              </h2>
            </Reveal>

            <StaggerContainer className="mb-10 grid gap-5 sm:grid-cols-2">
              {realityStats.map(({ icon: Icon, title, subtitle }) => (
                <StaggerItem key={title}>
                  <article className="group rounded-2xl border border-blue-300/30 border-l-4 border-l-orange-400 bg-blue-900/55 p-6 shadow-[0_16px_36px_-24px_rgba(12,74,110,0.65)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/55 hover:bg-blue-900/70 hover:shadow-[0_22px_48px_-24px_rgba(236,103,28,0.45)]">
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-500/10 ring-1 ring-orange-300/40">
                      <Icon className="size-6 text-orange-200 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110" />
                    </div>
                    <p className="mb-2 text-xl font-bold text-white">{title}</p>
                    <p className="text-slate-200/90 transition-colors duration-300 group-hover:text-white">
                      {subtitle}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.1}>
              <p className="mb-2 text-xl font-medium leading-relaxed text-slate-100">
                O problema não é falta de dinheiro.
              </p>
              <p className="text-xl font-medium leading-relaxed text-orange-200">
                É falta de gestão eficiente e foco no aprendizado.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-16">
        <div className="container mx-auto px-4">
          <StaggerContainer className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <StaggerItem>
              <div className="group relative h-72 overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_52px_-30px_rgba(236,103,28,0.45)] sm:h-80 md:h-96">
                <Image
                  src="/people.jpeg"
                  alt="Comunidade escolar no Distrito Federal"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 to-transparent" />
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-lg leading-relaxed text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_44px_-28px_rgba(236,103,28,0.45)]">
                <h2 className="mb-5 text-3xl font-bold text-slate-900">
                  Educação fraca não é estatística. É destino limitado.
                </h2>
                <p className="mb-4">
                  Todos os dias, pais deixam seus filhos na escola acreditando
                  que ali começa o futuro.
                </p>
                <p className="mb-4">
                  Um aluno entra na sala esperando aprender.
                </p>
                <p className="mb-4">Esperando ter oportunidades.</p>
                <p className="mb-4">
                  Mas quando o sistema falha, o tempo passa e o futuro fica mais
                  distante.
                </p>
                <p className="font-semibold text-slate-900">
                  Educação forte abre caminhos. Educação fraca fecha portas.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden border-b bg-slate-50 py-16">
        <div
          data-geo
          className="pointer-events-none absolute left-[8%] top-16 size-10 rounded-sm bg-orange-500/10"
          style={{ animation: "geo-float-2 18s ease-in-out infinite" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mb-10 text-3xl font-bold text-slate-900">
                O que funciona no mundo
              </h2>
            </Reveal>
            <StaggerContainer className="mb-8 grid gap-6 md:grid-cols-2">
              {globalCases.map(({ location, description }) => (
                <StaggerItem key={location}>
                  <article className="card-premium bg-white group p-6 hover:shadow-[0_20px_48px_-28px_rgba(236,103,28,0.5)]">
                    <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-500/20" />
                    <h3 className="mb-3 text-xl font-bold text-slate-900 transition-transform duration-300 group-hover:translate-x-1">
                      {location}
                    </h3>
                    <p className="text-slate-700">{description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <Reveal delay={0.1}>
              <p className="text-xl font-semibold text-slate-900">
                A lição é simples: quando a gestão melhora, o aprendizado
                melhora.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b bg-white py-16">
        <Book
          className="pointer-events-none absolute right-[7%] top-12 size-16 text-orange-200/50"
          style={{ animation: "geo-float-1 20s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          data-geo
          className="pointer-events-none absolute bottom-14 left-[5%] size-11 rounded-sm bg-blue-600/10"
          style={{ animation: "geo-float-3 21s ease-in-out infinite" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900">
                <Target className="size-8 text-orange-500" />O que vamos fazer
                no Distrito Federal
              </h2>
              <p className="mb-10 text-lg text-slate-700">
                A educação precisa de método, responsabilidade e foco no aluno.
              </p>
            </Reveal>

            <StaggerContainer className="grid gap-6 md:grid-cols-2">
              {actionPlan.map(({ icon: Icon, title, description }) => (
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
          </div>
        </div>
      </section>

      <section className="border-b border-orange-100 bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Transparência para a sociedade
              </h2>
              <p className="mb-6 text-lg text-slate-700">
                Pais e alunos têm direito de saber como está a educação em cada
                escola. Por isso defendemos:
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group mb-6 rounded-2xl border border-orange-200 border-l-4 border-l-orange-500 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_22px_46px_-30px_rgba(236,103,28,0.5)]">
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 ring-1 ring-orange-200">
                  <BarChart3 className="size-5 text-orange-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
                </div>
                <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-500/20" />
                <p className="mb-2 text-xl font-bold text-slate-900">
                  Ranking público de desempenho escolar
                </p>
                <p className="text-slate-700">
                  Com resultados claros e acessíveis para toda a sociedade.
                </p>
              </div>
            </Reveal>

            <p className="text-lg font-semibold text-slate-900">
              Transparência gera cobrança. Cobrança gera melhoria.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                O resultado que queremos
              </h2>
              <div className="mb-8 space-y-4 text-lg text-slate-700">
                <p>Uma educação pública que realmente transforme vidas.</p>
                <p>Mais aprendizagem.</p>
                <p>Menos evasão.</p>
                <p>Mais oportunidades para os jovens do Distrito Federal.</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Porque educação forte melhora tudo ao redor:
              </h3>
              <div className="mb-8 flex flex-wrap gap-3">
                {impactAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-100 hover:text-orange-700 hover:shadow-[0_14px_30px_-20px_rgba(236,103,28,0.6)]">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(236,103,28,0.55)]">
                <h3 className="mb-3 text-2xl font-bold">
                  Brasília pode educar melhor
                </h3>
                <p className="mb-2 text-slate-100">
                  O Distrito Federal tem recursos.
                </p>
                <p className="mb-5 text-slate-100">
                  Agora precisamos transformar investimento em resultado.
                </p>
                <p className="text-2xl font-bold text-orange-400">
                  Educação forte muda o futuro.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-16">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto max-w-4xl">
            <CTAFooter message="Educação forte muda o futuro." />
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default EducationProposalPage
