import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="../../index.html">Chandler Hoffman</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}

export default NavigationBar
