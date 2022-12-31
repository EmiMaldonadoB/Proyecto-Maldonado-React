import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar  variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand  as={Link} to="/"> Vinoteca y Algo mas... </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="category/1">Tinto</Nav.Link>
            <Nav.Link  as={Link} to="category/2">Blanco</Nav.Link>
            <Nav.Link  as={Link} to="category/3">Sin Alcohol</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#login">Loguearse</Nav.Link>
            <Nav.Link href="#regiser">Registrarse</Nav.Link>
            <Nav.Link as={Link} to="Cart"><CartWidget  /> </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;
