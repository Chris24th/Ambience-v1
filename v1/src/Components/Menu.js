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
        Contact Us
      </Dropdown.Item>
      <Dropdown.Item as="button" className="menu-btns">
        Help
      </Dropdown.Item>
    </div>
  );
};

export default Menu;
