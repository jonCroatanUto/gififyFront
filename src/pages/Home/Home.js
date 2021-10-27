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
} from "../../redux/displaysReducer/action";

function Home() {
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

      <Container>
        <Row sm xs={3} md={6} lg={12}>
          {gifs.map((gif, index) => {
            return <GifBox key={index} gifData={gif} />;
          })}
        </Row>
      </Container>
      {uploadModalState && <UploadModal />}

      <Button handleEdit={openUpload} title="Upload" type="submit" />
    </>
  );
}

export default Home;
