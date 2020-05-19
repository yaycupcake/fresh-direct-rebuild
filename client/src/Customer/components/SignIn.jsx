import React from 'react'
import './SignIn.scss'
import Layout from '../shared/Layout'

export default function Message(props) {
  return (
    <Layout>
      <div className="sign-in">

        <button></button>

        <input placeholder='Email'></input>
        <input placeholder='Password'></input>


        <button></button>
        <button></button>
        <button></button>

      </div>
    </Layout>
  )
}