import DavidErnstImage from '../../images/personalImages/DavidErnstImage.jpeg';
import '../AboutMe.css';
import PublicationCard from '../../components/PublicationCard';
import firstPublication from '../../images/personalPublicationImages/DavidErnstPublications/figure_ernst_and_bau_2021.png';
import secondPublication from '../../images/personalPublicationImages/DavidErnstPublications/figure_ernst_etal_2022.png';
import thirdPublication from '../../images/personalPublicationImages/DavidErnstPublications/figure_ernst_etal_2023.png';


export default function DavidErnst() {
    return (
        <>
            <div className="AboutMeContainer">
                <div className="PersonalImage">
                    <img className="ResponsiveImage" src={DavidErnstImage}></img>
                </div>
                <div className="PersonalInfo">
                    <h1>David Ernst</h1>
                    <p>Hey, my name is David, I was born in Wuppertal (Germany), and I studied Geosciences at Ruhr-Universität Bochum (Bachelor) and Economic Geosciences at TU Clausthal (Master). During high school, I had no strong affinity for chemistry. However, that changed, especially during my master's studies in Clausthal, where I investigated trace element distributions in ferromanganese crusts during my master thesis.
                        <br/><br/>
                        In 2017 I joined the Geochemistry Workgroup at Constructor University, which was back then still called Jacobs University. The first almost two years I worked on a research project, dealing with the processing of ferromanganese nodules (deep-sea ore precipitates). In January 2019 I started my PhD in the CritMET research group of Michael Bau. In my PhD project, we investigated the behaviour of the critical trace elements Gallium and Germanium together with their respective geochemical partners, Aluminium and Silicon, in the natural environment. Our special focus was on Precambrian banded iron formations, which are great archives for past seawater environments. Banded iron formations are quite old (up to ~3 billion years), layered rocks with alternating iron-rich and silica-rich bands.
                        <br/><br/>
                        In July 2023, I successfully finished my PhD and now work as a PostDoc in our CritMET research group. My PostDoc research project is QuARUm, which is a collaboration with the Software Engineering research group at TU Dortmund. QuARUm aims to develop software that supports researchers to assess the quality and suitability of geochemical data with respect to their specific research questions (klick here to read more about QuARUm).
                    </p>
                </div>
            </div>
            {/* 
            <PublicationCard 
            title="Test" 
            image={secondPublication} />
            <PublicationCard 
            title="Test" 
            image={thirdPublication} /> */}

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