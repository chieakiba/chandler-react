import React from 'react'
import { Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div id="about">
      <Row className="show-grid text-center">
        <Col lg={10} lgOffset={1} xs={12}>
          <h3>Spicy jalapeno bacon ipsum dolor amet tempor irure ground round ut turkey. Laboris cupim commodo sunt. Consectetur laboris magna, pork loin ham hock excepteur tenderloin capicola turducken exercitation fatback. Prosciutto leberkas proident kevin meatloaf, boudin rump cupidatat chuck laborum alcatra salami ut qui sirloin. Ground round in mollit occaecat salami, magna chicken andouille. Rump sirloin bresaola et. Ham hock dolore meatloaf, biltong adipisicing commodo est in ex laboris ut anim.</h3>
          <div className="story">
            <h2>My Story</h2>
            <h3>Porchetta cupidatat exercitation sausage ribeye aliquip strip steak ex sunt labore beef. Eiusmod bacon ribeye, pariatur incididunt cillum magna occaecat irure picanha swine filet mignon nulla. Ham hock qui doner, pork chop esse in ea fugiat pariatur chuck beef ribs landjaeger. Deserunt filet mignon shoulder, tenderloin turducken drumstick pastrami ad shank nisi strip steak spare ribs ut voluptate sint.</h3>
          </div>

          <h2>Eat More Bacon!</h2>
        </Col>
      </Row>
    </div>
  )
}

export default About
