import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Menu = ({ onMenu }) => {
  return (
    <div className="ddMenu">
      <Dropdown.Item as="button" className="menu-btns">
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            backgroundColor: "inherit",
            color: "inherit",
          }}
        >
          About Us
        </Link>
      </Dropdown.Item>
      <Dropdown.Item as="button" className="menu-btns">
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            backgroundColor: "inherit",
            color: "inherit",
          }}
        >
          Contact Us
        </Link>
      </Dropdown.Item>
      <Dropdown.Item as="button" className="menu-btns">
        <Link
          to="/help"
          style={{
            textDecoration: "none",
            backgroundColor: "inherit",
            color: "inherit",
          }}
        >
          Help
        </Link>
      </Dropdown.Item>
    </div>
  );
};

export default Menu;
