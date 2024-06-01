import style from './pagesCSS/WhatIsQuarum.module.css';
import projectNews from '../images/projectNews.jpeg';
import { homePageContent } from '../data/textContext';

export default function ProjectNews(){
    return <div className={style.mainContainer}>
        <h1>Project News</h1>
        <div className={style.alignCenter}>
            <img src={projectNews}></img>
        </div>
        <p>{homePageContent.projectInfo}</p>
    </div>
}