import { peoplePage } from '../../data/textContext';
import '../AboutMe.css';
import AddisKokebImage from '../../images/personalImages/AddisKokeb.jpeg';

export default function AddisKokebAlemu() {
    return (
        <>
            <div className="AboutMeContainer">
                <div className="PersonalImage">
                    <img className="ResponsiveImage" src={AddisKokebImage}></img>
                </div>
                <div className="PersonalInfo">
                    <h1>Addis Kokeb Alemu</h1>
                    <p>
                        {peoplePage.addisKokeb}
                    </p>
                </div>
            </div>
        </>
    );
}