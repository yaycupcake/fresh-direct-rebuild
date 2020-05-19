import React from 'react'
import Footer from './shared/Footer'
import Nav from './shared/Nav'
import MessageCard from './components/MessageCard'

export default function CustomerHome() {
  return (
    <div>
      <Nav />
      <h1>This is a cool Homepage</h1>
      <MessageCard />
      <Footer />
    </div>
  )
}
