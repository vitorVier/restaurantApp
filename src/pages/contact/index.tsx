export function Contact() {
    return(
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Fale Conosco</h1>
        
        {/* Informações de Contato */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nossos Contatos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-md shadow-md hover:shadow-md hover:shadow-stone-400 transition-shadow border-none p-6 cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="text-gray-700">Rua Exemplo, 123 - Centro</p>
              <p className="text-gray-700">São Paulo/SP</p>
            </div>
            
            <div className="rounded-md shadow-md hover:shadow-md hover:shadow-stone-400 transition-shadow border-none p-6 cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-gray-700">(11) 1234-5678</p>
              <p className="text-gray-700">(11) 98765-4321</p>
            </div>
            
            <div className="rounded-md shadow-md hover:shadow-md hover:shadow-stone-400 transition-shadow border-none p-6 cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Horário</h3>
              <p className="text-gray-700">Terça a Domingo</p>
              <p className="text-gray-700">18h às 23h</p>
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h2>
          <form className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>
    </div>
    )
}