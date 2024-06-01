import quARUm from '../images/quARUm.jpeg'
import { homePageContent } from '../data/textContext.js';
import style from '../pages/pagesCSS/WhatIsQuarum.module.css';
import EU from '../images/logos/EU-logo.jpeg';
import BMBF from '../images/logos/BMBF-logo.jpeg';

export default function WhatIsQuarum(){
    return <div className={style.mainContainer}>
        <h1>What is QuARUm?</h1>
        <div className={style.alignCenter}>
            <img src={quARUm}></img>
        </div>
        <p>{homePageContent.quarumInfo}</p>
        <h1>
            Funded By
        </h1>
        <div className={style.logos}>
            <img src={EU} />
            <img src={BMBF} />
        </div>
    </div>
}