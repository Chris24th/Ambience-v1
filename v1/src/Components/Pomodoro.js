import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import Countdown from "react-countdown";
import beeping from "../Sound/beeping.mp3";
import useSound from "use-sound";

const Pomodoro = () => {
  const [showBreak, setShowBreak] = useState(false);
  const [showWork, setShowWork] = useState(true);
  const [pTimer, setPTimer] = useState("");
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [now, setNow] = useState();
  const [countDownDate, setCountDownDate] = useState();
  const [distance, setDistance] = useState();

  useEffect(() => {
    if (showWork === true) {
      setPTimer("55:00");
    } else {
      setPTimer("10:00");
    }
  });

  const onStart = () => {
    if (showWork === true) setCountDownDate(new Date().getTime() + 3301000);
    else setCountDownDate(new Date().getTime() + 601000);
  };
  const onWork = () => {
    setShowBreak(false);
    setShowWork(true);
    setCountDownDate();
  };
  const onBreak = () => {
    setShowWork(false);
    setShowBreak(true);
    setCountDownDate();
  };

  useEffect(() => {
    const beep = new Audio(beeping);
    beep.volume = 0.01;
    setNow(new Date().getTime());
    setDistance(countDownDate - now);
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    if (!countDownDate && showWork === true) {
      setMinutes(55);
      setSeconds(0);
    } else if (!countDownDate && showBreak === true) {
      setMinutes(10);
      setSeconds(0);
    }
    if (distance < 0) {
      setCountDownDate();
      beep.play();
    }
  });

  return (
    <div>
      <header className="container-pomodoro">
        <div className="header-pomodoro">
          <label onClick={onWork} className="work-break">
            {showWork ? <div className="active">Work</div> : "Work"}
          </label>
          <div className="work-break-div"></div>
          <label onClick={onBreak} className="work-break">
            {showBreak ? <div className="active">Break</div> : "Break"}
          </label>
        </div>
        <label className="timer">
          {minutes} : {seconds}
        </label>
        <button onClick={onStart} className="startBtn">
          Start
        </button>
      </header>
    </div>
  );
};

export default Pomodoro;
