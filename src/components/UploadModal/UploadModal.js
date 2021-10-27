import React, { useEffect, useState } from "react";
import axios from "axios";
import InputText from "../InputText";
import Select from "react-select";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  unDisplayUploadAction,
  realoadHomeAction,
} from "../../redux/displaysReducer/action";
import { uploadGif } from "../../services/serverCalls/index";

function UploadModal() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userReducer);
  const [isCharged, setIsCharged] = useState(false);
  const [isCharging, setIsCharging] = useState(false);

  const [ownerData, setOwnerData] = useState();

  const [fileData, setFileData] = useState({
    owner: data.data._id,
    title: "",
    author: "",
    genre: "",
    urlGif: "",
  });
  // const [file, setFile] = useState("");
  function send(e) {
    e.preventDefault();
    setIsCharging(true);
    uploadGif(fileData).then((res) => {
      dispatch(realoadHomeAction(true));
      setIsCharging(false);
      dispatch(unDisplayUploadAction());
    });
  }
  function handleChange(e) {
    setFileData({
      ...fileData,

      [e.target.name]: e.target.value,
    });
  }
  function handleChangeSelect(e) {
    setFileData({
      ...fileData,
      genre: e.value,
    });
  }

  function handleGifUploadChange(e) {
    // e.preventDefault();
    console.log(e.target.files[0]);
    const form = new FormData();
    form.append("file", e.target.files[0]);
    form.append("upload_preset", "ml_default");
    form.append("cloud_name", "daiejrif5");

    axios
      .post(`https://api.cloudinary.com/v1_1/daiejrif5/image/upload/`, form)
      .then((res) => {
        const { data } = res;

        setFileData({
          ...fileData,
          urlGif: data.url,
        });
        setIsCharged(true);
        console.log("reponse", fileData);
      });
  }
  const options = [
    { value: "Humor", label: "Humor" },
    { value: "Films", label: "Films" },
    { value: "Party", label: "Party" },
    { value: "Drama", label: "Drama" },
  ];
  const customStyles = {
    option: (provided) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: "green",
      padding: 20,
    }),
  };

  return (
    <>
      <div
        onClick={() => dispatch(unDisplayUploadAction())}
        className="modal-background"
      ></div>
      <div className="track-upload">
        <button onClick={() => console.log(fileData)}></button>
        <form onSubmit={send}>
          <Row>
            <Col xs={12} md={6} className="track-update">
              <h2 className="titleUpdate">Upload track</h2>
              <InputText
                type="text"
                id="title"
                label="Title *"
                value={fileData.title}
                placeholder="Type title"
                handleChange={handleChange}
              />
              <InputText
                type="text"
                id="author"
                label="Author *"
                value={fileData.author}
                placeholder="Type author"
                handleChange={handleChange}
              />

              <Select
                width="500px"
                menuColor="red"
                styles={customStyles}
                onChange={handleChangeSelect}
                options={options}
                value={{ label: fileData.genre, value: fileData.genre }}
              />

              <div className="xl-separator" />

              <Col
                xs={12}
                md={6}
                lg={6}
                className="position-relative flex-column d-flex justify-content-center"
              >
                {isCharged ? (
                  <>
                    <Col className="uploaded-file">
                      <h3>Gif changed</h3>
                      {/* <img
                      src={trackData.urlCover}
                      alt="uploaded"
                      className="existing-image"
                    /> */}
                    </Col>
                  </>
                ) : (
                  <>
                    <h5>Upload Gif:</h5>
                    <input
                      type="file"
                      name="file"
                      onChange={handleGifUploadChange}
                      className="upload-file-input"
                    />
                    <div className="upload-file-container">
                      <h1>+</h1>
                    </div>
                    {/* <div className="upload-file-container">
                    <img
                      src={trackData.urlCover}
                      alt="uploaded"
                      className="existing-image"
                    />
                  </div> */}
                  </>
                )}
              </Col>
            </Col>
          </Row>
          <Button title="send" type="submit" />
        </form>
      </div>
    </>
  );
}

export default UploadModal;
