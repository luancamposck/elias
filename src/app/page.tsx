import { ArrowRight, Heart, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { CTAFooter } from "@/components/proposal-page"
import { Button } from "@/components/ui/button"
import { PROPOSALS } from "@/lib/constants"

const Home = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center text-white">
        {/* Imagem de fundo */}
        <Image
          src="/main-banner.jpg"
          alt="Banner Elias Medeiros"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay escuro */}
        <div className="bg-black/70 absolute inset-0 z-0"></div>

        {/* Conteúdo */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-lg">
                Quem é Elias Medeiros
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-yellow-400 mb-8 font-bold drop-shadow-md">
                Eu por ti, nós por Brasília
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="h-10 bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-lg sm:text-xl px-8 py-4 sm:px-12 sm:py-6 shadow-lg">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section "Sou através de você" */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-20 left-10 size-32 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 size-40 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-64 bg-yellow-400 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="transition-all duration-1000 transform opacity-100 translate-y-0">
                <span className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-gray-900 block leading-tight">
                  Sou
                </span>
              </div>
              <div className="flex justify-center my-8 transition-all duration-1000 delay-300 opacity-100 scale-100">
                <div className="relative">
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-500 rounded-full" />
                  <Heart className="absolute -top-2 left-1/2 transform -translate-x-1/2 size-5 text-red-500 animate-pulse" />
                </div>
              </div>
              <div className="transition-all duration-1000 delay-600 transform opacity-100 translate-y-0">
                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-700 italic block leading-tight">
                  através de{" "}
                  <span className="relative inline-block group cursor-pointer">
                    <span className="text-orange-500 font-semibold relative z-10 transition-all duration-300 group-hover:text-orange-600">
                      você
                    </span>
                    <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20 rounded"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded"></span>
                  </span>
                </span>
              </div>
            </div>

            <div className="transition-all duration-1000 delay-1000 transform opacity-100 translate-y-0">
              <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                Porque representar é existir através de quem confia em mim.
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-1000 delay-1200 transform opacity-100 translate-y-0">
              <div className="flex items-center gap-3 text-gray-700 group cursor-pointer hover:text-orange-500 transition-colors duration-300">
                <Users className="size-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Sua voz</span>
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center animate-pulse">
                <div className="size-3 rounded-full bg-white"></div>
              </div>
              <div className="flex items-center gap-3 text-gray-700 group cursor-pointer hover:text-blue-500 transition-colors duration-300">
                <span className="font-medium">Minha representação</span>
                <Heart className="size-6 group-hover:scale-110 transition-transform duration-300 text-red-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 size-2 bg-orange-400 rounded-full animate-ping opacity-40" />
          <div className="absolute top-3/4 right-1/4 size-3 bg-blue-400 rounded-full animate-ping opacity-40 animation-delay-1000" />
          <div className="absolute top-1/2 right-1/3 size-2 bg-yellow-400 rounded-full animate-ping opacity-40 animation-delay-2000" />
        </div>
      </section>

      {/* Section Propostas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Minhas Propostas para Brasília
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
            Como deputado federal, vou trabalhar para trazer recursos e
            fiscalizar investimentos em áreas essenciais
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPOSALS.map(({ icon: Icon, ...proposal }) => {
              return (
                <Link key={proposal.href} href={proposal.href}>
                  <div className="rounded-lg border text-card-foreground bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500 h-full">
                    <div className="p-6 sm:p-8">
                      <Icon className="size-12 sm:size-16 text-orange-500 mb-6" />
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                        {proposal.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 mb-6">
                        {proposal.description}
                      </p>
                      <div className="flex items-center text-orange-500 font-semibold">
                        Ver propostas
                        <ArrowRight className="size-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      <CTAFooter
        className="mb-16 sm:mb-20 max-w-2xl mx-auto"
        message="Juntos podemos transformar Brasília. Sua participação faz a diferença."
      />
    </>
  )
}

export default Home
