import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function Layout() {
    return (
        <>
            <Header/>
            <div className="min-h-screen">
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}