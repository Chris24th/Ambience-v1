import MainLogo from "./Components/mlogo.svg";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Register({ Login }) {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, {
  //     Email: newEmail,
  //     Password: newPassword,
  //   });
  // };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!newEmail || !newPassword || !confirmPassword) {
      alert("Please Fillout");
      return;
    } else {
      if (newPassword === confirmPassword) {
        await addDoc(usersCollectionRef, {
          Email: newEmail,
          Password: newPassword,
        });
        alert("You created an Account! Please Log in");
        navigate("/login");
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
          {/* <Link  to="/login" style={{ textDecoration: "none" }}> */}
          <input
            type="submit"
            value="REGISTER"
            className="btn btn-block-login"
            // path="/login"
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
