import React, { useState } from 'react'
import './AdminSignUp.scss'
import { signUp, signIn } from '../../services/user'
import Layout from '../shared/Layout'

export default function AdminSignUp(props) {
 //setting initial states
 const [form, setForm] = useState({
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  isError: false,
  errorMsg: ''
 })

 const handleChange = event => {
  const { name, value } = event.target;
  setForm({
   ...form,
   [name]: value
  })
 }

 const onSignUp = event => {
  event.preventDefault()
  const { history, setUser } = props

  signUp(form)
   .then(res => {
    setUser(res.user)
   })
   .then(() => history.push('/'))
   .catch(error => {
    console.error(error)
    setForm({


     isError: true,
     errorMsg: 'Signup details invalid',
     email: '',
     password: '',
     passwordConfirmation: '',
     username: ''
    })
   })
 }

 const renderError = () => {
  const { isError, errorMsg } = form
  const toggleForm = isError ? 'danger' : ''
  if (isError) {
   return (
    <button type="submit" className={toggleForm}>
     {errorMsg}
    </button>
   )
  } else {
   return <button type="submit">Register New User</button>
  }
 }
 //Don't forget to add 'danger' class to CSS

 return (
  <Layout user={props.user}>
   <form className="login-form" onSubmit={onSignUp}>
    <input
     className="new-username"
     placeholder='Username'
     value={form.username}
     name='username'
     onChange={handleChange}
     required
    />
    <input
     className="new-email"
     placeholder='Email'
     value={form.email}
     name='email'
     onChange={handleChange}
     required
    />
    <input
     className="new-password"
     type="password"
     placeholder='Password'
     value={form.password}
     name='password'
     onChange={handleChange}
     required
    />
    <input
     className="new-password-confirm"
     type="password"
     placeholder='Confirm Password'
     value={form.passwordConfirmation}
     name='passwordConfirmation'
     onChange={handleChange}
     required
    />
    <button type="submit" className="button">Register New User</button>
   </form>
  </Layout>
 )
}
