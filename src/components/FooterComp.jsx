import logo from '../images/earth.png';
import './FooterComp.css';

export default function FooterComp() {
    return (
        <div className="footerContainer">
            <div className="mainContainer">
                <div className="logoSpace">
                    <img style={{height:30, width:30, marginRight:5 }} src={logo} /><p style={{fontSize:25}}>CritMET</p>
                </div>
                <div className="otherSpace">
                    <p href="/About">About</p>
                    <p>Privacy</p>
                    <p>Licensing</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="copyright">
                <h5>&copy;2023 CritMET</h5>
            </div>
        </div>

    );
}