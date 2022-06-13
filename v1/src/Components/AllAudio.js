import { RangeStepInput } from "react-range-step-input";
import {
  AiOutlinePlayCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
// import {HiOutlineVolumeUp} from 'react-icons/hi'
import { BiRadio } from "react-icons/bi";
import { BsCloudRain } from "react-icons/bs";
import { GiTreeBranch } from "react-icons/gi";
import { GiCampfire } from "react-icons/gi";
import { useState, useEffect, useRef } from "react";
import sLofi from "../Sound/lofi.mp3";
import sRain from "../Sound/rain.mp3";
import sForest from "../Sound/forest.mp3";
import sFireplace from "../Sound/fireplace.mp3";
import ReactAudioPlayer from "react-audio-player";

const AllAudio = ({}) => {
  const lofiTune = useRef();
  const rainTune = useRef();
  const forestTune = useRef();
  const fireplaceTune = useRef();
  useEffect(() => {}, []);

  const onLofi = () => {
    if (lofiTune.current.paused === true) lofiTune.current.play();
    else lofiTune.current.pause();
  };
  const onRain = () => {
    if (rainTune.current.paused === true) rainTune.current.play();
    else rainTune.current.pause();
  };
  const onForest = () => {
    if (forestTune.current.paused === true) forestTune.current.play();
    else forestTune.current.pause();
  };
  const onFireplace = () => {
    if (fireplaceTune.current.paused === true) fireplaceTune.current.play();
    else fireplaceTune.current.pause();
  };
  const onVolLofi = (e) => {
    lofiTune.current.play();
    lofiTune.current.volume = e.target.value / 100;
  };
  const onVolRain = (e) => {
    rainTune.current.play();
    rainTune.current.volume = e.target.value / 100;
  };
  const onVolForest = (e) => {
    forestTune.current.play();
    forestTune.current.volume = e.target.value / 100;
  };
  const onVolFireplace = (e) => {
    fireplaceTune.current.play();
    fireplaceTune.current.volume = e.target.value / 100;
  };

  return (
    <div className="container-allAudio">
      <div className="audio-font">
        <audio ref={lofiTune} src={sLofi} loop className="player" />
        <audio ref={rainTune} src={sRain} loop className="player" />
        <audio ref={forestTune} src={sForest} loop className="player" />
        <audio ref={fireplaceTune} src={sFireplace} loop className="player" />
        LoFi Radio{" "}
        <AiOutlinePlayCircle onClick={onLofi} className="icon-play" />
        <div className="icon-align">
          <BiRadio className="icon-gen" />
          <AiOutlineMinus className="icon-plus-minus" />
          <RangeStepInput min="0" max="100" onChange={onVolLofi} />
          <AiOutlinePlus className="icon-plus-minus" />
        </div>
      </div>

      <div className="audio-font">
        Rain <AiOutlinePlayCircle onClick={onRain} className="icon-play" />
        <br />
        <div className="icon-align">
          <BsCloudRain className="icon-gen" />
          <AiOutlineMinus className="icon-plus-minus" />
          <RangeStepInput min="0" max="100" onChange={onVolRain} />
          <AiOutlinePlus className="icon-plus-minus" />
        </div>
      </div>
      <div className="audio-font">
        Forest <AiOutlinePlayCircle onClick={onForest} className="icon-play" />
        <br />
        <div className="icon-align">
          <GiTreeBranch className="icon-gen" />
          <AiOutlineMinus className="icon-plus-minus" />
          <RangeStepInput min="0" max="100" onChange={onVolForest} />
          <AiOutlinePlus className="icon-plus-minus" />
        </div>
      </div>
      <div className="audio-font">
        Fireplace{" "}
        <AiOutlinePlayCircle onClick={onFireplace} className="icon-play" />
        <div className="icon-align">
          <GiCampfire className="icon-gen" />
          <AiOutlineMinus className="icon-plus-minus" />
          <RangeStepInput min="0" max="100" onChange={onVolFireplace} />
          <AiOutlinePlus className="icon-plus-minus" />
        </div>
      </div>
    </div>
  );
};

export default AllAudio;
