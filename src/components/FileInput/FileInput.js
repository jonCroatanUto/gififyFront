import React from "react";
import "./fileInput.css";
function FileInput({ type, name, handleChange }) {
  return (
    <div className="inputWrepper">
      <input
        type={type}
        name={name}
        onChange={handleChange}
        className="custom-file-input"
      />
    </div>
  );
}
export default FileInput;
