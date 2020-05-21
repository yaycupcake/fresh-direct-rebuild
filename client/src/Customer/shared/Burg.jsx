import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Burg.scss'
import logo from '../../assets/icons/logo.png'
import carrot from '../../assets/icons/carrot-icon.png'
import home from '../../assets/icons/home-icon.png'
import reorder from '../../assets/icons/reorder-icon.png'
import shop from '../../assets/icons/shop-icon.png'
import x from '../../assets/icons/x-icon.png'
import foodkick from '../../assets/icons/foodkick-icon.png'


export default function Burg() {

  const showSettings = (event) => {
    event.preventDefault();
  }

  return (
    <Menu className='dropdown'>
      <a id="home" className="menu-item-frame" href="/"><img id='menu-logo' src={logo} /></a>
      <a id="shop" className="menu-item" href="/shop"><img src={home} />Shop</a>
      <a id="about" className="menu-item" href="/about"><img src={reorder} />Reorder</a>
      <a id="more" className="menu-item" href="/more"><img src={shop} />More Ways to Shop</a>
      <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
      <a id="contact" className="menu-item" href="/contact">Contact Us</a>
      <a id="help" className="menu-item" href="/help">Help</a>
      <a id="foodkick" className="menu-item-frame" href="/foodkick"><img id='foodkick-logo' src={foodkick} /></a>
    </Menu>
  )
}
