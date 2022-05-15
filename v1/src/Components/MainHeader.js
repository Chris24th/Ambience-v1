import PropTypes from 'prop-types'
import AboutUs from './AboutUs'
import SignOut from './SignOut'
import MainLogo from './mlogo.svg'
import Menu from './Menu'
import {AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


const MainHeader = ({signOut}) => {

  const [open, setOpen] = useState(false);
    
  return (
    
    <div>
      
      <header className='header container-header'>
        
      <Dropdown 
        // className='menu-header' id="menuID" 
        // style={{backgroundColor='#fff'}}
        // title={<AiOutlineMenu className='icon-menu' onClick={()=> setOpen(!open)}/>} 
      >
        <Dropdown.Toggle style={{backgroundColor:'inherit'}}>
          <AiOutlineMenu className='icon-menu' onClick={()=> setOpen(!open)}/>
        </Dropdown.Toggle> 
         
        <Dropdown.Menu>
          {open ? <Menu /> : ''}
        </Dropdown.Menu>
      </Dropdown>
      
        <img src={MainLogo} className='mainLogo' alt='error'/>
        <SignOut 
          onClick={signOut} />
      </header>
            
    </div>
  )
}

export default MainHeader
