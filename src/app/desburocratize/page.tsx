import { ShieldAlert, ShieldCheck } from "lucide-react"

import { StreamlineForm } from "@/components/forms/streamline-form"

const StreamlinePage = () => (
  <div className="container mx-auto px-4 mt-8 space-y-10">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-primary tracking-tight">
        <span className="bg-blue-950 px-3 rounded-lg">Desburocratize!</span>
      </h1>
      <p className="text-md sm:text-xl text-foreground font-semibold">
        Se a lei não protege o cidadão, ela precisa mudar. O partido NOVO quer
        um país LIVRE e SEGURO!
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="rounded-lg shadow-sm bg-red-900/20 border border-red-500/30 p-8">
        <div className="flex items-center gap-3 mb-4">
          <ShieldAlert className="size-8 text-red-400" />
          <h2 className="text-2xl font-bold text-red-800">O Problema</h2>
        </div>
        <ul className="space-y-3 text-lg text-red-800 list-disc list-inside">
          <li>6 milhões de normas.</li>
          <li>O cidadão não consegue acompanhar.</li>
          <li>O pequeno empreendedor paga o preço.</li>
        </ul>
      </div>
      <div className="rounded-lg shadow-sm bg-green-900/20 border border-green-500/30 p-8">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="size-8 text-green-400" />
          <h2 className="text-2xl font-bold text-green-800">A Solução</h2>
        </div>
        <ul className="space-y-3 text-lg text-green-800 list-disc list-inside">
          <li>Revisão de leis federais inúteis.</li>
          <li>Simplificação real.</li>
          <li>Foco em impacto econômico.</li>
        </ul>
      </div>
    </div>

    <div className="rounded-lg shadow-sm bg-blue-950 border border-primary/30 text-white mb-12">
      <div className="p-6 text-blue-100 space-y-4">
        <div className="bg-primary/20 border border-primary/50 p-4 rounded-lg">
          <p className="font-semibold text-primary">
            IMPORTANTE: Leis Estaduais, Municipais, Portarias, etc. não são de
            competência de um Deputado Federal.
          </p>
        </div>
        <StreamlineForm />
      </div>
    </div>

    <div className="mb-10">
      <p className="text-center italic text-xl underline decoration-primary">
        "Se você tem dez mil regras, destrói todo o respeito pela lei."
      </p>
      <p className="text-center font-semibold text-xl">- Winston Churchill</p>
    </div>
  </div>
)

export default StreamlinePage
