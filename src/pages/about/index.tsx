import logo from '../../assets/logo-restaurant.png'

export function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Seção de Cabeçalho */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-skate-900 mb-4">
            Sobre Nosso Restaurante
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tradição e sabor autêntico desde 1995
          </p>
        </header>

        {/* Seção História */}
        <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2">
            <img 
              src={logo} 
              alt="Interior do restaurante" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossa História
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Fundado pelo Chef Antonio Moretti, nosso restaurante começou como uma pequena trattoria no centro da cidade. 
              Com receitas passadas de geração em geração, transformamos simples ingredientes em experiências memoráveis.
            </p>
            <p className="text-lg text-gray-600">
              Hoje, mantemos viva a tradição da cozinha italiana autêntica, combinada com técnicas contemporâneas e 
              ingredientes locais selecionados a mão.
            </p>
          </div>
        </section>

        {/* Seção Especialidades */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Nossas Especialidades
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🍕</div>
              <h3 className="text-xl font-bold mb-2">Pizzas Artesanais</h3>
              <p className="text-gray-800">
                Massa fermentada 48h, assada em forno a lenha
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🍝</div>
              <h3 className="text-xl font-bold mb-2">Massas Frescas</h3>
              <p className="text-gray-800">
                Preparadas diariamente com ovos caipiras
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🍷</div>
                <h3 className="text-xl font-bold mb-2">Vinhos Selecionados</h3>
                <p className="text-gray-800">
                  Adega com mais de 200 rótulos nacionais e importados
                </p>
            </div>
          </div>
        </section>

        {/* Chamada para Ação */}
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Faça sua reserva
          </button>
        </div>
      </div>
    </div>
  );
}