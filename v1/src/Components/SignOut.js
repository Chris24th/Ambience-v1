import PropTypes from 'prop-types'

const SignOut = ({text, onClick}) => {
  return (
    <label
        onClick={onClick}
        className='label'
    >
        {text}  
    </label>
  )
}

SignOut.defaultProps = {
    text: 'Sign Out',
}

SignOut.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default SignOut
