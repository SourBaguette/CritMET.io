import { Link } from 'react-router-dom';
import logo from '../images/critMET-logo.png';
import style from './FooterComp.module.css';

export default function FooterComp() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={style.footerContainer}>
            <div className={style.mainContainer}>
                <div className={style.logoSpace}>
                    <img style={{height:30, width:30, marginRight:5 }} src={logo} /><p style={{fontSize:25}}>CritMET</p>
                </div>
                <div className={style.otherSpace}>
                    <Link to="/Contact" className={style.contact}>Contact</Link>
                </div>
            </div>
            <div className={style.copyright}>
                <h5>&copy;{currentYear} CritMET</h5>
            </div>
        </div>

    );
}