import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './Burg.scss'
import logo from '../../assets/icons/logo.png'
import carrot from '../../assets/icons/carrot-icon.png'
import home from '../../assets/icons/home-icon.png'
import reorder from '../../assets/icons/reorder-icon.png'
import shop from '../../assets/icons/shop-icon.png'
import x from '../../assets/icons/x-icon.png'
import foodkick from '../../assets/icons/foodkick-icon.png'


export default function Burg(props) {

  const showSettings = (event) => {
    event.preventDefault();
  }

  return (
    <Menu className='dropdown' isOpen={props.isOpen}>
      <Link id="home" className="menu-item-frame" to="/" onClick={props.toggleBurger}><img className='icon-size' id='menu-logo' src={logo} /></Link>
      <Link id="shop" className="menu-item" to="/products"><img className='icon-size' src={home} />Shop</Link>
      <Link id="about" className="menu-item" to="#"><img className='icon-size' src={reorder} />Reorder</Link>
      <Link id="more" className="menu-item" to="#"><img className='icon-size' src={shop} />More Ways to Shop</Link>
      <Link onClick={showSettings} className="menu-item--small" to="#">Settings</Link>
      <Link id="contact" className="menu-item" to="#">Contact Us</Link>
      <Link id="help" className="menu-item" to="#">Help</Link>
      <Link id="foodkick" className="menu-item-frame" to="#"><img id='foodkick-logo' src={foodkick} /></Link>
    </Menu>
  )
}
