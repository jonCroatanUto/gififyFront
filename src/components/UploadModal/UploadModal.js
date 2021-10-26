import React, { useState } from "react";
import axios from "axios";
function UploadModal() {
  const [isCharged, setIsCharged] = useState(false);
  const [file, setFile] = useState();
  function handleGifUploadChange(e) {
    setIsCharged(true);
    setFile(e.target.files[0]);
  }
  async function send() {
    console.log(file);
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "ml_default");
    form.append("cloud_name", "daiejrif5");

    await axios
      .post(`https://api.cloudinary.com/v1_1/daiejrif5/image/upload/`, form)
      .then(() => console.log("success"));
  }
  return (
    <div>
      {isCharged ? <p>is Charged</p> : <p>not Charged</p>}
      <input type="file" name="track" onChange={handleGifUploadChange} />
      <button onClick={send}>upload</button>
    </div>
  );
}

export default UploadModal;
