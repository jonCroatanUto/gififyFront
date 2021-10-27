import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
function Categories() {
  return (
    <ul className="menuNav">
      <li>Humor</li>
      <li>Films</li>
      <li>Party</li>
      <li>Drama</li>
    </ul>
  );
}
export default Categories;
