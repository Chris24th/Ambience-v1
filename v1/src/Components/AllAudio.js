import PropTypes from "prop-types";
import { RangeStepInput } from "react-range-step-input";
import { AiOutlinePlayCircle } from "react-icons/ai";
// import {HiOutlineVolumeUp} from 'react-icons/hi'
import { BiRadio } from "react-icons/bi";
import { BsCloudRain } from "react-icons/bs";
import { GiTreeBranch } from "react-icons/gi";
import { GiCampfire } from "react-icons/gi";
import lofi from '../Sound/lofi.mp3';
import Sound from 'react-sound';

const AllAudio = ({ lofi, rain, forest, fireplace }) => {
  const onLofi = () => {
    return;
  };
  const onRain = () => {};
  const onForest = () => {};
  const onFireplace = () => {};

  return (
    <div>
      <div className="audio-font">
      <Sound 
        url={lofi}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        // onLoading={handleSongLoading}
        // onPlaying={handleSongPlaying}
        // onFinishedPlaying={handleSongFinishedPlaying}
        />
        {lofi} <AiOutlinePlayCircle onClick={onLofi} className="icon-play" />
        <div className="icon-align">
          <BiRadio className="icon-gen" />
          <RangeStepInput key="lofi" min="0" max="100" />
        </div>
      </div>
      <div className="audio-font">
        {rain} <AiOutlinePlayCircle onClick={onRain} className="icon-play" />
        <br />
        <div className="icon-align">
          <BsCloudRain className="icon-gen" />
          <RangeStepInput key="rain" min="0" max="100" />
        </div>
      </div>
      <div className="audio-font">
        {forest}{" "}
        <AiOutlinePlayCircle onClick={onForest} className="icon-play" />
        <br />
        <div className="icon-align">
          <GiTreeBranch className="icon-gen" />
          <RangeStepInput key="forest" min="0" max="100" />
        </div>
      </div>
      <div className="audio-font">
        {fireplace}{" "}
        <AiOutlinePlayCircle onClick={onFireplace} className="icon-play" />
        <div className="icon-align">
          <GiCampfire className="icon-gen" />
          <RangeStepInput key="fireplace" min="0" max="100" />
        </div>
      </div>
    </div>
  );
};

AllAudio.defaultProps = {
  lofi: "Lofi Radio",
  rain: "Rain",
  forest: "Forest",
  fireplace: "Fireplace",
};

AllAudio.propTypes = {
  lofi: PropTypes.string,
  rain: PropTypes.string,
  forest: PropTypes.string,
  fireplace: PropTypes.string,
};

export default AllAudio;
