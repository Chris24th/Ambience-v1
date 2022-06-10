import { FaTimes } from "react-icons/fa";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <div className="task">
          <input type="checkbox" className="check-task" />
          <div className="task-info">
            <h3>{task.text}</h3>
            <FaTimes className="x-btn" onClick={() => onDelete(task.id)} />
          </div>
          <p>{task.day}</p>
        </div>
      ))}
    </>
  );
};

export default Tasks;
