import React from "react";

import "./navbar.css"
import mail from "../assets/mail.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">CONTACT ME</a>
          </li>
              </ul>
              <ul className="socials">
              <li><img src={mail} alt="" /></li>
              <li><img src={github} alt="" /></li>
              <li><img src={linkedin} alt="" /></li>
          </ul>

          </nav>
    </div>
  );
}

export default Navbar;
