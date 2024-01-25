import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import {Route, Routes} from "react-router-dom"
import FooterComp from './components/FooterComp';
import Topics from './pages/Topics';
import ResearchProjects from './pages/ResearchProjects';
import TheLab from './pages/TheLab';
import Publications from './pages/Publications';
import Links from './pages/Links';
import Impressum from './pages/Impressum';
// importing pages of people
import DavidErnst from './pages/people/DavidErnst';
import MichaelBau from './pages/people/MichaelBau';
import AddisKokebAlemu from './pages/people/AddisKokebAlemu';
import RachidBenaouda from './pages/people/RachidBenaouda';
import FranziskaKlimpel from './pages/people/FranziskaKlimpel';
import LukasKlose from './pages/people/LukasKlose';
import TimmuKreitsmann  from './pages/people/TimmuKreitsmann';
import AnnikaMoje from './pages/people/AnnikaMoje';
import KeranZhang from './pages/people/KeranZhang';
import AnnaLenaZocher from './pages/people/AnnaLenaZocher';


function App() {
  return (
    <>
      <NavbarComp />
      <div className='containerBody'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Topics" element={<Topics />} />
          <Route path="/ResearchProjects" element={<ResearchProjects />} />
          <Route path="/MichaelBau" element={<MichaelBau />} />
          <Route path="/AddisKokebAlemu" element={<AddisKokebAlemu />} />
          <Route path="/RachidBenaouda" element={<RachidBenaouda />} />
          <Route path="/DavidErnst" element={<DavidErnst />} />
          <Route path="/FranziskaKlimpel" element={<FranziskaKlimpel />} />
          <Route path="/LukasKlose" element={<LukasKlose />} />
          <Route path="/TimmuKreitsmann" element={<TimmuKreitsmann />} />
          <Route path="/AnnikaMoje" element={<AnnikaMoje />} />
          <Route path="/KeranZhang" element={<KeranZhang />} />
          <Route path="/AnnaLenaZocher" element={<AnnaLenaZocher />} />
          <Route path="/TheLab" element={<TheLab />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Links" element={<Links />} />
          <Route path="/Impressum" element={<Impressum />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <FooterComp className="footerBottom"/>
    </>
  )
}

export default App
