import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./navbar.css";
import mail from "../assets/mail.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#32385A",
    },
  },
});

function Navbar() {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <ul className="navbar-menu">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li className="button">
            <ThemeProvider theme={theme}>
              <Button color="primary" variant="contained">Contact Me</Button>
            </ThemeProvider>
          </li>
        </ul>
        <ul className="socials">
          <li>
            <img src={mail} alt="" />
          </li>
          <li>
            <img src={github} alt="" />
          </li>
          <li>
            <img src={linkedin} alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
