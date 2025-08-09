export function NotFound() {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <div className="text-center max-w-md">
        {/* Ícone/Título */}
        <div className="mb-8">
          <span className="text-6xl">🍽️</span>
          <h1 className="text-5xl font-bold text-gray-900 mt-4">404</h1>
        </div>

        {/* Mensagem */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Ops! A página que você está procurando não existe ou foi removida.
        </p>

        {/* Ação */}
        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Voltar para a Página Inicial
          </a>
          <p className="text-sm text-gray-500">
            Ou <a href="/cardapio" className="text-blue-500 hover:underline">veja nosso cardápio</a>
          </p>
        </div>

        {/* Divertimento temático */}
        <div className="mt-12 text-gray-400">
          <p className="text-sm">"Um prato que não está no menu..."</p>
        </div>
      </div>
    </div>
    )
}