import PropTypes from 'prop-types'

const Pomodoro = ({text}) => {
  return (
    <label
        className='label label-pomodoro' 
    >
        {text}  
    </label>
  )
}

Pomodoro.defaultProps = {
    text: '55:00',
}

Pomodoro.propTypes = {
    text: PropTypes.string,
}

export default Pomodoro
