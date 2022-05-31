import React from "react";
import MainHeader from "./MainHeader";
import MainLogo from "./mlogo.svg";
import Chris from './1.png'
import Kent from './2.png'
import { Link } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";

function AboutUs() {
  return (
    <div>
      <header className="header-about">
        <Link to="/">
          <img src={MainLogo} className="mainLogo" alt="error" />
        </Link>
      </header>
      <div className="container-about">
        <h1>ABOUT US</h1>
        <p style={{ fontSize: "18px" }}>
          Ambience is a website for studying pace. blahblah blahblah blahblah blahblah
          blahblah blahblah blahblah blahblah
        </p>
      </div>
      <br />
      <br />
      <div className="container-team ">
        <div className="chris">
        <img src={Chris} className="teamPics" alt="error" />
          <h3>Christopher M. Espenida</h3>
          <p>Email: christopher.espenida@cit.edu</p>
        </div>
        <div className="name-divider"></div>
        <div className="kent">
        <img src={Kent} className="teamPics" alt="error" />
          <h3>Kent Astilla</h3>
          <p>Email: kent.astilla@cit.edu</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
