import PropTypes from 'prop-types'
import {AiOutlinePlayCircle} from 'react-icons/ai'

const AllAudio = ({lofi, rain, forest, fireplace}) => {
  return (
    <div>
      <div className = 'audio-font'>
          {lofi}  <AiOutlinePlayCircle size='20px'/><br /><br /><br />
      </div>
      <div>
          {rain}  <AiOutlinePlayCircle size='20px'/><br /><br /><br />
      </div>
      <div>
          {forest}  <AiOutlinePlayCircle size='20px'/><br /><br /><br />
      </div>
      <div>
          {fireplace}  <AiOutlinePlayCircle size='20px'/>
      </div>
    </div>
  )
}

AllAudio.defaultProps = {
    lofi: 'Work',
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
