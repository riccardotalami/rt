import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import Logo from './SquareLogo2-removebg-preview.png'
import './NavBar.css'

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" id='NavBar'>
            <Container>
                <Navbar.Brand as={Link} to="/" id='NavBar_Brand'>
                    <img src={Logo} alt="RT Logo" className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/about"><p>About</p></Nav.Link>
                        <NavDropdown title="Research" id="basic-nav-dropdown">
                            <Nav.Link as={Link} to="/directions"><p>Directions</p></Nav.Link>
                            <Nav.Link as={Link} to="/projects"><p>Projects</p></Nav.Link>
                            <Nav.Link as={Link} to="/tools"><p>Tools</p></Nav.Link>
                            <Nav.Link as={Link} to="/publications"><p>Publications</p></Nav.Link>
                        </NavDropdown>
                        <NavDropdown title="Experience" id="basic-nav-dropdown">
                            <Nav.Link as={Link} to="/academic"><p>Academic</p></Nav.Link>
                            <Nav.Link as={Link} to="/teaching"><p>Teaching</p></Nav.Link>
                            <Nav.Link as={Link} to="/service"><p>Service</p></Nav.Link>
                            <Nav.Link as={Link} to="/training"><p>Training</p></Nav.Link>
                        </NavDropdown>
                        {/* <Nav.Link as={Link} to="/work_experience"><p>Experience</p></Nav.Link>
                        <Nav.Link as={Link} to="/teaching"><p>Teaching</p></Nav.Link> */}
                        <Nav.Link as={Link} to="/education"><p>Education</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
