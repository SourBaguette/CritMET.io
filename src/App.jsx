import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import CarouselComp from './components/CarouselComp';
import FooterComp from './components/FooterComp';
import CardComp from './components/CardComp';
import ResearchComp from './components/ResearchComp';

function App() {
  return (
    <>
      <NavbarComp />
      <CarouselComp />
      <ResearchComp />
      <CardComp />
      <FooterComp />
    </>
  )
}

export default App
