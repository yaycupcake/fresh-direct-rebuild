import React from 'react'
import './SignIn.scss'
import Layout from '../shared/Layout'
import facebook from '../../assets/icons/facebook.png'
import google from '../../assets/icons/google.png'
import signIn from '../../assets/icons/signin.png'
import orLine from '../../assets/icons/orline.png'
import deliver from '../../assets/icons/deliver.png'

export default function Message(props) {
  return (
    <Layout>
      <div className="sign-in">

        <div className='deliver'>
          <img src={deliver} alt='Deliver Icon' />
        </div>


        <div className='orLine'>
          <img src={orLine} alt='Or Line' />
        </div>

        <div className='input'>
          <input placeholder='Email'></input>
          <input placeholder='Password'></input>
        </div>

        <div className='signIn-Icon'>
          <img src={signIn} alt='Sign In' />
        </div>

        <a className='forgot' href="#">Forgot Password</a>

        <div className='orLine'>
          <img src={orLine} alt='Or Line' />
        </div>

        <div className='Facebook'>
          <img src={facebook} alt='Facebook Icon' />
        </div>

        <div className='google'>
          <img src={google} alt='Google Icon' />
        </div>

      </div>
    </Layout>
  )
}