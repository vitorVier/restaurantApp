import logo from '../../assets/logo-restaurant.png'

export function About() {
  return (
    <div className="bg-zinc-900 min-h-screen py-16 text-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Cabeçalho */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">
            Sobre Nosso Restaurante
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Tradição e sabor autêntico desde 1995
          </p>
        </header>

        {/* História */}
        <section className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <img 
              src={logo} 
              alt="Interior do restaurante" 
              className="rounded-xl shadow-2xl w-full h-auto border-4 border-yellow-400"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-yellow-400">
              Nossa História
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Fundado pelo Chef Antonio Moretti, nosso restaurante começou como uma pequena trattoria no centro da cidade. 
              Com receitas passadas de geração em geração, transformamos simples ingredientes em experiências memoráveis.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hoje, mantemos viva a tradição da cozinha italiana autêntica, combinada com técnicas contemporâneas e 
              ingredientes locais selecionados a mão.
            </p>
          </div>
        </section>

        {/* Especialidades */}
        <section className="bg-zinc-800 p-10 rounded-2xl shadow-xl mb-20">
          <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
            Nossas Especialidades
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { emoji: '🍕', title: 'Pizzas Artesanais', desc: 'Massa fermentada 48h, assada em forno a lenha' },
              { emoji: '🍝', title: 'Massas Frescas', desc: 'Preparadas diariamente com ovos caipiras' },
              { emoji: '🍷', title: 'Vinhos Selecionados', desc: 'Adega com mais de 200 rótulos nacionais e importados' }
            ].map(({emoji, title, desc}) => (
              <div key={title} className="text-center text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-default">
                <div className="text-6xl mb-5">{emoji}</div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipe */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10">
            Nossa Equipe
          </h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {[
              { name: 'Antonio Moretti', role: 'Chef Executivo', emoji: '👨‍🍳' },
              { name: 'Maria Silva', role: 'Gerente de Atendimento', emoji: '👩‍💼' },
              { name: 'Lucas Almeida', role: 'Sommelier', emoji: '🍷' },
            ].map(({name, role, emoji}) => (
              <div key={name} className="max-w-xs p-6 bg-zinc-800 rounded-xl shadow-lg hover:shadow-yellow-400 transition-shadow cursor-default">
                <div className="text-8xl mb-4">{emoji}</div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-1">{name}</h4>
                <p className="text-gray-300">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <button
            className="bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-semibold py-4 px-12 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-500 cursor-pointer"
          >
            Faça sua reserva
          </button>
        </div>
      </div>
    </div>
  );
}