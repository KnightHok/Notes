import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"

// import files
import "./Note.css"
import { addNote, } from "../../db/dbCRUD";





const NoteForm = () => {
  const [ note, setNote ] = useState({
      title: "",
      contents: ""
  }); //, completed: false date: new Date});


  // handleChange on Document
  const titleChange = (e) => {

    setNote((prevState) => ({
      ...prevState,
      
        title: e.target.value,
      
        
    }));
  };
  const contentsChange = (e) => {
    setNote((prevState) => ({
      ...prevState,
        contents: e.target.value,
      
    }));
  };
  

  return (

    <Form onSubmit={ e => addNote(e, note) }>
      <Form.Group className="mb-3" controlId="formBasicNote">
        <Form.Label>Note</Form.Label>
        <Form.Control
          className="note-title"
          as="textarea" placeholder="Title"
          onChange={ e => titleChange(e) }/>
        <Form.Control
          className="note-textarea"
          placeholder="Please type in your note"
          onChange={ e => contentsChange(e) }/>
        <Form.Text className="text-muted" >
          We'll never share your note with anyone else.
        </Form.Text>
        <Form.Check type="checkbox" label="Complete?"></Form.Check>
      </Form.Group>
        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NoteForm