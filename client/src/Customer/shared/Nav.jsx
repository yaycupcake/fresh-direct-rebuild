import React from 'react'
import cartIcons from '../../assets/icons/cart-icons.png';
import truckIcons from '../../assets/icons/truck-icons.png';
import logo from '../../assets/icons/logo.png';
import search from '../../assets/icons/search.png';
import burger from '../../assets/icons/burger.png';
import Burg from './Burg'
import './Nav.scss'

export default function Nav() {
 return (
  <nav className='nav-bar'>
   <div className='burger'>
    <Burg />
   </div>

   <div className='logo'>
    <img src={logo} alt='Logo Icon' />
   </div>

   <div className='nav-icons'>
    <img src={truckIcons} alt="Truck Icon" />
    <span>$0.00</span>
    <img src={cartIcons} alt="Cart Icon" />
   </div>

   <div className='search'>
    <img src={search} alt="Search Icon" />
    <input placeholder='What can we help you find?' />
   </div>
  </nav>
 )
}

