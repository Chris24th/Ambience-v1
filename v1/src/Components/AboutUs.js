import React from "react";
import MainHeader from "./MainHeader";
import MainLogo from "./mlogo.svg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <header className="header-login">
        <Link to="/">
          <img src={MainLogo} className="mainLogo" alt="error" />
        </Link>
      </header>
      <div className="container-about">
        <h1>About Us</h1>
        <p>Ambience is a website for studying pace. blahblah</p>
      </div>
    </div>
  );
}

export default AboutUs;
