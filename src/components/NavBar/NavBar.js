import React, { useState } from "react";
import InputText from "../InputText";
import Categories from "../Categories";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/userReducer/actions";
import Button from "../Button";
import "./style.css";
function NavBar() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userReducer);
  const [search, setSearch] = useState({
    title: "",
  });
  function handleChange(e) {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  }
  function logout() {
    dispatch(logOutAction());
  }
  return (
    <div className="navBar">
      {data === null ? (
        <div className="titles">
          <h3 className="title1">Be a part of giphfy</h3>
          <Link style={{ textDecoration: "none" }} to="/login">
            <h2 className="title2">sign IN</h2>
          </Link>
        </div>
      ) : (
        <div className="titles">
          <h3 className="title1">Welcome</h3>

          <h2 className="title2">{data.data.username}</h2>
        </div>
      )}
      <div className="search">
        <InputText
          type="text"
          id="search"
          label="Search bar is not aviable yet..."
          value={search.title}
          placeholder="Search bar is not aviable yet..."
          handleChange={handleChange}
        />

        <Categories />
      </div>
      {data === null ? (
        <div></div>
      ) : (
        <div className="logoutbuton">
          <Button title="logOut" handleEdit={logout} type="button" />
        </div>
      )}
    </div>
  );
}
export default NavBar;
