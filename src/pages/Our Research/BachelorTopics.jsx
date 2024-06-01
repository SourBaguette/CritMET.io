import style from "./BachelorTopics.module.css";
import pramudita from "../../images/personalImages/PramuditaBhattarai.jpg";
import stefan from "../../images/personalImages/StefanMicu.jpeg";

export default function BachelorTopics() {
  return (
    <>
      <div className={style.main}>
        {/* Pramudita Bhattarai */}
        <div className={style.projectContainer}>
          <div className={style.projectDetails}>
            <h2 className={style.projectHeading}>
              Partitioning of Trace Elements Between Biogenic Hydromagnesite and
              Ambient Lake Water at Alkaline Lake Salda, Türkiye
            </h2>
            <h6 className={style.projectAuthor}>Pramudita Bhattarai, 2024</h6>
            <p>
              Lake Salda, an alkaline closed lake in SW Türkiye, attracts
              substantial scientific interest as a potential terrestrial
              analogue of Jezero Crater on Mars. Moreover, microbialites are
              commonly used as archives for geochemical proxies that may shed
              light on the chemical evolution of the atmosphere, oceans and
              ecosystems on Early Earth. In this B.Sc. thesis, major and trace
              element data are determined for hydromagnesite of recent and
              fossil microbialites from Lake Salda to evaluate the partitioning
              behaviour and potential fractionation of trace elements between
              the microbialites and ambient alkaline water.
            </p>
          </div>
          <div className={style.image}>
            <img src={pramudita} className={style.profileImage} />
          </div>
        </div>
        <div className={style.projectContainer}></div>
        <div className={style.spaceBetween}></div>
        {/* Stefan Micu */}
        <div className={style.projectContainer}>
          <div className={style.projectDetails}>
            <h2 className={style.projectHeading}>
              Rare Earth Elements and Yttrium in the Lower Reaches of the Danube
              River in Romania
            </h2>
            <h6 className={style.projectAuthor}>Stefan-Andrei Micu, 2024</h6>
            <p>
              Gathering a better understanding of the geochemical behaviour of
              Rare Earth Elements and Yttrium (REY) in river systems is of
              considerable interest, especially because of their importance as
              critical materials for various high-tech industries and because of
              abundant (micro)contamination of surface waters with anthropogenic
              gadolinium. This B.Sc. project is focused on determining REY
              patterns in samples collected from the Romanian part of the lower
              reaches of the Danube River and its main tributaries. Besides
              complementing existing data sets for the river's upper reaches,
              the new data will allow a better understanding of the geogenic and
              anthropogenic REY inventory of riverine input that reaches the
              Black Sea.
            </p>
          </div>
          <div className={style.image}>
            <img src={stefan} className={style.profileImage} />
          </div>
        </div>
        <div className={style.projectContainer}></div>
      </div>
    </>
  );
}
