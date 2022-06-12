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
  getDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

function Main() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [users, setUsers] = useState([]);
  const [taskText, setTaskText] = useState([""]);
  const [taskTime, setTaskTime] = useState([""]);
  const [userID, setUserID] = useState("");
  const userCollectionRef = collection(db, "users");
  const auth = getAuth();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([{ id: 0, text: "N / A", day: "0" }]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setCount] = useState(0);
  const [found, setFound] = useState(false);
  const [userEmail, setUserEmail] = useState();

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    } else {
      users.map((userFS) => {
        if (userFS.id === currentUser.email) {
          setTaskText(userFS.tasksArr);
          setTaskTime(userFS.timeArr);
          setUserEmail(currentUser.email);
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
    onCreate();
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
    await updateDoc(doc(userCollectionRef, userEmail), {
      tasksArr: arrayRemove(task),
      timeArr: arrayRemove(time),
    });
    window.location.reload(false);
  };

  const onCreate = async () => {
    setUserEmail(auth.currentUser.email);
    const docRef = doc(db, "users", userEmail);
    const docSnap = getDoc(docRef);
    // const newEmail = auth.currentUser.email;
    getDoc(doc(db, "users", userEmail)).then((docSnap) => {
      if (docSnap.exists()) {
      } else {
        setDoc(doc(userCollectionRef, userEmail), {
          tasksArr: [],
          timeArr: [],
        });
      }
    });
  };

  const onAdd = async (task, time) => {
    await updateDoc(doc(userCollectionRef, userEmail), {
      tasksArr: arrayUnion(task),
      timeArr: arrayUnion(time),
    });
    window.location.reload(false);
  };

  return (
    <div>
      <MainHeader />
      <div className="arrange">
        <div className="hello">
          <p>Hello, {userEmail}</p>
        </div>
        <div>
          <Pomodoro />
        </div>
        <div>
          <AllAudio />
        </div>
      </div>
      <div className="container-tasks">
        <Header addClicked={onAdd} />
        {!taskText
          ? "No task to show"
          : tasks.map((task) => (
              <div className="task">
                <input type="checkbox" />
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
