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
import { Link } from "react-router-dom";
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
          <Row xs={3} md={6} lg={10}>
            {gifs.map((gif, index) => {
              return <GifBox key={index} gifData={gif} />;
            })}
          </Row>
        </Container>
      </div>
      {uploadModalState && <UploadModal />}
      {data === null ? (
        <Link style={{ textDecoration: "none" }} to="/memes">
          <Button title="MAke your memes" type="button" />
        </Link>
      ) : (
        <Button handleEdit={openUpload} title="Upload" type="button" />
      )}
    </>
  );
}

export default Home;
