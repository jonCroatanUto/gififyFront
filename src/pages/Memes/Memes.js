import React, { useState, useEffect, useRef } from "react";
import {
  displayMemesTemplates,
  createMemes,
} from "../../services/API/apiRequest";
import { Container, Row, Col } from "react-bootstrap";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./styles.css";

function Memes() {
  const selectedTemplate = useRef();
  const [result, setResult] = useState({
    showResult: false,
    urlResult: "",
  });
  const [showMemeCreateModal, setShowMemeCreateModal] = useState({
    showModal: false,
    choosenTemplate: "",
    id: "",
  });
  const [memesData, setMemesData] = useState([]);
  const [words, setWords] = useState({
    topWord: "",
    bottomWord: "",
  });
  useEffect(() => {
    displayMemesTemplates().then((res) => {
      console.log(res.data.data);
      const { memes } = res.data.data;

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
    });
  }, []);
  function send(e) {
    e.preventDefault();
    const { topWord, bottomWord } = words;
    createMemes(e.target.id, topWord, bottomWord).then((res) => {
      const { data } = res.data;
      setResult({
        showResult: true,
        urlResult: data.url,
      });
    });
  }
  function handleChange({ target }) {
    setWords({
      ...words,
      [target.name]: target.value,
    });
  }
  function showToCreateMeme({ target }) {
    const { src, id } = target.attributes;
    // console.log(id.value);
    setShowMemeCreateModal({
      showModal: true,
      choosenTemplate: src.nodeValue,
      id: id.value,
    });
    //console.log(nodeValue);
  }
  function close() {
    setShowMemeCreateModal({
      showModal: false,
      choosenTemplate: "",
      id: "",
    });
    setResult({
      showResult: false,
      urlResult: "",
    });
  }
  const { showModal, choosenTemplate, id } = showMemeCreateModal;
  const { showResult, urlResult } = result;
  return (
    <>
      {showModal ? (
        <div className="createMemeModal">
          <button className="closeButton" onClick={close}>
            X
          </button>
          {showResult ? (
            <Container>
              <Row>
                <Col>
                  <img src={urlResult} alt="result" />
                </Col>
                <Col>
                  <InputText
                    type="text"
                    id="topWord"
                    label="You can share you meme by this url"
                    value={urlResult}
                    placeholder="Type something you dislike"
                    handleChange={handleChange}
                  />
                </Col>
              </Row>
            </Container>
          ) : (
            <Container>
              <Row>
                <Col xs={10} md={10} lg={10}>
                  <h1 className="createTitle">Create Your meme</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={10} md={5} lg={5}>
                  <form id={id} className="createForm" onSubmit={send}>
                    <InputText
                      type="text"
                      id="topWord"
                      label="top word"
                      value={words.dislike}
                      placeholder="Type something you dislike"
                      handleChange={handleChange}
                    />

                    <InputText
                      type="text"
                      id="bottomWord"
                      label="bottom word"
                      value={words.like}
                      placeholder="Type something you like"
                      handleChange={handleChange}
                    />
                    <Button title="Create meme" type="submit" />
                  </form>
                </Col>
                <Col xs={10} md={5} lg={5}>
                  <img
                    style={{ maxWidth: "400px", margin: "100px" }}
                    src={choosenTemplate}
                    alt="templateImg"
                  />
                </Col>
              </Row>
            </Container>
          )}
        </div>
      ) : (
        <div></div>
      )}
      <Link style={{ textDecoration: "none" }} to="/">
        <h1 className="toBackHomeTitle">Back home</h1>
      </Link>
      <h1 style={{ marginLeft: "20%" }} className="createTitle">
        Choose a template
      </h1>

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
                    id={meme.id}
                    key={meme.id}
                    ref={selectedTemplate}
                    onClick={showToCreateMeme}
                    src={meme.url}
                    alt={meme.name}
                    style={{
                      cursor: "pointer",
                      width: `${width}px`,
                      maxWidth: "200px",

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
