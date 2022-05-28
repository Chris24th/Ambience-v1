import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import MainHeader from "./Components/MainHeader";
import Pomodoro from "./Components/Pomodoro";
import AllAudio from "./Components/AllAudio";
import Login from "./Login";
import { db, auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Main() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "CPE366 - Assignment",
      day: "May 17, 8:30am",
    },
    {
      id: 2,
      text: "CPE355 - Study for quiz",
      day: "May 16, 12:30pm",
    },
    {
      id: 3,
      text: "CPE355 - Main user interface",
      day: "May 13, 4:30pm",
    },
  ]);

  //Add task
  const addTask = (task) => {
    const id = 5;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <div>
      <MainHeader />
      <div className="arrange">
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
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} />
        ) : (
          "No Tasks to show"
        )}
      </div>
    </div>
  );
}

export default Main;
