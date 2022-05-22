import React from "react";
import MainHeader from "./MainHeader";
import MainLogo from "./mlogo.svg";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div>
      <header className="header-login">
        <Link to="/">
          <img src={MainLogo} className="mainLogo" alt="error" />
        </Link>
      </header>
      <div className="container-contact">
        <h1>Our Team</h1>
        <br />
        <br />
        (Picture)
        <p>
          Christopher Espenida
          <br />
          Contact No: +639274478614
          <br /> Email: christopheresepenida@gmail.com
        </p>
        <br />
        <br />
        (Picture)
        <p>
          Kent Astilla
          <br />
          Contact No: +63
          <br /> Email: astillakentrey@gmail.com
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
