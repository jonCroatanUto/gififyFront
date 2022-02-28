import { getAllGifs } from "../../services/serverCalls";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UploadModal from "../../components/UploadModal";
import NavBar from "../../components/NavBar";
import GifBox from "../../components/GifBox";
import Button from "../../components/Button";
import { Container, Row, Col } from "react-bootstrap";
import {
  displayUploadAction,
  realoadHomeAction,
  unDisplayUploadAction,
} from "../../redux/displaysReducer/action";
import "./home.css";
import { BsFillCloudUploadFill } from "react-icons/bs";

function Home() {
  const { data } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { uploadModalState, realoadHome } = useSelector(
    (state) => state.displaysReducer
  );
  const [gifs, setGifs] = useState([]);
  // const [diplayUpload, setDisplayUpload] = useState(false);
  useEffect(() => {
    dispatch(realoadHomeAction(true));
  }, []);
  useEffect(() => {
    // console.log(uploadModalState);
    if (realoadHome) {
      getAllGifs().then((res) => {
        const { data } = res;
        setGifs(data.gifs);
      });
      dispatch(realoadHomeAction(false));
    }
  }, [realoadHome]);

  function openUpload() {
    dispatch(displayUploadAction());
  }

  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <Container>
          <Row className="justify-content-center">
            {data === null ? (
              <Col>
                <button
                  onClick={() => alert("singIn to upload any file")}
                  type="button"
                  className="buttonContainer"
                >
                  <div className="iconWrpper">
                    <BsFillCloudUploadFill size={50} />
                  </div>
                </button>
              </Col>
            ) : (
              <>
                <Col xs={12} md={6} lg={4}>
                  <button
                    className="buttonContainer"
                    onClick={openUpload}
                    title="Upload"
                    type="button"
                  >
                    <div className="iconWrpper">
                      <BsFillCloudUploadFill size={50} />
                    </div>
                  </button>
                </Col>

                {gifs.map((gif, index) => {
                  return (
                    <Col key={index} xs={12} md={6} lg={4}>
                      <GifBox key={index} gifData={gif} />
                    </Col>
                  );
                })}
              </>
            )}
          </Row>
        </Container>
      </div>
      {uploadModalState && <UploadModal />}
    </>
  );
}

export default Home;
