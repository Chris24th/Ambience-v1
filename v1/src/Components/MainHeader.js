import PropTypes from 'prop-types'
import AboutUs from './AboutUs'
import SignOut from './SignOut'
import MainLogo from './logo.png'

const MainHeader = ({signOut}) => {
    
  return (
    
    <div>
      <header className='header container-header'>
        Menu
        <img src={MainLogo} height={150} width={150} alt='error'/>
        <SignOut 
          onClick={signOut}/>
      </header>
            
    </div>
  )
}

export default MainHeader
