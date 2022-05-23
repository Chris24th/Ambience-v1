import React from "react";
import MainHeader from "./Components/MainHeader";
import MainLogo from "./Components/mlogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please Fillout");
      return;
    }
    // onAdd({ text, day, reminder })
    setEmail("");
    setPass("");
  };
  return (
    <div className="login-container">
      <div className="register-box">
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Email</label>
            <input
              className="input-style"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              className="input-style"
              type="text"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Confirm Password</label>
            <input
              className="input-style"
              type="text"
              value={confirmPassword}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <input
              type="submit"
              value="REGISTER"
              className="btn btn-block-login"
            />
          </Link>
        </form>
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </div>
      <div>
        <img
          src={MainLogo}
          className="mainLogo"
          style={{
            size: "300px",
            width: "554px",
            height: "526px",
          }}
          alt="error"
        />
      </div>
    </div>
  );
}

export default Register;
