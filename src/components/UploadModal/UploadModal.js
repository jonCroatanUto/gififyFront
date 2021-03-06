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
import Spinner from "../../components/Spinner";
import FileInput from "../FileInput";
import ModalHoc from "../hocs/ModalHoc/ModalHoc";

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
  // function handleChangeSelect(e) {
  //   setFileData({
  //     ...fileData,
  //     genre: e.value,
  //   });
  // }

  function handleGifUploadChange(e) {
    // e.preventDefault();
    setIsCharging(true);
    console.log(e.target.files[0]);
    const form = new FormData();
    form.append("file", e.target.files[0]);
    form.append("upload_preset", "ml_default");
    form.append("folder", "memesAndGifs");

    axios
      .post(`https://api.cloudinary.com/v1_1/daiejrif5/image/upload/`, form)
      .then((res) => {
        const { data } = res;

        setFileData({
          ...fileData,
          urlGif: data.url,
        });
        setIsCharging(false);
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
    <form onSubmit={send}>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h2 className="titleUpdate">Upload track</h2>
            <InputText
              type="text"
              id="title"
              label="Title "
              value={fileData.title}
              placeholder="Type title"
              handleChange={handleChange}
            />
            <InputText
              type="text"
              id="author"
              label="Author "
              value={fileData.author}
              placeholder="Type author"
              handleChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          {isCharging ? (
            <>
              <Col xs={4} md={4} lg={4}></Col>
              <Col xs={4} md={4} lg={4}>
                <Spinner />
              </Col>
              <Col xs={4} md={4} lg={4}></Col>
            </>
          ) : isCharged ? (
            <>
              <h3 className="titleUpdateShort">
                File ready click SEND to confirm
              </h3>
              <Col xs={4} md={4} lg={4}></Col>
              <Col xs={4} md={4} lg={4}>
                <img
                  src={fileData.urlGif}
                  alt="uploaded"
                  className="existing-image"
                />
              </Col>
              <Col xs={4} md={4} lg={4}></Col>
            </>
          ) : (
            <>
              <h5 className="titleUpdate">Upload Gif:</h5>

              <Col xs={4} md={4} lg={4}></Col>
              <Col xs={4} md={4} lg={4}>
                <FileInput
                  type="file"
                  name="file"
                  handleChange={handleGifUploadChange}
                />
              </Col>
              <Col xs={4} md={4} lg={4}></Col>
            </>
          )}
        </Row>
        <Row className="justify-content-center">
          {isCharged ? (
            <>
              <Col className="text-center">
                <Button title="SEND" type="submit" />
              </Col>
              <Col className="text-center">
                <Button
                  handleEdit={() => dispatch(unDisplayUploadAction())}
                  title="CANCEL"
                  type="button"
                />
              </Col>
            </>
          ) : (
            <>
              <Col xs={4} md={4} lg={4}></Col>
              <Col xs={4} md={4} lg={4}>
                <Button title="SEND" type="submit" />
              </Col>
              <Col xs={4} md={4} lg={4}></Col>
            </>
          )}
        </Row>
      </Container>
    </form>
  );
}

export default ModalHoc(UploadModal);
