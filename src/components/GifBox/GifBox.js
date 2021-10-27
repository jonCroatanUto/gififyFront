import React from "react";
import "./style.css";
function GifBox({ gifData }) {
  const { _id, urlGif, title } = gifData;

  return (
    <div className="gifContainer" key={`div${_id}`}>
      <h4>{title}</h4>
      <img
        key={_id}
        src={urlGif}
        width="200"
        height="200"
        frameBorder="0"
        className="giftImage"
        allowFullScreen
      />
    </div>
  );
}
export default GifBox;
