import React from "react";
import MainHeader from "./Components/MainHeader";
import MainLogo from "./Components/mlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const check = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please Fillout");
      return;
    }
    await getDocs(usersCollectionRef, {
      Email: email,
      Password: password,
    });
    users.map((user) => {
      if (user.Email === email && user.Password === password) {
        alert("You successfully logged in");
        navigate("/");
        check = true;
      }
    });
    alert("Please check your credentials.");
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
          <input type="submit" value="LOGIN" className="btn btn-block-login" />
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
