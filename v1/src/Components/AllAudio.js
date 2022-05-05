import PropTypes from 'prop-types'

const AllAudio = ({lofi, rain, forest, fireplace}) => {
  return (
    <div>
      <div>
          {lofi}
      </div>
      <div>
          {rain}
      </div>
      <div>
          {forest}
      </div>
      <div>
          {fireplace}
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
