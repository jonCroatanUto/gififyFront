import React, { useState, useEffect } from "react";
import { displayMemesTemplates } from "../../services/API/apiRequest";
import { Container, Row, Col } from "react-bootstrap";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Memes() {
  const [memesData, setMemesData] = useState([]);
  useEffect(() => {
    displayMemesTemplates().then((res) => {
      const { memes } = res.data.data;
      // if (meme.height > meme.width) {
      //   memesData.remove(index);
      // }
      const vertical = memes.filter((meme) => {
        if (meme.height > meme.width) {
          return meme;
        }
      });
      const horizontal = memes.filter((meme) => {
        if (meme.height <= meme.width) {
          return meme;
        }
      });
      const memesArray = horizontal.concat(vertical);
      setMemesData(memesArray);
      // setMemesDataVertical(vertical);
      // setMemesDataHoritzontal(horizontal);
    });
  }, []);
  const [words, setWords] = useState({
    dislike: "",
    like: "",
  });
  function send(e) {
    e.preventDefault();
    // console.log(memesData);
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

      {memesData.length !== 0 ? (
        <Container>
          <Row className="justify-content-md-center">
            {memesData.map((meme, index) => {
              let width;
              let height;
              if (meme.width >= 1000) {
                width = meme.width / 2;
              } else {
                width = meme.width;
              }

              return (
                <Col xs={10} md={6} lg={3}>
                  <img
                    src={meme.url}
                    alt={meme.name}
                    style={{
                      width: `${width}px`,
                      maxWidth: "300px",

                      margin: "10px",
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
        <div></div>
      )}
    </>
  );
}
export default Memes;
