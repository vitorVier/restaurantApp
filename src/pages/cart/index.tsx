import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks.ts';
import { addItemCart, removeItemCart, totalCart } from '../../store/slices/slice.ts';
import type { ProductProps } from '../../services/api.ts';

export function Cart() {
    const cart = useAppSelector((state) => state.cart.cart);
    const total = useAppSelector(totalCart);
    const dispatch = useDispatch();

    function handleAddProductAmount(item: ProductProps) {
        //@ts-ignore
        dispatch(addItemCart(item));
    }

    function handleRemoveProductAmount(item: ProductProps) {
        //@ts-ignore
        dispatch(removeItemCart(item));
    }

    return(
        <div className="w-full max-w-7xl mx-auto px-4 py-10">
            <h1 className="font-bold text-3xl text-center mb-10">🛒 Meu Carrinho</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Seu carrinho está vazio</p>
            ) : (
                <ul className="flex flex-col gap-6">
                {cart.map((item) => (
                    <li
                        key={item.id}
                        className="w-full flex flex-wrap md:flex-nowrap items-center justify-between bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
                    >
                        {/* Imagem */}
                        <picture>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-45 h-28 object-cover rounded-md border border-gray-200"
                            />
                        </picture>

                        <div className="flex flex-1 items-center justify-between min-w-0 ml-4">
                            <h2
                                className="font-medium text-lg text-gray-800 truncate max-w-xs"
                                title={item.title}
                            >
                                {item.title}
                            </h2>

                            <div className="flex items-center gap-8 ml-4 min-w-[220px] justify-end">
                            {/* Controles quantidade */}
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={() => handleRemoveProductAmount(item)} 
                                    className="px-3 py-1 rounded-md bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-300 transition cursor-pointer"
                                >
                                –
                                </button>

                                <span className="font-medium text-gray-700">{item.amount}</span>
                                
                                <button
                                    onClick={() => handleAddProductAmount(item)}
                                    className="px-3 py-1 rounded-md bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-300 transition cursor-pointer"
                                >
                                +
                                </button>
                            </div>

                            {/* Preço */}
                            <strong className="text-lg text-gray-900 whitespace-nowrap">
                                {item.subTotal.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                                })}
                            </strong>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            )}

            {/* Total */}
            {cart.length !== 0 && (
                <div className="mt-8 flex justify-between items-center border-t pt-4">
                    <p className="font-bold text-xl">Total:</p>
                    <p className="font-bold text-xl text-gray-900">
                        {total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </p>
                </div>
            )}
        </div>
    )
}