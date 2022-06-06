import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import MainHeader from "./Components/MainHeader";
import Pomodoro from "./Components/Pomodoro";
import AllAudio from "./Components/AllAudio";
import ToDo from "./Components/ToDo";
import { db, auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Main() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [taskText, setTaskText] = useState([]);
  const [taskTime, setTaskTime] = useState([]);
  const [currentEmailFS, setCurrentEmailFS] = useState("");
  const userCollectionRef = collection(db, "users");
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([{ id: 0, text: "N / A", day: "0" }]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (!user) {
      navigate("/login");
    } else {
      setCurrentEmailFS(user.email);
      users.map((userFS) => {
        if (userFS.email === user.email) {
          setTaskText(userFS.tasksDB);
          setTaskTime(userFS.time);
        }
      });
    }
  });

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  useEffect(() => {
    let i = 1;
    setCount(taskText.length);
    setTasks([{ id: 0, text: taskText[0], day: taskTime[0] }]);
    while (i < count) {
      const newTask = {
        id: x + i,
        text: taskText[x + i],
        day: taskTime[x + 1],
      };
      setTasks((tasks) => [...tasks, newTask]);
      i++;
    }
  });
  // });

  const loop = (i) => {
    setTasks((tasks) => [
      ...tasks,
      { id: x + 1, text: taskText[x + i], day: taskTime[x + 1] },
    ]);
  };
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "text1",
  //     day: "May 17, 8:30am",
  //   },
  //   {
  //     id: 2,
  //     text: "CPE355 - Study for quiz",
  //     day: "May 16, 12:30pm",
  //   },
  //   {
  //     id: 3,
  //     text: "CPE355 - Main user interface",
  //     day: "May 13, 4:30pm",
  //   },
  // ]);

  // delete task;
  const deleteTask = () => {};

  //Add task
  // const addTask = (task) => {
  //   const id = 5;
  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);
  // };

  return (
    <div>
      <MainHeader />
      <div className="arrange">
        {currentEmailFS}
        <div className="container-pomodoro">
          <Pomodoro />
        </div>
        <div className="container-allAudio">
          <AllAudio />
        </div>
      </div>
      <div className="container-tasks">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && (
          <AddTask
          // onAdd={addTask}
          />
        )}
        {!isEmpty ? "no task" : <Tasks tasks={tasks} onDelete={deleteTask} />}
      </div>
    </div>
  );
}

export default Main;
