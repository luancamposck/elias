import { Shield, TriangleAlert } from "lucide-react"

import { ReportForm } from "@/components/forms/report-form"

const DebureaucratizePage = () => (
  <div className="container mx-auto px-4 mt-8 space-y-10">
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-red-400 tracking-tight">
        <span className="bg-blue-950 px-3 rounded-lg">Denuncie</span>
      </h1>
      <p className="text-lg sm:text-xl text-blue-950 font-semibold">
        O dinheiro é seu. Fiscalizar é dever.
      </p>
    </div>

    <div className="bg-gray-900 rounded-lg">
      <div className="rounded-lg shadow-sm bg-red-900/20 border border-red-500/30 text-white mb-12">
        <div className="p-6 text-blue-100 space-y-4">
          <h3 className="font-bold text-lg text-white flex items-center gap-2">
            <TriangleAlert className="size-8 text-red-400" />
            Se tem dinheiro público sendo usado de forma ilegal, não se cale.
          </h3>

          <p>
            "Fiscalizar o uso dos recursos federais é obrigação de todos e um
            dos mais importantes compromissos do meu mandato. Este canal serve
            para ampliar o alcance dessa fiscalização, permitindo que o cidadão
            participe ativamente."
          </p>

          <p className="font-bold text-yellow-300">
            O partido NOVO quer um país AUSTERO e COMPROMETIDO com o
            crescimento!
          </p>

          <div className="bg-yellow-900/30 border border-yellow-500/50 p-4 rounded-lg mt-4">
            <p className="font-semibold text-yellow-200">
              OBS: É importante se atentar para a origem do recurso — verifique
              se é realmente federal.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-lg shadow-sm bg-blue-950 border border-yellow-500/30 text-white mb-12 max-w-2xl mx-auto">
      <div className="p-6 text-blue-100 space-y-4">
        <ReportForm />
      </div>
    </div>

    <div className="mb-10 mx-auto bg-blue-950 max-w-2xl border border-blue-500/50 rounded-lg p-6">
      <Shield className="size-12 mx-auto text-blue-400" />
      <p className="text-blue-100 text-center italic text-xl">
        "Fiscalizar a utilização do dinheiro do pagador de impostos é obrigação
        de todos nós."
      </p>
    </div>
  </div>
)

export default DebureaucratizePage
