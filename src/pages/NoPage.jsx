import FooterComp from "../components/FooterComp";
import NavbarComp from "../components/NavbarComp";
import '../App.css';

export default function NoPage(){
    <>
        <div className="entirePage">
            <NavbarComp />
        </div>
        <h1>Could not find resource or page.</h1>
        <FooterComp />
    </>
}