import { Outlet } from "react-router-dom";

import NavbarComp from "../components/NavbarComp";
import '../App.css';
import FooterComp from "../components/FooterComp";

export default function RootLayout(){
    return (
        <>
                <NavbarComp />
            <main className="entirePage">
                <Outlet />
            </main>
            <FooterComp />
        </>
    )
}