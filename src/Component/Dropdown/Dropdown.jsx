import React from "react";
import { Dropdown } from "react-bootstrap";
import "./Dropdown.css"; // Import the CSS file

const Dropdowns = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
         Listing
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Item-1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Item-2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Item-3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Dropdowns;
