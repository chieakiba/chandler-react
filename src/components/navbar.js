import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="./../../public/index.html">Chandler Hoffman</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="./about.js">About</NavItem>
            <NavItem eventKey={2} href="./camp.js">Camp Registration</NavItem>
            <NavItem eventKey={3} href="./contact.js">Contact</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="./about.js">About</MenuItem>
              <MenuItem eventKey={3.2} href="./camp.js">Camp Registration</MenuItem>
              <MenuItem eventKey={3.3} href="./contact.js">Contact</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
