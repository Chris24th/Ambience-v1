import PropTypes from 'prop-types'
import AboutUs from './AboutUs'
import SignOut from './SignOut'

const MainHeader = ({logo, signOut}) => {
    
  return (
    <div>
      <header className='header container-header'>
        Menu
        <h1 style={{backgroundColor: '#ffffff1'}}>Logo</h1>
              <SignOut 
                onClick={signOut}/>
            
      </header>
            
    </div>
  )
}

MainHeader.defaultProps = {
  logo: 'Ambience',
}

MainHeader.propTypes = {
    logo: PropTypes.string,
}

export default MainHeader
