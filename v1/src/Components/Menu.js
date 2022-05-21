
import Dropdown from 'react-bootstrap/Dropdown'

const Menu = ({onMenu}) => {

  return (
    <div className='ddMenu'>
    <Dropdown.Item as="button" className='menu-btns'>About Us</Dropdown.Item>
    <Dropdown.Item as="button" className='menu-btns'>Contact Us</Dropdown.Item>
    <Dropdown.Item as="button"  className='menu-btns'>Help</Dropdown.Item>
    </div>
  )
}

export default Menu
