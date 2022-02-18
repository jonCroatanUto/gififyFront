import React from "react";
import "./fileInput.css";
function FileInput({ type, name, handleChange }) {
  return (
    <input
      type={type}
      name={name}
      onChange={handleChange}
      className="custom-file-input"
    />
  );
}
export default FileInput;
