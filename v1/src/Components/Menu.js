
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import React, {useState} from 'react'

const Menu = ({onMenu}) => {
    const [menu, setMenu]=useState(false)

  return (
    <div className='ddMenu'>
    <Dropdown.Item as="button" className='menu-btns'>About Us</Dropdown.Item>
    <Dropdown.Item as="button" className='menu-btns'>Contact Us</Dropdown.Item>
    <Dropdown.Item as="button"  className='menu-btns'>Help</Dropdown.Item>
    </div>
  )
}

export default Menu
