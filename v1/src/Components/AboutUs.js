import { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
import MainLogo from "../images/mlogo.svg";
import Chris from "../images/1.png";
import Kent from "../images/2.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { IoChevronBackSharp } from "react-icons/io5";
import Loading from "./Loading";

function AboutUs() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const logout = async () => {
    await signOut(auth);
  };
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <>
      {loading === false ? (
        <div>
          <header className="header-about">
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <button className="backBtn">
                <IoChevronBackSharp className="icon-back" />
                <p> Back </p>
              </button>
            </Link>
            <img src={MainLogo} className="mainLogo" alt="error" />
            <label className="nav">
              <Link
                onClick={logout}
                to="/login"
                style={{ textDecoration: "none" }}
              >
                Sign out
              </Link>
            </label>
          </header>
          <div className="container-about">
            <h1>ABOUT US</h1>
            <p>
              AMBIENCE is a study companion website that aims to motivate and
              improve students' study habits. It was designed, developed, and
              deployed by two Cebu Institute of Technology – University Computer
              Engineering students from Cebu and Eastern Samar. We have been
              where you are as we struggle with it, as well. Our goal is to
              assist students in unlocking their abilities and creativity in
              meeting academic requirements, all in one comfortable environment.
            </p>
          </div>
          <br />
          <br />
          <div className="container-team ">
            <div className="chris">
              <img src={Chris} className="teamPics" alt="error" />
              <h3>Christopher M. Espenida</h3>
              <p>Email: christopher.espenida@cit.edu</p>
            </div>
            <div className="name-divider"></div>
            <div className="kent">
              <img src={Kent} className="teamPics" alt="error" />
              <h3>Kent Astilla</h3>
              <p>Email: kent.astilla@cit.edu</p>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default AboutUs;
