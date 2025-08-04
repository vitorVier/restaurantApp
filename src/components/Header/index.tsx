import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from '../../assets/logo-restaurant.png'

export function Header() {
    const navigate = useNavigate()

    return(
        <header className="w-full h-25 flex items-center justify-between px-5 mx-auto bg-zinc-900 text-white">
            <img 
                src={logo} 
                alt="logo" 
                className="h-[70%] object-contain cursor-pointer" 
                onClick={() => navigate("/")}
            />

            <nav className="flex gap-3">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/menu">Menu</Link>
                
                <Link to="/cart">
                    <FiShoppingCart size={24} color="#FEFEFE"></FiShoppingCart>
                </Link>
            </nav>
        </header>
    )
}