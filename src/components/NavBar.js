'use client';
import '@/app/css/style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import Searchbar from './Searchbar';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-gray-800 justify-center">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link className='text-white text-center' as={Link} href="/">Home</Nav.Link>
            <Nav.Link className='text-white text-center' as={Link} href="/about">About</Nav.Link>
            <Nav.Link className='text-white text-center' as={Link} href="/contact">Contact</Nav.Link>
            <NavDropdown id="basic-nav-dropdown" title={<span className="text-white">Categories</span>}> {/* Apply text-white class to the span */}
              <NavDropdown.Item as={Link} href="/category/formal-wear" >Formal Wear</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/category/casual-wear" >Casual Wear</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/category/accessories" >Accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex me-2 justify-center">
          <Searchbar/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
