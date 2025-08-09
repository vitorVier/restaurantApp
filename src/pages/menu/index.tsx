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
        <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-8">Cardápio do Dia</h1>
              
              {/* Destaques */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Destaques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.slice(0, 3).map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                    />
                  ))}
                </div>
              </section>
        
              {/* Todos os produtos */}
              <section>
                <h2 className="text-2xl font-semibold mb-6">Nosso Cardápio Completo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
        </div>
    )
}