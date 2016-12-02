import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
      <footer>
        <Row className="show-grid text-center">
          <Col xs={12}>
            <p id="madeWith">Made with &hearts; | Copyright &copy; 2016</p>
          </Col>
        </Row>
      </footer>
  )
}

export default Footer
