import {
  BarChart3,
  BookOpen,
  CircleDollarSign,
  School,
  ShieldCheck,
  Target,
  TrendingDown
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

const pillars = [
  {
    icon: Target,
    color: "text-orange-500",
    title: "Monitoramento individual do aprendizado",
    items: [
      "Cada aluno acompanhado de perto.",
      "Dificuldades identificadas rapidamente.",
      "Intervenção imediata."
    ]
  },
  {
    icon: BookOpen,
    color: "text-blue-700",
    title: "Formação contínua de professores",
    items: ["Valorização real, capacitação permanente e metas claras."]
  },
  {
    icon: BarChart3,
    color: "text-slate-800",
    title: "Metas públicas por escola",
    items: [
      "Transparência total para pais e sociedade.",
      "Resultados acompanhados em painel público."
    ]
  }
]

const commitments = [
  "Elevar o desempenho da rede pública",
  "Reduzir a evasão escolar",
  "Implantar painel público de acompanhamento",
  "Implementar plano de recuperação para alunos com defasagem"
]

const EducationProposalPage = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src="/main-banner.jpg"
          alt="Elias Medeiros com a comunidade do Distrito Federal"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-900/45" />

        <div className="relative container mx-auto px-4 py-20 sm:py-24 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              O futuro do seu filho não pode esperar.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-100 mb-8">
              O Distrito Federal investe bilhões de reais em educação todos os
              anos. Mas os resultados ainda estão abaixo do esperado.
            </p>

            <Button
              asChild
              className="h-12 bg-orange-500 text-white hover:bg-orange-600 font-bold px-7">
              <a href="#plano-educacao">Conheça o Plano Educação com Gestão</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="plano-educacao" className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-slate-900 flex items-center gap-3">
              <School className="size-8 text-orange-500" />O desafio da educação
              no DF
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <TrendingDown className="size-7 text-orange-500 mb-4" />
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  4,2 no Ensino Médio
                </p>
                <p className="text-slate-600">Meta: 6,0</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <BookOpen className="size-7 text-blue-700 mb-4" />
                <p className="text-xl font-bold text-slate-900 mb-2">
                  Evasão escolar em crescimento
                </p>
                <p className="text-slate-600">
                  Alunos deixam a escola antes de concluir
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <CircleDollarSign className="size-7 text-orange-500 mb-4" />
                <p className="text-xl font-bold text-slate-900 mb-2">
                  Mais de R$ 4,5 bilhões investidos por ano
                </p>
                <p className="text-slate-600">Resultado abaixo da meta</p>
              </div>
            </div>

            <p className="text-xl leading-relaxed font-medium text-slate-800">
              O problema não é falta de recurso. É falta de gestão,
              monitoramento e responsabilidade por resultado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/people.jpeg"
                alt="Comunidade reunida em roda de conversa no Distrito Federal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 to-transparent" />
            </div>

            <div className="text-slate-700 space-y-5 text-lg leading-relaxed">
              <p>
                Uma mãe sai cedo para trabalhar acreditando que a escola pública
                vai garantir o futuro do filho. Um jovem entra na sala de aula
                esperando oportunidades.
              </p>
              <p>Mas quando o sistema falha, quem paga o preço é o aluno.</p>
              <p className="font-semibold text-slate-900">
                Educação de qualidade não é discurso. É compromisso com o
                futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-slate-900 flex items-center gap-3">
              <Target className="size-8 text-orange-500" />O que vamos fazer
              diferente
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {pillars.map(({ icon: Icon, color, title, items }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-sm">
                  <Icon className={`size-6 mb-4 ${color}`} />
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    {items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold text-orange-400">
                Gestão, não ideologia. Resultado, não retórica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Brasília pode ser referência nacional
            </h2>
            <div className="text-lg leading-relaxed text-slate-700 space-y-4">
              <p>
                Experiências bem-sucedidas mostram que é possível melhorar com
                foco em desempenho e monitoramento constante.
              </p>
              <p className="font-medium text-slate-900">
                O DF tem recursos. Falta transformar investimento em resultado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50 border-b border-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
              Compromissos públicos
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {commitments.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-slate-800">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-slate-900">
              Compromisso público. Meta acompanhada. Resultado entregue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <ShieldCheck className="size-8 text-orange-500" />
              Fiscalização e Transparência
            </h2>
            <div className="text-lg leading-relaxed text-slate-700 space-y-4">
              <p>
                Como deputado federal, a missão é garantir que os recursos
                destinados à educação sejam aplicados com eficiência e
                responsabilidade.
              </p>
              <p className="font-medium text-slate-900">
                Educação forte melhora tudo ao redor: segurança, emprego, renda
                e oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Educação forte muda tudo ao redor.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                className="h-11 bg-orange-500 text-white hover:bg-orange-600 font-bold px-8">
                <a
                  href="https://app.eliasmedeiros.bsb.br"
                  target="_blank"
                  rel="noopener noreferrer">
                  Apoiar essa proposta
                </a>
              </Button>
              <Button className="h-11 border border-orange-300 text-orange-300 hover:bg-orange-500 hover:text-white font-bold px-8">
                Compartilhar
              </Button>
            </div>
            <p className="text-lg text-slate-200">
              Você participa. Eu represento.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EducationProposalPage
