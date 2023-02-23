import React from "react";
import { motion, useScroll } from "framer-motion";

import About from "./About";
import "./header.css";
import arrowDown from "../assets/arrowdown.svg";

function Header() {
  return (
      <section className="hero-section">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="wrapper-header"
        >
          <h1>Johannes Svanborg</h1>
          <h2>
            Full Stack Developer <br /> & <br /> Cloud Architect
          </h2>
        </motion.div>
        <div className="arrow-down">
          <a href="/About">
            <img src={arrowDown} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
