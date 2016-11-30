import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

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
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
