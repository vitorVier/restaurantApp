import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from '../../assets/logo-restaurant.png'

export function Header() {
    const navigate = useNavigate()

    return(
        <header className="text-xl w-full h-25 text-1xl flex items-center justify-between px-8 mx-auto bg-zinc-900 text-white">
            <img 
                src={logo} 
                alt="logo" 
                className="h-[70%] object-contain cursor-pointer" 
                onClick={() => navigate("/")}
            />

            <nav className="flex gap-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/menu">Menu</Link>
                
                <Link to="/cart">
                    <FiShoppingCart size={26} color="#FEFEFE"></FiShoppingCart>
                </Link>
            </nav>
        </header>
    )
}
