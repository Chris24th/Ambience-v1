import React from 'react'
import {useState} from 'react'

const Menu = ({onMenu}) => {
    const [menu, setMenu]=useState(false)

  return (
    <div>
      <Overlay target={target.current} menu={onMenu} placement="right"></Overlay>
    </div>
  )
}

export default Menu
