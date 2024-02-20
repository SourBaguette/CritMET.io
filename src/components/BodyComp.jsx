import { homePageContent } from "../data/textContext";
import CardComp from "./CardComp";
import researchImage from "../images/research1.jpeg";
import style from "./BodyComp.module.css";
import Button from "../util/Button";
import mountain1 from "../images/mountain1.jpeg";
import mountain2 from "../images/mountain2.jpeg";
import externalLink from '../images/icons/external-link.svg';

export default function BodyComp() {
  return (
    <div className={style.researchWrapper}>
      <div className={style.quarumInfo}>
        <div className={style.quarumInfoImage}>
          <img src={mountain1} className={style.researchWrapperImage}/>
        </div>
        <div className={style.quarumInfoBrief}>
          <p className={style.fontHeading}><a href="" className={style.link}>What is QuARUm <img src={externalLink} className={style.externalLink}/></a></p>
          <p className={style.fontContent}>
            QuARUm is the German acronym for “Quality Assessment of Analytical
            Data in Resource and Environmental Research” (Qualitätsbewertung von
            Analytikdaten in der Ressourcen- und Umweltforschung). QuARUm is a
            multidisciplinary research project in cooperation with the Software
            Engineering research group at TU Dortmund. It started in 2023.
          </p>
        </div>
      </div>
      <div className={style.projectInfo}>
        <div className={style.projectInfoBrief}>
          <p className={style.fontHeading}><a href="" className={style.link}>How it started? <img src={externalLink} className={style.externalLink}/></a></p>
          <p className={style.fontContent}>
            QuARUm has started, and we are working on the first prototypes.
            During the next years, we will develop and publish software tools
            that support researchers in evaluating their analytical data. In
            geoscientific case studies, we will demonstrate the function of our
            software. 
          </p>
        </div>
        <div className={style.projectInfoImage}>
          <img src={mountain2} className={style.researchWrapperImage}/>
        </div>
      </div>
      <div className={style.researchCards}>
        <div className={style.title}>
          <h1>Research</h1>
          <Button name="View all" link="https://www.youtube.com/" />
        </div>
        <div className={style.cardContainer}>
          <CardComp
            image={researchImage}
            title="Latest Research Findings Across Various Fields"
            publishedDate="Feb 13, 2024"
            link="https://www.youtube.com/"
          />
          <CardComp
            image={researchImage}
            title="Latest Research Findings Across Various Fields"
            publishedDate="Feb 13, 2024"
            link="https://www.youtube.com/"
          />
          <CardComp
            image={researchImage}
            title="Latest Research Findings Across Various Fields"
            publishedDate="Feb 13, 2024"
            link="https://www.youtube.com/"
          />
        </div>
      </div>
      <div className={style.eventCards}>
        <div className={style.title}>
          <h1>Upcoming Events</h1>
          <Button name="View all" link="https://www.youtube.com/" />
        </div>
        <div className={style.cardContainer}>
          <CardComp
            image={researchImage}
            title="Latest Research Findings Across Various Fields"
            publishedDate=""
            link="https://www.youtube.com/"
            eventDate="Jan 11th, 2024 12:30-14:00"
            location="Online event"
          />
          <CardComp
            image={researchImage}
            title="Latest Research Findings Across Various Fields"
            publishedDate=""
            link="https://www.youtube.com/"
            eventDate="Jan 11th, 2024 12:30-14:00"
            location="Online event"
          />
          <CardComp
            image={researchImage}
            title="Latest Research Findings Across Various Fields"
            publishedDate=""
            link="https://www.youtube.com/"
            eventDate="Jan 11th, 2024 12:30-14:00"
            location="Online event"
          />
        </div>
      </div>
    </div>
  );
}
