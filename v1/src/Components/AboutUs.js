import PropTypes from 'prop-types'

const AboutUs = ({text, onClick}) => {
  return (
    <label
        onClick={onClick}
        className='label'
    >
      {text}
    </label>
  )
}

AboutUs.defaultProps = {
    text: 'About Us',
}

AboutUs.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default AboutUs
