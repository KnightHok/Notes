import React from "react";
import { Nav } from "react-bootstrap";
import "./Nav.css";

const nav = () => (
  <Nav variant="tabs" fixed="top">
    <Nav.Item >
      <Nav.Link active href="/">
        <img alt="" src="https://img.icons8.com/ios-glyphs/30/000000/new-file.png" />
        New Note
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>Note</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default nav;
