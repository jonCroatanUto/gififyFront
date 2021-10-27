import React from "react";
import "./styles.css";
function Button({ title, handleEdit, type }) {
  return handleEdit ? (
    <button type={type} className="button" onClick={handleEdit}>
      {title}
    </button>
  ) : (
    <button type={type} className="button">
      {title}
    </button>
  );
}

export default Button;
