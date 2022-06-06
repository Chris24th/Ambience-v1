import React from "react";
import { db, auth } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const ToDo = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [taskText, setTaskText] = useState([]);
  const [taskTime, setTaskTime] = useState([]);
  const [currentEmailFS, setCurrentEmailFS] = useState("");
  const userCollectionRef = collection(db, "users");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setCurrentEmailFS(user.email);
    users.map((userFS) => {
      if (userFS.email === user.email) {
        setTaskText(userFS.tasksDB);
        setTaskTime(userFS.time);
      }
    });
  });

  // useEffect(() => {
  //   setCount(taskText.length);
  //   while (count > 0) {
  //     setCount(count - 1);
  //   }
  // });

  const loop = () => {};

  return (
    <div className="task">
      <input type="checkbox" className="check-task" />
      {taskText.length}
      {count}
      <div className="task-info">
        <h3>{taskText[0]}</h3>
        <FaTimes
          className="x-btn"
          // onClick={() => onDelete(task.id)}
        />
      </div>
      <p>{taskTime[0]}</p>
    </div>
  );
};

export default ToDo;
