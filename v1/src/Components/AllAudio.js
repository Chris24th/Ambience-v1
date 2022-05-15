import PropTypes from 'prop-types'
import {RangeStepInput} from 'react-range-step-input'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {HiOutlineVolumeUp} from 'react-icons/hi'
import {BiRadio} from 'react-icons/bi'
import {BsCloudRain} from 'react-icons/bs'
import {GiTreeBranch} from 'react-icons/gi'
import {GiCampfire} from 'react-icons/gi'

const AllAudio = ({lofi, rain, forest, fireplace}) => {
  return (
    <div>
      <div className = 'audio-font'>
          {lofi}  <AiOutlinePlayCircle className='icon-play'/>
          <div className='icon-align'>
            < BiRadio className='icon-gen'/><RangeStepInput  min='0' max='100'/>
          </div>
      </div>
      <div className = 'audio-font'>
          {rain}  <AiOutlinePlayCircle className='icon-play'/><br /> 
          <div className='icon-align'>
            < BsCloudRain className='icon-gen'/><RangeStepInput min='0'  max='100' />
          </div>
      </div>
      <div className = 'audio-font'>
          {forest}  <AiOutlinePlayCircle className='icon-play'/><br />
          <div className='icon-align'>
            < GiTreeBranch className='icon-gen'/><RangeStepInput min='0'  max='100' />
          </div>
      </div>
      <div className = 'audio-font'>
          {fireplace}  <AiOutlinePlayCircle className='icon-play'/>
          <div className='icon-align'>
            < GiCampfire className='icon-gen'/><RangeStepInput min='0'  max='100' />
          </div>
      </div>
    </div>
  )
}

AllAudio.defaultProps = {
    lofi: 'Lofi Radio',
    rain: 'Rain',
    forest: 'Forest',
    fireplace: 'Fireplace',
  }
  
AllAudio.propTypes = {
    lofi: PropTypes.string,
    rain: PropTypes.string,
    forest: PropTypes.string,
    fireplace: PropTypes.string,
  }
  
export default AllAudio
