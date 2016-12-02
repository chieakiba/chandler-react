import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="./../../public/index.html">Oinkster</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="./about.js">My Story</NavItem>
            <NavItem eventKey={2} href="./registration.js">Bacon Registration</NavItem>
            <NavItem eventKey={3} href="./contact.js">Contact Pigs</NavItem>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
