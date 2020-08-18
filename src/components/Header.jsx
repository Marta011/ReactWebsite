import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavigationHeader extends React.Component {
   render() {
      return (
        <header>
            <MyNavigation />
        </header>
      );
   }
}
class MyNavigation extends React.Component {
   render() {
      return (
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">AnimalPedia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link activeClassName="active" href="#">Home</Nav.Link>
                  <Nav.Link activeClassName="active" href="#">Papugi</Nav.Link>
                  <NavDropdown title="Ssaki" id="basic-nav-dropdown">
                    <NavDropdown.Item>Psy</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Koty</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
   }
}
export default NavigationHeader;