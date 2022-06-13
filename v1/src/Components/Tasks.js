import { BiNotepad } from "react-icons/bi";
import { useState } from "react";

const Tasks = ({ addClicked, showAdd }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !day) {
      alert("Please fillout");
      return;
    }
    addClicked(text, day);
    setText("");
    setDay("");
  };

  return (
    <div
      style={{
        backgroundColor: "inherit",
      }}
    >
      <header className="header-task">
        <h1>
          <BiNotepad className="icon-task" /> To Do List
        </h1>
        <button onClick={() => setShowAddTask(!showAddTask)} className="btn">
          {showAddTask ? "Close" : "Add"}
        </button>
      </header>

      {showAddTask && (
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Task</label>
            <input
              className="input-style"
              type="text"
              placeholder="Add Task"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Day & Time</label>
            <input
              className="input-style"
              type="text"
              placeholder="Add Day & Time"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
      )}
    </div>
  );
};

export default Tasks;
