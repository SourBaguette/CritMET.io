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
                        <Navbar.Brand href="#" style={{fontSize:30}}><img style={{height:30, width:30, marginBottom:10, marginRight:5}} src={logo} />CritMET</Navbar.Brand>
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
                                        <NavDropdown.Item href="#action3">Topics</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
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
                                            <NavDropdown.Item href="#action3">Michael Bau</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Addis Kokeb Alemu</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Rachid Benaouda</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">David Ernst</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Franziska Klimpel</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Lukas Klose</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Timmu Kreitsmann</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Annika Moje</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Keran Zhang</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Anna-Lena Zocher</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown.Item href="#action4">
                                            The Lab
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link href="#action1">Publications</Nav.Link>
                                    <Nav.Link href="#action2">Links</Nav.Link>
                                    <Nav.Link href="#action2">Impressum</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}
