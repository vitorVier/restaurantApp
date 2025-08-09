import { useAppSelector } from '../../store/hooks.ts';

export function Cart() {
    const cart = useAppSelector((state) => state.cart.cart);

    return(
        <div className="w-full max-w-7xl mx-auto px-4">
            <h1 className="font-medium text-2xl text-center my-10">Meu carrinho</h1>

            {cart.length === 0 ? (
                <p>Carrinho Vazio</p>
            ) : (
                <ul className='flex flex-col gap-5'>
                    {cart.map((item) => (
                        <li key={item.id} className='w-full h-30 flex items-center justify-between px-10 rounded-md shadow-md hover:shadow-md hover:shadow-stone-400 transition-shadow border-none'>
                            <picture>
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className='w-40 h-25 object-cover rounded-md'
                                />
                            </picture>

                            <h2 className='max-w-20'>
                                {item.title}
                            </h2>

                            <div className='flex gap-5 items-center'>
                                <button className='px-3.5 py-1 rounded-md bg-gray-200 hover:bg-red-300 hover:font-medium cursor-pointer'> 
                                    - 
                                </button>
                                
                                <span>0</span>
                                
                                <button className='px-3.5 py-1 rounded-md bg-gray-200 hover:bg-blue-300 hover:font-medium cursor-pointer'>
                                    + 
                                </button>
                            </div>

                            <strong>
                                {item.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}
                            </strong>
                        </li>
                    ))}
                </ul>
            )}

            {cart.length !== 0 && (
                <p className="font-bold mt-4">Total: </p>
            )}
        </div>
    )
}