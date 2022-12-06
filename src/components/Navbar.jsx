import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function ColorSchemesExample() {
  return (
    <>
      <Navbar  variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home"> Vinoteca y Algo mas... </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#category1">Tintos</Nav.Link>
            <Nav.Link href="#category2">Blancos</Nav.Link>
            <Nav.Link href="#category3">Aguas</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#regiser">Register</Nav.Link>
            <Nav.Link href="#cart"><CartWidget  /> </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;
