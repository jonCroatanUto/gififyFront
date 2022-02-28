import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function GifBox({ gifData }) {
  const { _id, urlGif, title } = gifData;

  return (
    <>
      <div className="gifContainer" key={`div${_id}`}>
        <Row>
          <h4>{title}</h4>
          <img
            key={_id}
            src={urlGif}
            width="200"
            height="200"
            frameBorder="0"
            className="giftImage"
            allowFullScreen
          />
        </Row>
        <Row>
          <Col>
            <EditIcon style={{ color: "green" }} />
            <DeleteIcon style={{ color: "red" }} />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default GifBox;
