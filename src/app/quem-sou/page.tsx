import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  HeartHandshake,
  MapPin,
  Users,
  type LucideIcon
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import {
  TimelineShowcase,
  type TimelineEntry
} from "@/components/quem-sou/timeline-showcase"
import { Reveal } from "@/components/motion/reveal"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Quem Sou | Elias Medeiros",
  description:
    "Trajetória, experiência e participação pública de Elias Medeiros em Brasília."
}

type StoryCard = {
  eyebrow: string
  title: string
  description: string
  icon: LucideIcon
  imageSrc?: string
  imageAlt?: string
  list?: string[]
}

const STORY_CARDS: StoryCard[] = [
  {
    eyebrow: "Minha história",
    title: "Samambaia moldou minha visão de realidade",
    description:
      "Vivo em Samambaia desde 1990, acompanhando de perto os desafios e as oportunidades de quem constrói a vida no Distrito Federal.",
    icon: MapPin,
    imageSrc: "/linha-do-tempo/samambaia-1990.jpeg",
    imageAlt: "Registro antigo de Elias Medeiros em Samambaia"
  },
  {
    eyebrow: "Empreendedor e desenvolvedor",
    title: "Resultados exigem método, trabalho e responsabilidade",
    description:
      "Em janeiro de 2000, fundei a Massimo Participações, atuando em tecnologia, software, publicidade e marketing empresarial.",
    icon: BriefcaseBusiness,
    imageSrc: "/linha-do-tempo/empreendedor-e-desenvolvedor.jpeg",
    imageAlt: "Elias Medeiros em ambiente de trabalho"
  },
  {
    eyebrow: "Experiência no Governo do DF",
    title: "Conheci a máquina pública por dentro",
    description:
      "Passei por diferentes áreas do Governo do Distrito Federal e entendi onde a gestão precisa melhorar para servir melhor as pessoas.",
    icon: Building2,
    imageSrc: "/linha-do-tempo/reuniao-politica.jpeg",
    imageAlt: "Reunião institucional no Governo do Distrito Federal",
    list: [
      "Administração de Brasília",
      "Subsecretaria de Juventude",
      "Vice-Governadoria",
      "Secretaria de Obras",
      "Secretaria de Relações Institucionais",
      "Casa Civil e Governadoria"
    ]
  },
  {
    eyebrow: "Experiência internacional",
    title: "Madrid ampliou minha visão sobre gestão e liberdade",
    description:
      "Entre 2007 e 2014 vivi em Madrid, empreendi na área de tecnologia e comunicação e atuei em projetos voltados à comunidade brasileira na Europa.",
    icon: Globe2,
    imageSrc: "/linha-do-tempo/emabixador-eslovenia.jpeg",
    imageAlt: "Elias Medeiros em encontro internacional"
  },
  {
    eyebrow: "Compromisso social",
    title: "Participação também é presença concreta nas comunidades",
    description:
      "Sou voluntário no CEIA desde 2004, contribuindo com iniciativas voltadas à educação e ao apoio social.",
    icon: HeartHandshake
  }
]

const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    year: "1990",
    title: "Chegada a Samambaia",
    description: [
      "Passei a viver em Samambaia, onde cresci acompanhando de perto os desafios e as oportunidades de quem constrói a vida no Distrito Federal.",
      "Foi ali que comecei a entender como decisões políticas impactam o cotidiano das pessoas."
    ],
    imageSrc: "/linha-do-tempo/samambaia-1990.jpeg",
    imageAlt: "Registro de Elias Medeiros em Samambaia",
    iconName: "community",
    tags: ["Samambaia", "Brasília"],
    highlight:
      "Foi em Samambaia que comecei a perceber como decisões públicas moldam o cotidiano de quem está longe do centro do poder.",
    mediaLabel: "Samambaia"
  },
  {
    year: "1994",
    title: "Primeira participação política",
    description: [
      "Aos 17 anos, participei da campanha que ajudou a eleger o primeiro deputado distrital eleito pela comunidade de Samambaia.",
      "Foi meu primeiro contato direto com o processo democrático e com o funcionamento das campanhas políticas."
    ],
    imageSrc: "/linha-do-tempo/reuniao-politica.jpeg",
    imageAlt: "Ambiente institucional representando a primeira participação política",
    iconName: "politics",
    tags: ["Campanha", "Participação"],
    highlight:
      "Esse foi o primeiro momento em que a política deixou de ser discurso distante e virou participação prática."
  },
  {
    year: "1998",
    title: "Primeira candidatura",
    description: [
      "Aos 21 anos, fui candidato a Deputado Distrital, participando do debate público e apresentando ideias para o futuro do Distrito Federal.",
      "Essa experiência marcou o início da minha trajetória eleitoral."
    ],
    iconName: "candidacy",
    tags: ["Debate público", "Candidatura"],
    highlight:
      "A candidatura consolidou uma convicção: participar também significa se colocar à prova diante da sociedade."
  },
  {
    year: "1999-2006",
    title: "Experiência no Governo do Distrito Federal",
    description: [
      "Entre 1999 e 2006, atuei em diferentes áreas do Governo do Distrito Federal, participando de equipes responsáveis pela gestão e articulação institucional.",
      "Essa experiência me permitiu compreender de dentro como funciona a administração pública."
    ],
    imageSrc: "/linha-do-tempo/reuniao-politica.jpeg",
    imageAlt: "Reunião institucional representando atuação no Governo do Distrito Federal",
    list: [
      "1999: Administração de Brasília",
      "2000: Subsecretaria de Juventude",
      "2001-2003: Vice-Governadoria",
      "2004-2006: Secretaria de Obras"
    ],
    iconName: "government",
    tags: ["GDF", "Gestão pública", "Articulação"],
    highlight:
      "Conhecer o governo por dentro foi decisivo para entender onde a máquina funciona e onde ela falha.",
    mediaLabel: "GDF",
    variant: "dark"
  },
  {
    year: "2000",
    title: "Empreendedorismo",
    description: [
      "Iniciei minha jornada como empreendedor com a criação da Massimo Participações, atuando nas áreas de tecnologia, software, publicidade e comunicação.",
      "Empreender reforçou uma convicção simples: resultado não aparece por acaso."
    ],
    imageSrc: "/linha-do-tempo/empreendedor-e-desenvolvedor.jpeg",
    imageAlt: "Elias Medeiros em ambiente de empreendedorismo e tecnologia",
    iconName: "business",
    tags: ["Tecnologia", "Empreendedorismo"],
    highlight:
      "Empreender reforçou uma regra simples: sem método, responsabilidade e decisão, resultado não aparece.",
    mediaLabel: "Trabalho"
  },
  {
    year: "2004",
    title: "Trabalho voluntário na educação",
    description: [
      "Desde 2004, atuo como voluntário no CEIA, contribuindo com iniciativas voltadas à educação e ao apoio social.",
      "Esse trabalho reforçou meu compromisso com oportunidades reais para quem mais precisa."
    ],
    iconName: "social",
    tags: ["CEIA", "Educação", "Apoio social"],
    highlight:
      "Participação política sem compromisso social vira abstração. O voluntariado mantém essa conexão com a realidade."
  },
  {
    year: "2007-2014",
    title: "Experiência internacional",
    description: [
      "Vivi em Madrid, na Espanha, onde empreendi na área de tecnologia e comunicação e atuei como editor de revista voltada à comunidade brasileira na Europa.",
      "Foi também nesse período que construí minha família e ampliei minha visão sobre gestão pública, inovação e liberdade econômica."
    ],
    imageSrc: "/linha-do-tempo/emabixador-eslovenia.jpeg",
    imageAlt: "Encontro internacional representando a fase em Madrid",
    iconName: "global",
    tags: ["Madrid", "Europa", "Comunicação"],
    highlight:
      "Viver fora do Brasil ampliou minha visão sobre cidades organizadas, serviços eficientes e liberdade econômica.",
    mediaLabel: "Madrid",
    variant: "dark"
  },
  {
    year: "2015",
    title: "Retorno ao Governo do Distrito Federal",
    description: [
      "Em 2015, voltei a colaborar com o Governo do Distrito Federal, atuando em áreas estratégicas da administração pública.",
      "Essa experiência ampliou minha visão sobre gestão pública e articulação institucional."
    ],
    imageSrc: "/linha-do-tempo/reuniao-politica.jpeg",
    imageAlt: "Reunião institucional representando o retorno ao Governo do DF",
    list: [
      "Secretaria de Relações Institucionais",
      "Casa Civil",
      "Governadoria"
    ],
    iconName: "government",
    tags: ["Retorno", "Estratégia", "GDF"],
    highlight:
      "O retorno ao governo ampliou minha leitura sobre articulação institucional e responsabilidade administrativa.",
    mediaLabel: "Retorno ao GDF"
  },
  {
    year: "2017",
    title: "Novo ciclo político",
    description: [
      "Em 2017, iniciei um novo ciclo na minha trajetória política ao me filiar ao Partido Novo.",
      "Sigo alinhado a princípios como liberdade econômica, responsabilidade fiscal, igualdade perante a lei e valorização de quem trabalha e empreende."
    ],
    iconName: "politics",
    tags: ["Partido Novo", "Princípios"],
    highlight:
      "Mais do que filiação, foi a consolidação de uma visão política orientada por liberdade, responsabilidade e resultado.",
    variant: "dark"
  },
  {
    year: "Hoje",
    title: "Participação e construção",
    description: [
      "Hoje continuo atuando com tecnologia, comunicação e projetos que incentivam a participação cidadã.",
      "Sigo ligado às comunidades que fazem parte da minha história, especialmente Samambaia e Águas Lindas de Goiás."
    ],
    imageSrc: "/linha-do-tempo/empreendedor-e-desenvolvedor.jpeg",
    imageAlt: "Elias Medeiros em ambiente de trabalho representando a atuação atual",
    iconName: "current",
    tags: ["Tecnologia", "Participação cidadã", "Comunidade"],
    highlight:
      "Hoje sigo conectando tecnologia, comunicação e participação para defender uma política que funcione para quem trabalha.",
    mediaLabel: "Atuação atual"
  }
]

function PlaceholderMedia({ label }: { label: string }) {
  return (
    <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-[1.4rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(236,103,28,0.96),rgba(236,103,28,0.78))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_40%)]" />
      <div className="absolute inset-4 rounded-[1.1rem] border border-white/20" />
      <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
          Arquivo visual
        </span>
        <p className="max-w-[16rem] text-lg font-bold leading-tight">{label}</p>
      </div>
    </div>
  )
}

function TimelineMedia({
  imageSrc,
  imageAlt,
  fallbackLabel
}: {
  imageSrc?: string
  imageAlt?: string
  fallbackLabel: string
}) {
  if (!imageSrc) {
    return <PlaceholderMedia label={fallbackLabel} />
  }

  return (
    <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_12px_36px_-24px_rgba(26,38,68,0.18)]">
      <Image
        src={imageSrc}
        alt={imageAlt ?? fallbackLabel}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2644]/18 via-transparent to-transparent" />
    </div>
  )
}

function StoryBlock({
  eyebrow,
  title,
  description,
  icon: Icon,
  imageSrc,
  imageAlt,
  list
}: StoryCard) {
  return (
    <article className="card-premium h-full bg-white p-6 sm:p-7">
      <div className="relative z-10 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5">
        <Icon className="size-6 text-primary" />
      </div>
      <p className="relative z-10 mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h3 className="relative z-10 mt-3 text-2xl font-bold leading-tight text-foreground">
        {title}
      </h3>
      <p className="relative z-10 mt-4 text-base leading-relaxed text-foreground/68">
        {description}
      </p>
      {list ? (
        <ul className="relative z-10 mt-5 space-y-2 text-sm leading-relaxed text-foreground/70">
          {list.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <TimelineMedia
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        fallbackLabel={title}
      />
    </article>
  )
}

const QuemSouPage = () => (
  <>
    <section className="relative overflow-hidden bg-[#0c1425] text-white">
      <Image
        src="/people.jpeg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/95 via-[#0a0f1c]/82 to-[#0a0f1c]/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(236,103,28,0.26),transparent_34%)]" />

      <div
        data-orb
        className="pointer-events-none absolute -left-24 top-20 size-[280px] rounded-full bg-primary/30 blur-[90px]"
        style={{ animation: "orb-float 22s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-orb
        className="pointer-events-none absolute right-0 top-1/3 size-[320px] rounded-full bg-primary/18 blur-[100px]"
        style={{ animation: "orb-float-alt 26s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute left-[8%] top-[22%] size-10 rounded-sm bg-primary/15"
        style={{ animation: "geo-float-1 18s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute bottom-[16%] left-[12%] size-8 bg-primary/15"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-2 20s ease-in-out infinite"
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                Quem sou
              </p>
              <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-white/84 sm:text-xl">
                Há mais de 30 anos participando da vida pública de Brasília.
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[4.35rem]">
                Elias{" "}
                <span className="text-primary drop-shadow-[0_0_24px_rgba(236,103,28,0.28)]">
                  Medeiros
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/78 sm:text-xl">
                Empreendedor, desenvolvedor de aplicações web, jornalista e
                defensor de uma política que funcione para quem trabalha.
              </p>
              <p className="mt-5 text-xl font-semibold italic text-primary sm:text-2xl">
                "Brasília é de quem participa."
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-primary px-8 text-base font-semibold text-white shadow-[--shadow-glow] hover:bg-primary/90">
                  <Link href="/propostas/seguranca">
                    Conheça minhas propostas
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-white/18 bg-white/[0.06] px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/12 hover:text-white">
                  <Link href="/#participar">Participe comigo</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute inset-x-14 bottom-4 z-0 h-16 rounded-full bg-black/35 blur-2xl" />
              <div className="absolute left-0 top-[24%] z-0 size-28 rotate-12 rounded-sm bg-primary/90 sm:size-36">
                <div className="absolute inset-4 rounded-sm bg-[#0c1425]" />
                <div className="absolute inset-10 rounded-sm bg-warm-paper" />
              </div>
              <div
                data-geo
                className="absolute right-4 top-6 z-30 size-14 rounded-sm bg-primary shadow-[--shadow-glow] sm:size-16"
                style={{ animation: "geo-float-3 19s ease-in-out infinite" }}
                aria-hidden="true"
              >
                <div className="grid h-full place-items-center">
                  <span className="size-4 rotate-45 rounded-sm bg-white/85 sm:size-5" />
                </div>
              </div>
              <div
                data-geo
                className="absolute right-[14%] top-[22%] z-10 size-8 rounded-sm bg-white/10"
                style={{ animation: "geo-float-1 17s ease-in-out infinite" }}
                aria-hidden="true"
              />
              <Image
                src="/elias-1.png"
                alt="Retrato de Elias Medeiros"
                width={520}
                height={909}
                className="relative z-20 ml-auto h-auto w-full max-w-[410px] drop-shadow-[0_22px_48px_rgba(0,0,0,0.34)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="dot-pattern relative overflow-hidden bg-warm-paper py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_52%_at_20%_0%,rgba(236,103,28,0.08),transparent)]"
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute right-[7%] top-[18%] size-12 rounded-sm bg-primary/10"
        style={{ animation: "geo-float-3 18s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute left-[6%] top-[34%] size-10 bg-primary/[0.08]"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-2 19s ease-in-out infinite"
        }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute bottom-[10%] right-[14%] size-9 rounded-sm bg-primary/12"
        style={{ animation: "geo-float-1 20s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Quem sou
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Elias <span className="text-primary">Medeiros</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/68">
              <p>
                Meu nome é Elias Medeiros. Tenho 48 anos e construí minha
                trajetória entre empreendedorismo, tecnologia, comunicação e
                serviço público.
              </p>
              <p>
                Sou desenvolvedor de aplicações web, jornalista e empreendedor.
                Desde cedo aprendi que quem quer transformar a própria realidade
                precisa agir.
              </p>
              <p>
                Minha história está profundamente ligada a Brasília. Vivo em
                Samambaia desde 1990 e continuo acompanhando de perto os desafios
                e as oportunidades da nossa região.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90"
                size="lg">
                <Link href="/propostas/seguranca">Conheça minhas propostas</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10">
                <Link href="/#participar">Fazer parte</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="card-premium overflow-hidden bg-white p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.3rem]">
                <Image
                  src="/linha-do-tempo/empreendedor-e-desenvolvedor.jpeg"
                  alt="Elias Medeiros em ambiente de trabalho"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2644]/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {STORY_CARDS.map((card) => (
            <StaggerItem key={card.title}>
              <StoryBlock {...card} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <section className="dot-pattern relative overflow-hidden bg-[#fbf6f1] py-16 sm:py-20">
      <div className="line-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_62%_50%_at_50%_0%,rgba(236,103,28,0.09),transparent)]"
        aria-hidden="true"
      />
      <div
        data-orb
        className="pointer-events-none absolute right-0 top-24 size-[320px] rounded-full bg-primary/10 blur-[100px]"
        style={{ animation: "orb-float 24s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute left-[8%] top-[22%] size-10 rounded-sm bg-primary/12"
        style={{ animation: "geo-float-1 17s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute right-[10%] top-[34%] size-9 bg-primary/[0.1]"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-2 21s ease-in-out infinite"
        }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute bottom-[14%] left-[16%] size-11 rounded-sm bg-primary/[0.08]"
        style={{ animation: "geo-float-3 19s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <MapPin
        className="pointer-events-none absolute left-[3%] top-[18%] hidden size-24 text-primary/[0.08] md:block"
        style={{ animation: "geo-float-1 18s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <BriefcaseBusiness
        className="pointer-events-none absolute right-[5%] top-[48%] hidden size-24 text-primary/[0.07] lg:block"
        style={{ animation: "geo-float-3 20s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <Building2
        className="pointer-events-none absolute bottom-[10%] left-[10%] hidden size-24 text-[#1A2644]/[0.06] lg:block"
        style={{ animation: "geo-float-2 21s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Linha do tempo
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Minha história em movimento
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/68">
            Uma trajetória construída entre comunidade, empreendedorismo,
            administração pública e participação cidadã.
          </p>
        </Reveal>

        <TimelineShowcase entries={TIMELINE_ENTRIES} />
      </div>
    </section>

    <section className="relative overflow-hidden bg-warm-paper py-20 sm:py-24">
      <div
        data-geo
        className="pointer-events-none absolute left-[8%] top-[18%] size-12 rounded-sm bg-primary/10"
        style={{ animation: "geo-float-1 17s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute bottom-[20%] right-[6%] size-10 bg-primary/12"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-2 19s ease-in-out infinite"
        }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="card-premium overflow-hidden bg-white p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.3rem]">
                <Image
                  src="/people.jpeg"
                  alt="Encontro público com participação da comunidade"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2644]/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="accent-bar rounded-[1.75rem] border border-slate-200 bg-white p-8 pl-10 shadow-sm sm:p-10 sm:pl-14">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5">
                <Users className="size-6 text-primary" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Trabalho em equipe
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Nenhuma mudança acontece sozinho.
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/68">
                <p>
                  Grandes projetos nascem quando pessoas comprometidas trabalham
                  juntas, com clareza de propósito e responsabilidade.
                </p>
                <p>
                  Minha trajetória sempre foi construída ao lado de gente séria,
                  preparada e disposta a transformar participação em resultado.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#10192d] py-20 text-white sm:py-24">
      <div
        data-orb
        className="pointer-events-none absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
        style={{ animation: "orb-float-alt 22s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute left-[12%] top-[24%] size-12 rounded-sm bg-primary/14"
        style={{ animation: "geo-float-1 18s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute right-[14%] bottom-[20%] size-10 bg-primary/14"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "geo-float-2 20s ease-in-out infinite"
        }}
        aria-hidden="true"
      />
      <div
        data-geo
        className="pointer-events-none absolute right-[18%] top-[18%] size-8 rounded-sm bg-white/7"
        style={{ animation: "geo-float-3 16s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto px-4">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Valores
          </p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Boa política melhora{" "}
            <span className="text-primary">tudo ao redor.</span>
          </h2>
          <div className="mt-8 space-y-3 text-lg leading-relaxed text-white/74 sm:text-xl">
            <p>Não se trata de discurso.</p>
            <p>Se trata de responsabilidade.</p>
          </div>
          <p className="mt-10 text-xl font-semibold uppercase tracking-[0.16em] text-white sm:text-2xl">
            Brasília é de quem participa.
          </p>
        </Reveal>
      </div>
    </section>
  </>
)

export default QuemSouPage
