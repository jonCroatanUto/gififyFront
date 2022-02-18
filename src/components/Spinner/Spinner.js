import React from "react";
import "./spinner.css";
function Spinner() {
  return (
    <div className="spinnerWrapper">
      <div className="fulfilling-bouncing-circle-spinner">
        <div className="circle"></div>
        <div className="orbit"></div>
      </div>
    </div>
  );
}
export default Spinner;
