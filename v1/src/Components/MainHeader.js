// import AboutUs from './AboutUs'
import SignOut from "./SignOut";
import MainLogo from "./mlogo.svg";
import Menu from "./Menu";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

const MainHeader = ({ signOut }) => {
  const [open, setOpen] = useState(false);

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
        <Link to="/login" style={{ textDecoration: "none" }}>
          <SignOut onClick={signOut} />
        </Link>
      </header>
    </div>
  );
};

export default MainHeader;
