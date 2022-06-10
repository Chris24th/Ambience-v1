import { BiNotepad } from "react-icons/bi";

const Header = ({ addClicked, showAdd }) => {
  return (
    <div>
      <header className="header">
        <h1>
          <BiNotepad className="icon-task" /> To Do List
        </h1>
        <button onClick={addClicked} className="btn">
          {showAdd ? "Close" : "Add"}
        </button>
      </header>
    </div>
  );
};

export default Header;
