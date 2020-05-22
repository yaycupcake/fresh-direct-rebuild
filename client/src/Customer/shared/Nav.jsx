import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cartIcons from '../../assets/icons/cart-icons.png';
import truckIcons from '../../assets/icons/truck-icons.png';
import logo from '../../assets/icons/logo.png';
import search from '../../assets/icons/search.png';
import burger from '../../assets/icons/burger.png';
import Burg from './Burg'
import './Nav.scss'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBurger = () => {
    setIsOpen(!isOpen)
  }

 return (
  <nav className='nav-bar'>
   <div className='burger' onClick={toggleBurger}>
       <Burg isOpen={isOpen} toggleBurger={toggleBurger} />
   </div>

   <div className='logo'>
    <Link to='/'><img src={logo} alt='Logo Icon' /></Link>
   </div>

   <div className='nav-icons'>
    <img src={truckIcons} alt="Truck Icon" />
    <span>$0.00</span>
    <Link to='/cart'><img src={cartIcons} alt="Cart Icon" /></Link>
   </div>

   <div className='search'>
    <img src={search} alt="Search Icon" />
    <input placeholder='What can we help you find?' />
   </div>
  </nav>
 )
}

