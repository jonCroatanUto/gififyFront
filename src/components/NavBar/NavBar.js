import React, { useState } from "react";
import InputText from "../InputText";
import Categories from "../Categories";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
        <Categories />
      </div>
    </div>
  );
}
export default NavBar;
