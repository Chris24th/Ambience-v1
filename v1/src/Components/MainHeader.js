import PropTypes from 'prop-types'
import AboutUs from './AboutUs'
import SignOut from './SignOut'
import MainLogo from './mlogo.svg'
import {AiOutlineMenu} from 'react-icons/ai'

const MainHeader = ({onMenu,signOut}) => {
  const [showMenu, setShowMenu] = false;

    
  return (
    
    <div>
      <header className='header container-header'>
        <AiOutlineMenu className='icon-menu'
          onClick={onMenu}/>
        <img src={MainLogo} className='mainLogo' alt='error'/>
        <SignOut 
          onClick={signOut} />
      </header>
            
    </div>
  )
}

export default MainHeader
