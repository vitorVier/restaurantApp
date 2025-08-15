import { Link, useLocation } from "react-router-dom";

import { useProducts } from '../../hoocks/useProducts';
import { ProductCard } from '../../components/ProductCard';
import { useEffect } from "react";

export const Home = () => {
  const { products } = useProducts();
  const location = useLocation();

  // Scroola até a reserva quando a função é chamada em outro componente
  useEffect(() => {
    if (location.hash === "#reserva") {
      setTimeout(() => {
        const element = document.getElementById("reserva");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // espera 300ms para garantir renderização
    }
  }, [location]);

  return (
    <div className="font-sans text-gray-800">
      {/* HERO */}
      <section className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/15352329/pexels-photo-15352329.jpeg')" }}>
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Urban Sabor
        </h1>
        <p className="text-xl md:text-2xl text-yellow-300 mt-4">
          Mundo de sabores, um prato de cada vez
        </p>
        <p className="text-white max-w-2xl mt-6">
          Experimente pratos criados para encantar todos os sentidos – ingredientes frescos,
          receitas únicas e um ambiente que conquista.
        </p>
        <Link
          to='/menu'
          className="mt-8 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition"
        >
          Conheça o Cardápio
        </Link>
      </section>

      {/* CARDÁPIO */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sabores que Conquistam</h2>
          <p className="mb-12 text-gray-600">
            Do risoto cremoso de camarão ao irresistível hambúrguer artesanal, nosso cardápio é feito para surpreender.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">O que dizem nossos clientes</h2>
          <div className="space-y-6">
            <blockquote className="bg-gray-50 p-6 rounded-lg shadow">
              “Simplesmente o melhor risoto que já provei! Atendimento impecável e ambiente aconchegante.”
              <span className="block mt-2 text-yellow-500 font-semibold">– Mariana R.</span>
            </blockquote>
            <blockquote className="bg-gray-50 p-6 rounded-lg shadow">
              “O hambúrguer é sensacional, e os drinks autorais são perfeitos!”
              <span className="block mt-2 text-yellow-500 font-semibold">– Lucas M.</span>
            </blockquote>
            <blockquote className="bg-gray-50 p-6 rounded-lg shadow">
              “O Kedgeree é sensacional, e os drinks extremamente refrescantes!”
              <span className="block mt-2 text-yellow-500 font-semibold">– Lucas M.</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* OFERTA ESPECIAL */}
      <section className="py-20 bg-yellow-400 text-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Promoção de Boas-Vindas</h2>
        <p className="mb-6">Ganhe uma sobremesa especial na sua primeira visita. Oferta válida por tempo limitado.</p>
        <a
          href="#reserva"
          className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition"
        >
          Reservar Agora
        </a>
      </section>

      {/* FORMULÁRIO DE RESERVA */}
      <section id="reserva" className="py-20 bg-gray-100">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Reserve sua mesa agora</h2>
          <p className="mb-8 text-center text-gray-600">
            Garanta sua experiência no Urban Sabor e descubra novos sabores hoje mesmo.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
              required
            />
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition cursor-pointer"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};