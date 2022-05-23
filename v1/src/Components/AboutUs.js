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
        <h1>ABOUT US</h1>
        <p style={{ fontSize: "20px" }}>
          Ambience is a website for studying pace. blahblah
        </p>
      </div>
      <br />
      <br />
      <div className="container-team">
        <div className="chris">
          <p>
            Christopher M. Espenida
            <br />
            Email: christopher.espenida@cit.edu
          </p>
        </div>
        <div className="kent">
          <p>
            Kent Astilla
            <br />
            Email: kent.astilla@cit.edu
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
