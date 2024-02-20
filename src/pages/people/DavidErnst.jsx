import DavidErnstImage from '../../images/personalImages/DavidErnstImage.jpeg';
import '../AboutMe.css';
import PublicationCard from '../../components/PublicationCard';
import firstPublication from '../../images/personalPublicationImages/DavidErnstPublications/figure_ernst_and_bau_2021.png';
import secondPublication from '../../images/personalPublicationImages/DavidErnstPublications/figure_ernst_etal_2022.png';
import thirdPublication from '../../images/personalPublicationImages/DavidErnstPublications/figure_ernst_etal_2023.png';
import { peoplePage } from '../../data/textContext';


export default function DavidErnst() {
    return (
        <>
            <div className="AboutMeContainer">
                <div className="PersonalImage">
                    <img className="ResponsiveImage" src={DavidErnstImage}></img>
                </div>
                <div className="PersonalInfo">
                    <h1>David Ernst</h1>
                    <p>
                        {peoplePage.davidErnst}
                    </p>
                </div>
            </div>

            <div className="publicationContainer">
                <h1>Publications</h1>
                <hr/>
                <PublicationCard 
                    title="Ernst and Bau (2021): Banded iron formation from Antarctica: The 2.5 Ga old Mt. Ruker BIF and the antiquity of lanthanide tetrad effect and super-chondritic Y/Ho ratio in seawater."
                    content="Here we report the first detailed geochemical data for Banded Iron-Formation (BIF) from Antarctica. Micro drill cores were taken from adjacent..." 
                    image={firstPublication} 
                />
                <PublicationCard 
                    title="Ernst et al. (2022): Fractionation of germanium and silicon during scavenging from seawater by marine Fe (oxy)hydroxides: Evidence from hydrogenetic ferromanganese crusts and nodules."
                    content="Germanium (Ge) and silicon (Si) are an element pair which shows rather coherent behaviour in many geochemical systems. In aqueous systems and in th..." 
                    image={secondPublication} 
                /><PublicationCard 
                    title="Ernst et al. (2023): A first look at the gallium-aluminium systematics of Early Earth’s seawater: Evidence from Neoarchean banded iron formation."
                    content="Geochemical proxies archived in banded iron formations (BIFs) can provide information on the physico-chemical conditions in the Precambrian atmospher..." 
                    image={thirdPublication} 
                />
            </div>
        </>
    );
}