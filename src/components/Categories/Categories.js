import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./style.css";
function Categories() {
  return (
    <div style={{ margin: "0px" }}>
      <Link style={{ textDecoration: "none" }} to="/memes">
        <Button title="Create your memes" type="button" />
      </Link>
    </div>
  );
}
export default Categories;
