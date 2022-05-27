// import AboutUs from './AboutUs'
import MainLogo from "./mlogo.svg";
import Menu from "./Menu";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <header className="header container-header">
        <Dropdown>
          <Dropdown.Toggle style={{ backgroundColor: "inherit" }}>
            <AiOutlineMenu
              className="icon-menu"
              onClick={() => setOpen(!open)}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>{open ? <Menu /> : ""}</Dropdown.Menu>
        </Dropdown>
        <Link to="/">
          <img src={MainLogo} className="mainLogo" alt="error" />
        </Link>
        <Link onClick={logout} to="/login" style={{ textDecoration: "none" }}>
          Logout
        </Link>
      </header>
    </div>
  );
};

export default MainHeader;
