import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from '../../assets/logo-restaurant.png'

export function Header() {
    const navigate = useNavigate()

    return(
    <header className="w-full h-20 bg-zinc-950 text-white flex items-center justify-between px-8 mx-auto sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="h-14 object-contain cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Navegação */}
      <nav className="flex items-center gap-8 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
        >
          Contact
        </Link>
        <Link
          to="/menu"
          className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
        >
          Menu
        </Link>

        {/* Carrinho */}
        <Link
          to="/cart"
          className="relative hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
          aria-label="Carrinho de compras"
        >
          <FiShoppingCart size={28} />
          {/* Se quiser, pode adicionar badge de itens no carrinho aqui */}
        </Link>
      </nav>
    </header>
    )
}
