import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import MainHeader from "./Components/MainHeader";
import Pomodoro from "./Components/Pomodoro";
import AllAudio from "./Components/AllAudio";
import { db, auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

function Main() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [userID, setUserID] = useState("");
  const userCollectionRef = collection(db, "users");
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([{ id: 0, text: "N / A", day: "0" }]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setCount] = useState(0);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (!user) {
      navigate("/login");
    } else {
      users.map((userFS) => {
        if (userFS.id === user.email) {
          setTaskText(userFS.tasksArr);
          setTaskTime(userFS.timeArr);
          setUserID(userFS.id);
        }
        // else {
        //   onCreate();
        // }
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
    setTasks([{ text: taskText[0], day: taskTime[0] }]);
    while (i < count) {
      const newTask = {
        text: taskText[i],
        day: taskTime[i],
      };
      setTasks((tasks) => [...tasks, newTask]);
      i++;
    }
  });

  const onDelete = async (task, time) => {
    await updateDoc(doc(userCollectionRef, userID), {
      tasksArr: arrayRemove(task),
      timeArr: arrayRemove(time),
    });
  };

  const onCreate = async () => {
    await setDoc(doc(db, "users", user.email), {
      tasksArr: "",
      timeArr: "",
    });
  };

  const onAdd = async (task, time) => {
    await updateDoc(doc(userCollectionRef, userID), {
      tasksArr: arrayUnion(task),
      timeArr: arrayUnion(time),
    });
  };

  // const addClicked = () => {
  //   setShowAddTask(!showAddTask);
  // };

  return (
    <div>
      <MainHeader />
      <div className="arrange">
        {userID}
        <div className="container-pomodoro">
          <Pomodoro />
        </div>
        <div className="container-allAudio">
          <AllAudio />
        </div>
      </div>
      <div className="container-tasks">
        <Header addClicked={onAdd} />
        {taskText == ""
          ? "No task to show"
          : tasks.map((task) => (
              <div className="task">
                <input type="checkbox" className="check-task" />
                <div className="task-info">
                  <h3>{task.text}</h3>
                  <FaTimes
                    className="x-btn"
                    onClick={() => onDelete(task.text, task.day)}
                  />
                </div>
                <p>{task.day}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Main;
