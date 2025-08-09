import { useProducts } from '../../hoocks/useProducts';
import { ProductCard } from '../../components/ProductCard';

export function Menu() {
    const { products, loading, error } = useProducts();
    
    if (loading) {
        return <div className="text-center py-8">Carregando produtos...</div>;
    }
    
    if (error) {
        return <div className="text-center py-8 text-red-500">{error}</div>;
    }

    return(
      <div className="container mx-auto px-4 py-12">
      {/* Título Principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Nosso Cardápio
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Explore nossos pratos preparados com ingredientes frescos e muito sabor.
        Dos clássicos aos autorais, cada receita é feita para encantar seu paladar.
      </p>

      {/* Destaques */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          ⭐ Destaques do Dia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-12"></div>

      {/* Todos os produtos */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          📜 Cardápio Completo
        </h2>
        {products.length === 0 ? (
          <p className="text-gray-500">Nenhum produto disponível no momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="transition-transform duration-300 hover:scale-105"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}