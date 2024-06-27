import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import ResearchProjects from './pages/ResearchProjects';
import Publications from './pages/Publications';
import Links from './pages/Links';
import Impressum from './pages/Impressum';
import WhatIsQuarum from './pages/WhatIsQuarum';
import ProjectNews from './pages/ProjectNews';
import CRMgeothermal from './pages/Our Research/CRMgeothermal';
import Events from './pages/Events';
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
import RootLayout from './pages/Root';
import BachelorTopics from './pages/Our Research/BachelorTopics';
import { AuthProvider } from './contexts/AuthContext';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NoPage />,
    children: [
      { index: true, element: <Home />},
      { path: 'ResearchProjects', element: <ResearchProjects />},
      { path: 'MichaelBau', element: <MichaelBau />},
      { path: 'AddisKokebAlemu', element: <AddisKokebAlemu />},
      { path: 'RachidBenaouda', element: <RachidBenaouda />},
      { path: 'DavidErnst', element: <DavidErnst />},
      { path: 'FranziskaKlimpel', element: <FranziskaKlimpel />},
      { path: 'LukasKlose', element: <LukasKlose />},
      { path: 'TimmuKreitsmann', element: <TimmuKreitsmann />},
      { path: 'AnnikaMoje', element: <AnnikaMoje />},
      { path: 'AnnikaMoje', element: <AnnikaMoje />},
      { path: 'KeranZhang', element: <KeranZhang />},
      { path: 'AnnaLenaZocher', element: <AnnaLenaZocher />},
      { path: 'Publications', element: <Publications />},
      { path: 'Links', element: <Links />},
      { path: 'Impressum', element: <Impressum />},
      { path: 'WhatIsQuarum', element: <WhatIsQuarum />},
      { path: 'ProjectNews', element: <ProjectNews />},
      { path: 'CRMgeothermal', element: <CRMgeothermal />},
      { path: 'BachelorTopics', element: <BachelorTopics />},
      { path: 'Contact', element: <Contact />},
      { path: 'Events', element: <Events />}
    ]
  }
]);

export default function App(){
  return <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>;
}


