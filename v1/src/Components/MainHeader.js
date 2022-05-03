import PropTypes from 'prop-types'
import AboutUs from './AboutUs'
import SignOut from './SignOut'
import Pomodoro from './Pomodoro'

const MainHeader = ({logo, onAbout, signOut}) => {
    
  return (
    <div>
      <header className='header container-header'>
        <h1 style={{backgroundColor: '#ffffff1'}}>Logo</h1>
              <Pomodoro />
              <AboutUs 
                onClick={onAbout}/>
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
