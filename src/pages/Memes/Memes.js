import React, { useState } from "react";
import { generateMeme } from "../../services/API/apiRequest";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Memes() {
  const [words, setWords] = useState({
    dislike: "",
    like: "",
  });
  const [data, setData] = useState("");
  function send(e) {
    e.preventDefault();
    generateMeme(words.like, words.dislike).then((res) =>
      console.log(res.data)
    );
  }
  function handleChange(e) {
    setWords({
      ...words,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <h1 className="loginTitle">Login</h1>
      <div className="loginForm">
        <form onSubmit={send}>
          <InputText
            type="text"
            id="dislike"
            label="dislike Word"
            value={words.dislike}
            placeholder="Type something you dislike"
            handleChange={handleChange}
          />

          <InputText
            type="text"
            id="like"
            label="like Word"
            value={words.like}
            placeholder="Type something you like"
            handleChange={handleChange}
          />
          <Button title="Login" type="submit" />
        </form>
      </div>
      <Link to="/">
        <h1 className="toRegisterTitle">Back home</h1>
      </Link>
      <img
        src={data}
        width="400"
        height="300"
        alt="This is not working yet..."
      ></img>
    </>
  );
}
export default Memes;
