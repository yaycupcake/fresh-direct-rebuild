import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Burg.scss'
import logo from '../../assets/icons/logo.png'

export default function Burg() {

  const showSettings = (event) => {
    event.preventDefault();
  }

  return (
    <Menu className='dropdown'>
      <a id="home" className="menu-item-frame" href="/"><img id='menu-logo' src={logo} /></a>
      <a id="shop" className="menu-item" href="/shop">Shop</a>
      <a id="about" className="menu-item" href="/about">Reorder</a>
      <a id="more" className="menu-item" href="/more">More Ways to Shop</a>
      <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
      <a id="contact" className="menu-item" href="/contact">Contact Us</a>
      <a id="help" className="menu-item" href="/help">Help</a>
      <a id="foodkick" className="menu-item-frame" href="/foodkick">FOODKICK</a>
    </Menu>
  )
}
