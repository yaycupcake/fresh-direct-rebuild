import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
// import './Layout.scss'

const Layout = (props) => {
  return (
    <div className='customer-layout'>
      <Nav />
      <div className='customer-layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
