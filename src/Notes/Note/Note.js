import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"
import { openDB } from "idb"

// import files
import "./Note.css"





const NoteForm = () => {

  async function getDBObjectStore(e, note) {
    e.preventDefault();
    const db = await openDB("Notes", 2.0, {
      upgrade(db) {
        if(db.objectStoreNames.contains("Note")){
          db.deleteObjectStore("Note")
        }
        const store = db.createObjectStore("Note", {
          keyPath: "id",
          autoIncrement: true
        })
        
        store.createIndex("title", "title", { unique: false });
        store.createIndex("contents", "contents", { unique: false });
      },
      // blocking() {
      //   if()
      // }
    });
    
    // show what is in note then add to database
    console.log(note);
    await db.add(["Note"], note);
    db.close();
    
    //     db.createIndex("completed", "completed", { unique: false });
    //     db.createIndex("date", "date", { unique: false });
    //   }
    // });
  };

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

    <Form onSubmit={ e => getDBObjectStore(e, note) }>
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
        <Form.Text className="text-muted">
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