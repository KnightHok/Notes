import React from "react";
import "./Note.css"

import { Form, Button } from "react-bootstrap"

const noteForm = () => {
  return (

    <Form>

      <Form.Group className="mb-3" controlId="formBasicNote">
        <Form.Label>Note</Form.Label>
        <Form.Control className="note-textarea" as="textarea" placeholder="Note" />
        <Form.Text className="text-muted">
          We'll never share your note with anyone else.
        </Form.Text>
      </Form.Group>
        <Form.Check type="checkbox" label="Complete?"></Form.Check>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default noteForm