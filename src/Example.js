import React, { useState } from "react"

import { Button, Collapse } from "react-bootstrap"
import Note from "./Notes/Note/Note"

function Example() {
    const [open, setOpen] = useState(false);
  
    return (
        <div>
            <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <div style={{}}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Note />
            </div>
          </Collapse>
        </div>
        </div>
    );
  }
  
export default Example;