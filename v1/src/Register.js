import React from "react";
import MainHeader from "./Components/MainHeader";
import MainLogo from "./Components/mlogo.svg";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Register() {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const isEmpty = useState(true);

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      Email: newEmail,
      Password: newPassword,
    });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

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
      {users.map((user) => {
        return (
          <div style={{ display: "block" }}>
            {" "}
            <h3>Email: {user.Email}</h3>
            <h3>Password: {user.Password}</h3>
            <h3 style={{ display: "block" }}>Tasks: {user.Tasks}</h3>
            <h3 style={{ display: "block" }}>Time: {user.Time}</h3>
          </div>
        );
      })}
      <div className="register-box">
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Email</label>
            <input
              className="input-style"
              type="text"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              className="input-style"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Confirm Password</label>
            <input
              className="input-style"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          {/* <Link to="/login" style={{ textDecoration: "none" }}> */}
          <input
            type="submit"
            value="REGISTER"
            className="btn btn-block-login"
          />
          {/* </Link> */}
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
