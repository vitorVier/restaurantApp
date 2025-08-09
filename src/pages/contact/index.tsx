export function Contact() {
  return(
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Entre em Contato</h2>
        <p className="text-center text-gray-600 mb-12">
          Tem alguma dúvida, quer fazer um pedido especial ou reservar sua mesa?
          Fale com a gente!
        </p>

        {/* Informações */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">📞 Telefone</h3>
            <p className="text-gray-600">(11) 99999-9999</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📧 E-mail</h3>
            <p className="text-gray-600">contato@urbansabor.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📍 Endereço</h3>
            <p className="text-gray-600">Av. Exemplo, 123 – Centro, São Paulo/SP</p>
          </div>
        </div>

        {/* Formulário + Mapa */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulário */}
          <form className="space-y-4 bg-gray-50 p-6 rounded-lg shadow">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
              required
            />
            <textarea
              placeholder="Sua mensagem"
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>

          {/* Mapa Google */}
          <div className="rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.382016982278!2d-46.63330928447721!3d-23.555771984685474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c11f94d4f7%3A0xf1a536a2a1e40e97!2sAv.%20Paulista%2C%20123%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-000!5e0!3m2!1spt-BR!2sbr!4v1672765432100!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}