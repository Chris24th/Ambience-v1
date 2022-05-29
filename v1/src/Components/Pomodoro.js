import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Pomodoro = () => {
  const [showBreak, setShowBreak] = useState(false);
  const [showWork, setShowWork] = useState(true);
  const [pTimer, setPTimer] = useState("");

  useEffect(() => {
    if (showWork === true) {
      setPTimer("55:00");
    } else {
      setPTimer("10:00");
    }
  });

  const onStart = () => {
    alert("starting");
  };
  const onWork = () => {
    setShowBreak(false);
    setShowWork(true);
  };
  const onBreak = () => {
    setShowWork(false);
    setShowBreak(true);
  };
  // useEffect = () => {

  // if (showWork === true) {
  //   setPTimer("55:00");
  // } else {
  //   setPTimer("10:00");
  // }
  // };
  return (
    <div>
      <header>
        <div className="header-pomodoro">
          <label onClick={onWork} className="work-break">
            Work
          </label>
          <label onClick={onBreak} className="work-break">
            Break
          </label>
        </div>
        <label className="timer">{pTimer}</label>
        <button onClick={onStart} className="startBtn">
          Start
        </button>
      </header>
    </div>
  );
};

export default Pomodoro;
