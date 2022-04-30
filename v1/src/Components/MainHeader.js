import PropTypes from 'prop-types'
import Button from './Button'

const MainHeader = ({logo, about, signOut}) => {
    
  return (
    <div className='container-header'>
            <h1 style={{backgroundColor: '#ffffff0'}}>
              {logo}
              {signOut} 
              {about} 
            </h1>
    </div>
  )
}

MainHeader.defaultProps = {
  logo: 'Ambience',
}
MainHeader.defaultProps = {
  about: 'About Us',
}
MainHeader.defaultProps = {
  signOut: 'Sign Out',
}

MainHeader.propTypes = {
    logo: PropTypes.string,
    about: PropTypes.string,
    signOut: PropTypes.string,
}

export default MainHeader
