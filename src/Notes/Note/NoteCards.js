import React, { useEffect, useState } from "react";
import { CardGroup, Col } from "react-bootstrap";
import { getAllNotes } from "../../db/dbCRUD";
import NoteCard from "./noteCard";

const NoteCards = () => {
  const [notes, setNotes] = useState([]);
  // do this on mount
  const renderingCards = async () => {
    let testing = await getAllNotes();
    setNotes(testing);
  };
  useEffect(() => {
    console.log("here");
    renderingCards();
  }, []);

  return (
    <CardGroup>
      <Col>
        {notes.map((note, index) => {
          return <NoteCard title={note.title} contents={note.contents} />;
        })}
        <NoteCard title="Testing" contents="crappy testing lorem" />
      </Col>
    </CardGroup>
  );
};

export default NoteCards;
