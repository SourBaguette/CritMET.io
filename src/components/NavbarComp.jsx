import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../images/earth.png';

export default function NavbarComp() {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar sticky='top' key={expand} expand={expand} className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="/Home" style={{fontSize:30}}><img style={{height:30, width:30, marginBottom:10, marginRight:5}} src={logo} />CritMET</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavDropdown
                                        title="Our Research"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="/Topics">Topics</NavDropdown.Item>
                                        <NavDropdown.Item href="/ResearchProjects">
                                            Research Projects
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown
                                        title="About Us"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown 
                                            title="The People" style={{padding: 5}}
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="/MichaelBau">Michael Bau</NavDropdown.Item>
                                            <NavDropdown.Item href="/AddisKokebAlemu">Addis Kokeb Alemu</NavDropdown.Item>
                                            <NavDropdown.Item href="/RachidBenaouda">Rachid Benaouda</NavDropdown.Item>
                                            <NavDropdown.Item href="/DavidErnst">David Ernst</NavDropdown.Item>
                                            <NavDropdown.Item href="/FranziskaKlimpel">Franziska Klimpel</NavDropdown.Item>
                                            <NavDropdown.Item href="/LukasKlose">Lukas Klose</NavDropdown.Item>
                                            <NavDropdown.Item href="/TimmuKreitsmann">Timmu Kreitsmann</NavDropdown.Item>
                                            <NavDropdown.Item href="/AnnikaMoje">Annika Moje</NavDropdown.Item>
                                            <NavDropdown.Item href="/KeranZhang">Keran Zhang</NavDropdown.Item>
                                            <NavDropdown.Item href="/AnnaLenaZocher">Anna-Lena Zocher</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown.Item href="/TheLab">
                                            The Lab
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link href="/Publications">Publications</Nav.Link>
                                    <Nav.Link href="/Links">Links</Nav.Link>
                                    <Nav.Link href="/Impressum">Impressum</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}
