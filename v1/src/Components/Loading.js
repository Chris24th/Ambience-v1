import React from "react";
import MainLogo from "../images/mlogo.svg";
import Load from "../images/Load.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={MainLogo} alt="error" />
    </div>
  );
};

export default Loading;
