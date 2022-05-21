import React from "react";
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
    <div className="container-login">
      <h1>Login</h1>
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
        <input type="submit" value="Login" className="btn btn-block" />
      </form>
    </div>
  );
}

export default Login;
