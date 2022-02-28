import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import {
  displayUpdateAction,
  displayDeleteAction,
} from "../../redux/displaysReducer/action";

function GifBox({ gifData }) {
  const { _id, urlGif, title } = gifData;
  const dispatch = useDispatch();
  function displayConfirmDelete() {
    console.log("delete");
    // deleteImage({ id: id }).then((res) => console.log(res));
    dispatch(displayDeleteAction({ isDispalyDelete: true, id: _id }));
  }
  function displayUpdate() {
    dispatch(
      displayUpdateAction({ isDispalyUpdate: true, id: _id, title: title })
    );
  }

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
            <EditIcon onClick={displayUpdate} style={{ color: "green" }} />
            <DeleteIcon
              onClick={displayConfirmDelete}
              style={{ color: "red" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default GifBox;
