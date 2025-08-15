import { useDispatch } from 'react-redux';
import { addItemCart } from '../../store/slices/slice.ts';
import type { ProductProps } from '../../services/api.ts';

export const ProductCard = ({ product }: { product: ProductProps }) => {
  const dispatch = useDispatch()

  function handleAddCartItem(product: ProductProps) {
    //@ts-ignore
    dispatch(addItemCart(product))
  }

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-none">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold">R$ {product.price.toFixed(2)}</span>
          <button 
            className="bg-yellow-400 text-gray-900 font-medium px-4 py-2 rounded cursor-pointer hover:bg-yellow-300"
            onClick={() => handleAddCartItem(product)}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};