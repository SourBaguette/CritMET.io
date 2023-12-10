import './ResearchComp.css';
import research1 from '../images/research1.jpeg';
import research2 from '../images/research2.jpeg';

export default function ResearchComp() {
    return (
        <>
            <div className="researchHeading">
                <h1>Research</h1>
            </div>
            <div className='researchBody'>
                <p style={{ fontSize: '25px' }}>02.01.2021 – First geochemical data for Antarctic banded iron formation published in Gondwana Research</p>
                <div className='researchBody1'>
                    <div className='image1'>
                        <img src={research1} alt="" />
                    </div>
                    <div className='para1'>
                        <p>
                            Banded iron formation from Antarctica: The 2.5 Ga old Mt. Ruker BIF and the antiquity of lanthanide tetrad effect and super-chondritic Y/Ho ratio in seawater Here we report the first detailed geochemical data for Banded Iron-Formation (BIF) from Antarctica.<br /><br />

                            Micro drill cores were taken from adjacent magnetite/haematite and metachert bands from the 2.5 Ga old Mt. Ruker BIF, Prince Charles Mountains, East Antarctica. Low concentrations of Al, Zr, Hf, and Sc reveal the purity of the samples. The chemical composition matches closely that of other early Precambrian BIF,  except for an enrichment of Ni, and high Ba/Sr ratios in the metachert. Shale-normalized Rare Earths and Yttrium (REYSN) patterns show all the features of modern seawater such as depletion of light vs heavy REY, positive anomalies of LaSN, EuSN, GdSN, and YSN (i.e. super-chondritic Y/Ho ratios) and the W-type lanthanide tetrad effect (LTE), but no CeSN anomalies (and no positive Eu anomalies in chondrite-normalized REY patterns). This distribution is fully compatible with that of other pure Early Precambrian BIFs, suggesting high-temperature hydrothermal input of.
                        </p>
                    </div>
                </div>
                <div className='researchBody2'>
                    <p>
                        The uniform, super-chondritic Y/Ho ratios in adjacent iron-oxide and metachert BIF bands most strongly suggest that the conspicuous banding does not result from post-depositional separation of an initially homogenous Fe-silicate precipitate, but argues for a primary origin of the banding. The super-chondritic Y/Ho ratios fit well within the range reported for other BIF worldwide, corroborating that positive Y anomalies, although possibly of smaller size than today, have always been a characteristic feature of seawater.<br /><br />

                        The Mt. Ruker BIF further complements the set of Early Precambrian marine chemical sediments in which the W-type LTE has been observed, and demonstrates the antiquity of the LTE in seawater. These subtle features reveal that the distribution of the redox-insensitive REY in seawater did not change significantly over the almost 4 billion years geological record of seawater. The super-chondritic Y/Ho ratios and W-type LTE in this and other oxide-facies BIF are in marked contrast to the REY distribution in Modern and Cenozoic oxidic hydrogenetic ferromanganese crusts, pointing towards fundamentally different removal mechanisms of REY from Modern vs Early Precambrian seawater.
                    </p>
                    <img src={research2} alt="" />
                </div>
            </div>
        </>
    );
}