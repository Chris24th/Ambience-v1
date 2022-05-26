import React from "react";
import MainHeader from "./Components/MainHeader";
import MainLogo from "./Components/mlogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
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
      <div className="login-box">
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
              type="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <input
              type="submit"
              value="LOGIN"
              className="btn btn-block-login"
            />
          </Link>
        </form>
        <div className="login-under">
          <div>
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </div>
          <div>
            <Link to="/forgot-password" style={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
