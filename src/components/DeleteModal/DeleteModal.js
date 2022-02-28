import React from "react";
import ModalHoc from "../hocs/ModalHoc/ModalHoc";
import { Button, Container, Row, Col } from "react-bootstrap";
import { deleteGif } from "../../services/serverCalls";
import { useDispatch, useSelector } from "react-redux";

import {
  hideAllModalsAction,
  realoadHomeAction,
} from "../../redux/displaysReducer/action";

function DeleteModal() {
  const dispatch = useDispatch();
  const { isDeleteConfirmModalDisplayed } = useSelector(
    (state) => state.displaysReducer
  );
  const { id } = isDeleteConfirmModalDisplayed;
  function deleteGifComfirmed() {
    deleteGif({ id: id }).then(() => {
      dispatch(realoadHomeAction(true));
      dispatch(hideAllModalsAction());
    });
  }
  return (
    <Container>
      <Row>
        <h1>Are you sure to Delete</h1>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={deleteGifComfirmed}
            variant="outline-danger"
            type="button"
          >
            CONFIRM
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => dispatch(hideAllModalsAction())}
            variant="outline-warning"
            type="button"
          >
            CANCEL
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default ModalHoc(DeleteModal);
