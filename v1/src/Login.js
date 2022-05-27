import React from "react";
import MainLogo from "./Components/mlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "./firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const check = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please Fillout");
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }

    // if (currentuser.Email === email && user.Password === password) {
    // alert("You successfully logged in");
    // navigate("/");
    // check = true;
    // }
    alert("Please check your credentials.");
  };
  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div className="login-container">
      welcome,
      {/* {user?.email} */}
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
          <input type="submit" value="LOGIN" className="btn btn-block-login" />
        </form>
        <div className="login-under">
          <div>
            <Link to="/register" style={{ textDecoration: "none" }}>
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
