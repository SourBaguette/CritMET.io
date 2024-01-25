import './ResearchComp.css';
// import research1 from '../images/research1.jpeg';
// import research2 from '../images/research2.jpeg';

// export default function ResearchComp() {
//     return (
//         <div className='researchWrapper'>
//             <div className="researchHeading">
//                 <h1>What is QuARUm?</h1>
//             </div>
//             <div className='researchBody'>
//                 <p style={{ fontSize: '25px' }}>02.01.2021 – First geochemical data for Antarctic banded iron formation published in Gondwana Research</p>
//                 <div className='researchBody1'>
//                     <div className='image1'>
//                         <img src={research1} alt="" />
//                     </div>
//                     <div className='para1'>
//                         <p>
//                             Micro drill cores were taken from adjacent magnetite/haematite and metachert bands from the 2.5 Ga old Mt. Ruker BIF, Prince Charles Mountains, East Antarctica. Low concentrations of Al, Zr, Hf, and Sc reveal the purity of the samples. The chemical composition matches closely that of other early Precambrian BIF,  except for an enrichment of Ni, and high Ba/Sr ratios in the metachert. Shale-normalized Rare Earths and Yttrium (REYSN) patterns show all the features of modern seawater such as depletion of light vs heavy REY, positive anomalies of LaSN, EuSN, GdSN, and YSN (i.e. super-chondritic Y/Ho ratios) and the W-type lanthanide tetrad effect (LTE), but no CeSN anomalies (and no positive Eu anomalies in chondrite-normalized REY patterns). This distribution is fully compatible with that of other pure Early Precambrian BIFs, suggesting high-temperature hydrothermal input of.
//                         </p>
//                     </div>
//                 </div>
//                 <div className='researchBody2'>
//                     <p>
//                         The uniform, super-chondritic Y/Ho ratios in adjacent iron-oxide and metachert BIF bands most strongly suggest that the conspicuous banding does not result from post-depositional separation of an initially homogenous Fe-silicate precipitate, but argues for a primary origin of the banding. The super-chondritic Y/Ho ratios fit well within the range reported for other BIF worldwide, corroborating that positive Y anomalies, although possibly of smaller size than today, have always been a characteristic feature of seawater.<br /><br />

//                         The Mt. Ruker BIF further complements the set of Early Precambrian marine chemical sediments in which the W-type LTE has been observed, and demonstrates the antiquity of the LTE in seawater. These subtle features reveal that the distribution of the redox-insensitive REY in seawater did not change significantly over the almost 4 billion years geological record of seawater. The super-chondritic Y/Ho ratios and W-type LTE in this and other oxide-facies BIF are in marked contrast to the REY distribution in Modern and Cenozoic oxidic hydrogenetic ferromanganese crusts, pointing towards fundamentally different removal mechanisms of REY from Modern vs Early Precambrian seawater.
//                     </p>
//                     <img src={research2} alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function ResearchComp(){
    return (
        <div className='researchWrapper'>
            <div className="quarumInfo">
                <p className="fontHeading">What is QuARUm</p>
                <hr></hr>
                <p className="fontContent">
                    QuARUm is the German acronym for “Quality Assessment of Analytical Data in Resource and Environmental Research” 
                    (Qualitätsbewertung von Analytikdaten in der Ressourcen- und Umweltforschung). QuARUm is a multidisciplinary research
                     project in cooperation with the Software Engineering research group at TU Dortmund and started in 2023. The project is
                      funded by the BMBF (German Ministry of Research and Education) in the frame of “Projects to strengthen the data skills
                       of young scientists” (Projekte zur Stärkung der Datenkompetenzen des wissenschaftlichen Nachwuchses).
                    <br></br><br></br>
                    The goal of QuARUm is the development of an easy-to-use software tool that can evaluate the usability and reliability of
                     geochemical data. It will help geochemists to search for high-quality data that fits their specific research needs. Furthermore,
                      the software tool enables geochemists to screen their own analytical data and increase their quality.
                </p>
            </div>
            <div className="projectInfo">
            <p className="fontHeading">Project start and first conference</p>
            <hr></hr>
            <p className="fontContent">
                In December 2022, QuARUm officially started as a three-year research project funded by the BMBF (German Ministry of Research
                 and Education). During the next three years, we will develop and publish software tools that support researchers in evaluating
                  their analytical data. In geoscientific case studies, we will demonstrate the function of our software. Furthermore, we will 
                  organise workshops where we present and discuss our outcomes and also provide hands-on instructions on how to use the software tools.
                <br></br><br></br>
                Interaction with and feedback from the geoscience community will be crucial during our project and therefore, we attended the GeoBerlin 
                2023 in September. At this national geoscience conference, we presented QuARUm for the first time in public. The feedback and impressions
                 we gathered during the sessions will help us adapt our software to the needs of geochemists.
                <br></br>
                Klick <a href="https://www.conftool.pro/geoberlin2023/index.php?page=browseSessions&form_session=110#paperID221">here</a> for our conference abstract.
            </p>
            </div>
        </div>
    );
}