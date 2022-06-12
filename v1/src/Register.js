import MainLogo from "./Components/mlogo.svg";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Register({ Login }) {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [user, setUser] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!newEmail || !newPassword || !confirmPassword) {
      alert("Please Fillout");
      return;
    } else {
      if (newPassword === confirmPassword) {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            newEmail,
            newPassword
          );
          alert("You created an Account!");
          navigate("/");
        } catch (error) {
          alert(
            "Please try again; \n► Email should be valid.\n► Passwords should have at least 6 characters."
          );
        }
        return;
      } else {
        alert("Passwords do not match!");
        return;
      }
    }
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
            <p style={{ color: "#907878" }}>
              Password must be at least 6 characters.
            </p>
          </div>
          <div className="form-control">
            <label>Confirm Password</label>
            <input
              className="input-style"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="REGISTER"
            className="btn btn-block-login"
          />
        </form>
        <Link to="/login" style={{ textDecoration: "none" }}>
          I already have an Account
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
