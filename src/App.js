import React from 'react';

import { Card, Button, Row, Container, Col } from 'react-bootstrap';

import NavComponent from "./Nav/NavComponent"
import Example from "./Example"


function App() {
  return (
    <Container>
      <Container>
        <Example />
      </Container>
      <NavComponent />
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/user/erondu/600x400"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some Custom text one can write here</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;