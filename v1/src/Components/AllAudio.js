import { RangeStepInput } from "react-range-step-input";
import { AiOutlinePlayCircle } from "react-icons/ai";
// import {HiOutlineVolumeUp} from 'react-icons/hi'
import { BiRadio } from "react-icons/bi";
import { BsCloudRain } from "react-icons/bs";
import { GiTreeBranch } from "react-icons/gi";
import { GiCampfire } from "react-icons/gi";
import { useState, useEffect } from "react";
import sLofi from "../Sound/lofi.mp3";
import sRain from "../Sound/rain.mp3";
import sForest from "../Sound/forest.mp3";
import sFireplace from "../Sound/fireplace.mp3";
import ReactAudioPlayer from "react-audio-player";

const AllAudio = ({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
}) => {
  // const rainTune = new Audio(sRain);
  // const forestTune = new Audio(sForest);
  // const fireplaceTune = new Audio(sFireplace);
  const [volLofi, setVolLofi] = useState(0.5);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {}, []);

  //   // lofiTune.load();
  //   // rainTune.load();
  //   // forestTune.load();
  //   // fireplaceTune.load();
  // }, []);

  // useEffect(() => {
  //   lofiTune.loop = true;
  //   rainTune.loop = true;
  //   forestTune.loop = true;
  //   fireplaceTune.loop = true;
  //   // lofiTune.volume = volLofi;
  // });

  const onLofi = (e) => {
    setVolLofi(e.target.value / 100);
    const lofiTune = new Audio(sLofi);
    lofiTune.volume = volLofi;
    if (playing === true) return;
    lofiTune.play();
    setPlaying(true);
  };

  // const onChangeLofi = (e) => {
  // };

  const onRain = () => {
    // rainTune.play();
  };
  const onForest = () => {
    // forestTune.play();
  };
  const onFireplace = () => {
    // fireplaceTune.play();
  };

  // onChange(e) {
  //   const newVal = forceNumber(e.target.value);
  //   this.setState({ value: newVal });
  // }
  return (
    <div>
      <div className="audio-font">
        LoFi Radio vol: {volLofi}
        <AiOutlinePlayCircle onClick={onLofi} className="icon-play" />
        <div className="icon-align">
          <BiRadio className="icon-gen" />
          <RangeStepInput key="lofi" min="0" max="100" onChange={onLofi} />
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
