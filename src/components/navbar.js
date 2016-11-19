import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="./../../public/index.html">Chandler Hoffman</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
      <NavItem eventKey={1} href="#">About</NavItem>
      <NavItem eventKey={2} href="#">Camp Registration</NavItem>
      <NavItem eventKey={3} href="#">Contact</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>About</MenuItem>
        <MenuItem eventKey={3.2}>Camp Registration</MenuItem>
        <MenuItem eventKey={3.3}>Contact</MenuItem>
      </NavDropdown>
    </Nav>
    </Navbar>
  )
}

export default NavigationBar
