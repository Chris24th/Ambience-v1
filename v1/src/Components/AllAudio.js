import PropTypes from "prop-types";
import { RangeStepInput } from "react-range-step-input";
import { AiOutlinePlayCircle } from "react-icons/ai";
// import {HiOutlineVolumeUp} from 'react-icons/hi'
import { BiRadio } from "react-icons/bi";
import { BsCloudRain } from "react-icons/bs";
import { GiTreeBranch } from "react-icons/gi";
import { GiCampfire } from "react-icons/gi";
import { useEffect } from "react";
import sLofi from "../Sound/lofi.mp3";
import sRain from "../Sound/rain.mp3";
import sForest from "../Sound/forest.mp3";
import sFireplace from "../Sound/fireplace.mp3";

const AllAudio = ({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
}) => {
  const lofiTune = new Audio(sLofi);
  const rainTune = new Audio(sLofi);
  const forestTune = new Audio(sLofi);
  const fireplaceTune = new Audio(sLofi);

  useEffect(() => {
    lofiTune.load();
    rainTune.load();
    forestTune.load();
    fireplaceTune.load();
  }, []);

  useEffect(() => {
    lofiTune.loop = true;
  });

  const onLofi = () => {
    lofiTune.play();
  };

  const onRain = () => {
    rainTune.play();
  };
  const onForest = () => {
    forestTune.play();
  };
  const onFireplace = () => {
    fireplaceTune.play();
  };

  useEffect(() => {
    lofiTune.loop = true;
    rainTune.loop = true;
    forestTune.loop = true;
    fireplaceTune.loop = true;
  });

  return (
    <div>
      <div className="audio-font">
        LoFi Radio
        <AiOutlinePlayCircle onClick={onLofi} className="icon-play" />
        <div className="icon-align">
          <BiRadio className="icon-gen" />
          <RangeStepInput key="lofi" min="0" max="100" />
        </div>
      </div>
      <div className="audio-font">
        Rain <AiOutlinePlayCircle onClick={onRain} className="icon-play" />
        <br />
        <div className="icon-align">
          <BsCloudRain className="icon-gen" />
          <RangeStepInput key="rain" min="0" max="100" />
        </div>
      </div>
      <div className="audio-font">
        Forest <AiOutlinePlayCircle onClick={onForest} className="icon-play" />
        <br />
        <div className="icon-align">
          <GiTreeBranch className="icon-gen" />
          <RangeStepInput key="forest" min="0" max="100" />
        </div>
      </div>
      <div className="audio-font">
        Fireplace{" "}
        <AiOutlinePlayCircle onClick={onFireplace} className="icon-play" />
        <div className="icon-align">
          <GiCampfire className="icon-gen" />
          <RangeStepInput key="fireplace" min="0" max="100" />
        </div>
      </div>
    </div>
  );
};

export default AllAudio;
