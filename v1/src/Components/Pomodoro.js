import PropTypes from 'prop-types'
import {MdWorkOutline} from 'react-icons/md'

const Pomodoro = ({work, breakTime, timer,start}) => {
  return (
    <div >
        <header>
          <label className='header-pomodoro'>
            <div className='work-break'>
              {work}
            </div>
            <div className='work-break'>
              {breakTime}
            </div>
          </label>
          <label className='timer'>
            {timer} 
          </label>
          <button className='startBtn'>
            {start}
          </button>
        </header>
    </div>
  )
}

Pomodoro.defaultProps = {
  work: 'Work',
  breakTime: 'Break',
  timer: '55:00',
  start: 'Start'
}

Pomodoro.propTypes = {
  work: PropTypes.string,
  break: PropTypes.string,
  timer: PropTypes.string,
  start: PropTypes.string,
}

export default Pomodoro
