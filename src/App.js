import React from 'react';

import {Row, Container, } from 'react-bootstrap';

import NavComponent from "./Nav/NavComponent"
import Example from "./Example"
import NoteCards from "./Notes/Note/NoteCards"



function App() {
  return (
    <Container>
      <Container>
        <Example />
      </Container>
      <NavComponent />
      <Row>
        <NoteCards />
      </Row>
    </Container>
  );
}

export default App;