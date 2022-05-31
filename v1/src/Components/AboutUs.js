import React from "react";
import MainHeader from "./MainHeader";
import MainLogo from "./mlogo.svg";
import { Link } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";

function AboutUs() {
  return (
    <div>
      <header className="header-login">
        <Link to="/">
          <img src={MainLogo} className="mainLogo" alt="error" />
        </Link>
      </header>
      <div className="container-about">
        <h1>ABOUT US</h1>
        <p style={{ fontSize: "18px" }}>
          Ambience is a website for studying pace. blahblah
        </p>
      </div>
      <br />
      <br />
      <div className="container-team ">
        <div className="chris">
          <h3>Christopher M. Espenida</h3>
          <p>Email: christopher.espenida@cit.edu</p>
        </div>
        <div className="name-divider"></div>
        <div className="kent">
          <h3>Kent Astilla</h3>
          <p>Email: kent.astilla@cit.edu</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
