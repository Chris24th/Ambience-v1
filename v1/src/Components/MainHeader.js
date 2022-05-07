import PropTypes from 'prop-types'
import AboutUs from './AboutUs'
import SignOut from './SignOut'
import MainLogo from './logo.png'
import {AiOutlineMenu} from 'react-icons/ai'

const MainHeader = ({signOut}) => {
    
  return (
    
    <div>
      <header className='header container-header'>
       <AiOutlineMenu className='icon-menu'/>
        <img src={MainLogo} className='mainLogo' alt='error'/>
        <SignOut 
          onClick={signOut} />
      </header>
            
    </div>
  )
}

export default MainHeader
