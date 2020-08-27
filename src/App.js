import React from 'react';
import './App.css';
import { Name } from './Name'
import { Description2 } from './description'
import { Button } from 'reactstrap'
import { Skill } from './Name'
import { Desc, Exp,Profile } from './Name'
import { Container, Row, Col } from 'reactstrap';

const App = () => {
  return (
    <div className='mycss'>
      <Container>
        <Row>
            <Col>
              <Profile />
            </Col>
            <Col>
              <Name />
            </Col>
        </Row>
        <Row>
          <Col>
            <Skill />
          </Col>
          <Col>
            <Desc />
            <Exp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
