import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div className='admin-layout'>
      <Nav user={props.user} />
      <div className='admin-layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
