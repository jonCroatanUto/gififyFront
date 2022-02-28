import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/userReducer/actions";

function Categories() {
  const { data } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  function logout() {
    dispatch(logOutAction());
    localStorage.removeItem("userLoged");
  }
  return (
    <Row>
      <Col xs={10} md={5} lg={5}>
        <div style={{ margin: "0px" }}>
          <Link style={{ textDecoration: "none" }} to="/memes">
            <Button title="memes" type="button" />
          </Link>
        </div>
      </Col>
      <Col xs={10} md={5} lg={5}>
        {data === null ? (
          <div></div>
        ) : (
          <div className="logoutbuton">
            <Button title="logOut" handleEdit={logout} type="button" />
          </div>
        )}
      </Col>
    </Row>
  );
}
export default Categories;
