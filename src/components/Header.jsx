import React from "react";

import "./header.css"
import arrowDown from "../assets/arrowdown.svg"

function Header() {
  return (
    <div>
      <div className="wrapper-header">
        <h1>Johannes Svanborg</h1>
        <h2>
          Full Stack Developer <br /> & <br /> Cloud Architect
        </h2>
      </div>
      <div className="arrow-down">
        <img src={arrowDown} alt="" />
      </div>
    </div>
  );
}

export default Header;
