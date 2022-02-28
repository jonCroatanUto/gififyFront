import React, { useState, useEffect } from "react";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../services/serverCalls/index";
import { fetchUserData } from "../../redux/userReducer/actions";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userReducer);
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (data != null) {
      history.push("/");
    }
  }, [data]);
  function send(e) {
    e.preventDefault();
    login(logData).then((res) => {
      console.log(res.data.message);
      dispatch(fetchUserData(res.data));
      localStorage.setItem("userLoged", JSON.stringify(res.data));
    });
  }
  function handleChange(e) {
    setLogData({
      ...logData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <h1 className="loginTitle">Login</h1>
      <div className="loginForm">
        <form onSubmit={send}>
          <InputText
            type="email"
            id="email"
            label="email"
            value={logData.email}
            placeholder="Type email"
            handleChange={handleChange}
          />

          <InputText
            type="password"
            id="password"
            label="password"
            value={logData.password}
            placeholder="Type password"
            handleChange={handleChange}
          />
          <Button title="Login" type="submit" />
        </form>
      </div>
      <Link style={{ textDecoration: "none" }} to="/register">
        <h1 className="toRegisterTitle">Don't have any acount yet?</h1>
      </Link>
    </>
  );
}
export default Login;
