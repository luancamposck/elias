import { DesburocratizeForm } from "@/components/forms/desburocratize-form"

const DebureaucratizePage = () => (
  <div className="container mx-auto px-4 mt-8 space-y-10">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-yellow-400 tracking-tight">
        <span className="bg-blue-950 px-3 rounded-lg">Desburocratize</span>
      </h1>
      <p className="text-lg sm:text-xl text-blue-950 underline decoration-3 decoration-yellow-400">
        Indique leis federais que atrapalham o Brasil e ajude a construir um
        país mais livre.
      </p>
    </div>

    <div className="rounded-lg shadow-sm bg-blue-950 border border-blue-500/30 text-white mb-12">
      <div className="p-6 text-blue-100 space-y-4">
        <h3 className="font-bold text-lg text-white">
          <span className="text-yellow-400">IMPORTANTE: </span>Leis Estaduais,
          Municipais, Portarias, etc. não são de competência de um Deputado
          Federal.
        </h3>

        <p>
          Desde a Constituição de 1988, o Brasil já emitiu mais de 6 milhões de
          normas, tornando inviável a qualquer cidadão conhecer tudo o que o
          Estado lhe impõe. Muitas dessas normas são desnecessárias, aumentam a
          burocracia e os custos, sem atingir os fins a que se propõem.
        </p>

        <p>
          Pensando nisso, criamos o canal DESBUROCRATIZE, para que você possa
          nos ajudar a identificar algumas dessas normas. A partir daí, podemos
          ver o que é possível fazer: alterar ou revogar.
        </p>

        <p>
          É importante atentar para a competência de um deputado federal, pois
          não adianta enviar normas que são de competência do poder executivo ou
          dos legislativos estaduais e municipais. Também não é o intuito deste
          canal revogar ou alterar legislações complexas que já estão em
          discussão na Câmara dos Deputados, como E-social, Bloco K, entre
          outras.
        </p>

        <p className="font-bold">O partido NOVO quer um país LIVRE e SEGURO!</p>
      </div>
    </div>

    <div className="rounded-lg shadow-sm bg-blue-950 border border-yellow-500/30 text-white mb-12">
      <div className="p-6 text-blue-100 space-y-4">
        <DesburocratizeForm />
      </div>
    </div>

    <div className="mb-10">
      <p className="text-center italic text-xl underline decoration-orange-400">
        "Se você tem dez mil regras, destrói todo o respeito pela lei."
      </p>
      <p className="text-center font-semibold text-xl">- Winston Churchill</p>
    </div>
  </div>
)

export default DebureaucratizePage
