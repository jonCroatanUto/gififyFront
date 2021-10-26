import { getAllGifs } from "../../services/serverCalls";
import React, { useState, useEffect } from "react";
import UploadModal from "../../components/UploadModal/UploadModal";
function Home() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getAllGifs().then((res) => {
      const { data } = res;
      setGifs(data.gifs);
    });
  }, []);
  const fetchAllGifs = () => console.log(gifs);
  return (
    <>
      <div>
        <UploadModal />
      </div>
      <div>
        {gifs.map((gif) => {
          return (
            <iframe
              key={gif._id}
              src={gif.urlGif}
              width="200"
              height="200"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          );
        })}
      </div>
    </>
  );
}

export default Home;
