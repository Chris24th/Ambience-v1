import React from "react";
import MainHeader from "./MainHeader";
import MainLogo from "./mlogo.svg";
import { Link } from "react-router-dom";

function Help() {
  return (
    <div>
      <header className="header-login">
        <Link to="/">
          <img src={MainLogo} className="mainLogo" alt="error" />
        </Link>
      </header>
      <div className="container-about">
        <h1>Need Help?</h1>
        <p>Submit your query to our email adress: help.ambience@gmail.com</p>
      </div>
    </div>
  );
}

export default Help;
