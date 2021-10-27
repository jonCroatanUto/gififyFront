import React, { useState, useEffect } from "react";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/userReducer/actions";
import { register } from "../../services/serverCalls/index";
function Register() {
  const { data } = useSelector((state) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  useEffect(() => {
    if (data != null) {
      history.push("/");
    }
  }, [data]);
  function send(e) {
    e.preventDefault();
    register(userData).then((res) => {
      dispatch(fetchUserData(res.data));
    });
  }

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <h1 className="loginTitle">Register</h1>
      <div className="registerForm">
        <form onSubmit={send}>
          <InputText
            type="text"
            id="username"
            label="username"
            value={userData.username}
            placeholder="Type username"
            handleChange={handleChange}
          />
          <InputText
            type="email"
            id="email"
            label="email"
            value={userData.email}
            placeholder="Type email"
            handleChange={handleChange}
          />
          <InputText
            type="password"
            id="password"
            label="password"
            value={userData.password}
            placeholder="Type password"
            handleChange={handleChange}
          />
          <InputText
            type="text"
            id="firstname"
            label="firstname"
            value={userData.firstname}
            placeholder="Type firstname"
            handleChange={handleChange}
          />
          <InputText
            type="text"
            id="lastname"
            label="lastname"
            value={userData.lastname}
            placeholder="Type lastname"
            handleChange={handleChange}
          />

          <Button title="Register" type="submit" />
        </form>
      </div>
      <Link to="/login">
        <h1 className="toRegisterTitle">Back to login</h1>
      </Link>
    </>
  );
}

export default Register;
