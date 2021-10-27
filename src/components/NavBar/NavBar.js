import React, { useState } from "react";
import InputText from "../InputText";
import Categories from "../Categories";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";
function NavBar() {
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
      <div className="titles">
        <h3 className="title1">Be a part of giphfy</h3>
        <h2 className="title2">sign UP</h2>
      </div>
      <div className="search">
        <InputText
          type="text"
          id="search"
          label="title"
          value={search.title}
          placeholder="Seacrh your gif"
          handleChange={handleChange}
        />

        <Categories />
      </div>
      <img src="./serachIcon.png" alt="search icon" />
    </div>
  );
}
export default NavBar;
