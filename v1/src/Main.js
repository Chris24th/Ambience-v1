import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import MainHeader from "./Components/MainHeader";
import Pomodoro from "./Components/Pomodoro";
import AllAudio from "./Components/AllAudio";
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
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  // setUser(auth.currentUser);

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
    setTasks([
      { id: 0, text: taskText[0], day: taskTime[0] },
      { id: 1, text: taskText[1], day: taskTime[1] },
    ]);
  });
  // });

  // const [tasks, setTasks] = useState([
  // {
  //   id: 1,
  //   text: "text1",
  //   day: "May 17, 8:30am",
  // },
  // {
  //   id: 2,
  //   text: "CPE355 - Study for quiz",
  //   day: "May 16, 12:30pm",
  // },
  // {
  //   id: 3,
  //   text: "CPE355 - Main user interface",
  //   day: "May 13, 4:30pm",
  // },
  // ]);

  //delete task
  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

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
        {/*{users.map((userFS) => {
          if (userFS.email === user.email) {
            // setTasks.text("test");
            // return (
            //   <div style={{ display: "inline-block" }}>
            //     {userFS.task1}
            //     <br /> {userFS.time1}
            //     <br /> {userFS.email}
            //     <br /> {user.email}
            //   </div>
            // );
          }
        })} */}
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
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            // onDelete={deleteTask}
          />
        ) : (
          "No Tasks to show"
        )}
      </div>
    </div>
  );
}

export default Main;
