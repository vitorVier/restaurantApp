import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return(
        <footer className="w-full bg-zinc-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo + direitos */}
        <div className="text-center md:text-left">
          <h3 className="text-yellow-400 font-bold text-xl mb-2">Urban Sabor</h3>
          <p className="text-gray-400 text-sm">
            Todos os direitos reservados © 2025
          </p>
        </div>

        {/* Navegação rápida */}
        <nav className="flex gap-6 text-gray-300 text-sm font-medium">
          <a href="/" className="hover:text-yellow-400 transition">Home</a>
          <a href="/menu" className="hover:text-yellow-400 transition">Menu</a>
          <a href="/about" className="hover:text-yellow-400 transition">About</a>
          <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>

        {/* Redes sociais */}
        <div className="flex gap-5 text-yellow-400 text-xl">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-yellow-300 transition">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-yellow-300 transition">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-yellow-300 transition">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-yellow-300 transition">
            <FaTwitter />
          </a>
        </div>

        {/* Contato rápido */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          <p>📞 (11) 99999-9999</p>
          <p>✉️ contato@urbansabor.com</p>
          <p>📍 Av. Exemplo, 123 - São Paulo/SP</p>
        </div>
      </div>
    </footer>
    )
}