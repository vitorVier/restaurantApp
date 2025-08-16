import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from '../../assets/logo-without-bg.png';

export function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-zinc-950 text-white flex items-center justify-between px-4 md:px-8 sticky top-0 z-50 shadow-md overflow-hidden">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="h-14 object-contain cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Botão Hamburguer (aparece apenas no mobile) */}
      <button
        className="md:hidden text-white focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Navegação */}
      <nav
        className={`flex flex-col md:flex-row md:items-center md:gap-8 text-lg font-medium fixed md:static top-20 left-0 w-full md:w-auto bg-zinc-950 md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Link
          to="/"
          className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer py-4 md:py-0 text-center"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer py-4 md:py-0 text-center"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer py-4 md:py-0 text-center"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/menu"
          className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer py-4 md:py-0 text-center"
          onClick={() => setMenuOpen(false)}
        >
          Menu
        </Link>

        {/* Carrinho */}
        <Link
          to="/cart"
          className="relative hover:text-yellow-400 transition-colors duration-300 cursor-pointer py-4 md:py-0 text-center flex justify-center"
          aria-label="Carrinho de compras"
          onClick={() => setMenuOpen(false)}
        >
          <FiShoppingCart size={28} />
        </Link>
      </nav>
    </header>
  );
}
