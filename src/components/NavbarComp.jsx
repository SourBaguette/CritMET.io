import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../images/critMET-logo.png";
import "./NavbarComp.css";
import { Link } from "react-router-dom";

export default function NavbarComp() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          className="navBarTest"
        >
          <Container fluid>
            <Navbar.Brand style={{ fontSize: 30, color: "white" }}>
              <img
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 10,
                  marginRight: 5,
                }}
                src={logo}
              />
              <Link to="/" style={{ color: "white" }}>
                CritMET
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 navBarNavigation">
                  <NavDropdown
                    title="Our Research"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown style={{color: "black", padding: "0px 5px"}}  title="Research Projects" id={`offcanvasNavbarLabel-expand-${expand}`}>
                      <NavDropdown.Item>
                        <Link to="/CRMgeothermal">CRM Geothermal</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/WhatIsQuarum">QuARUm</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item>
                      <Link to="/BachelorTopics">Bachelor Topics</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown 
                    title="About Us"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown
                      title="The People"
                      style={{ padding: "0px 5px"}}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item>
                        <Link to="/MichaelBau">Michael Bau</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/AddisKokebAlemu">Addis Kokeb Alemu</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/RachidBenaouda">Rachid Benaouda</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/DavidErnst">David Ernst</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/FranziskaKlimpel">Franziska Klimpel</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/LukasKlose">Lukas Klose</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/TimmuKreitsmann">Timmu Kreitsmann</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/AnnikaMoje">Annika Moje</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/KeranZhang">Keran Zhang</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/AnnaLenaZocher">Anna-Lena Zocher</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown>
                  <Nav.Link>
                    <Link to="/Publications" style={{ color: "black" }}>
                      Publications
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/Impressum" style={{ color: "black" }}>
                      Impressum
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
