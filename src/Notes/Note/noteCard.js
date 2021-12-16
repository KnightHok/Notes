import React from "react";
import { Card, Button } from "react-bootstrap"
import { getAllNotes } from "../../db/dbCRUD"



const noteCard = (props) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/user/erondu/600x400"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.contents}</Card.Text>
          <Button onClick={(e) => getAllNotes(e)} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    );
}

export default noteCard;


