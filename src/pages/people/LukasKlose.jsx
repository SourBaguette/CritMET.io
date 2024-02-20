import { peoplePage } from '../../data/textContext';
import '../AboutMe.css';
import LukasImage from '../../images/personalImages/LukasImage.jpeg';

export default function LukasKlose() {
    return (
        <>
            <div className="AboutMeContainer">
                <div className="PersonalImage">
                    <img className="ResponsiveImage" src={LukasImage}></img>
                </div>
                <div className="PersonalInfo">
                    <h1>Lukas Klose</h1>
                    <p>
                        {peoplePage.lukasKlose}
                    </p>
                </div>
            </div>
        </>
    );
}