import React, { useState, useEffect } from 'react'
import { signIn } from '../../services/user'
//need to set up services. Should we have universal services or admin vs customer?

export default function AdminLogIn(props) {
 //setting initial states
 const [form, setForm] = useState({
  isError: false,
  errorMsg: '',
  email: '',
  password: ''
 })

 const handleChange = event => {
  const { name, value } = event.target;
  //destructuring the name & value of the current form field
  setForm({
   //setting state using the values of the current form
   ...form,
   [name]: value
  })
 }

 //When the user signs in...
 const onSignIn = event => {
  event.preventDefault()

  //make history and set user use props
  const { history, setUser } = props

  signIn(form)
   .then(res => {
    setUser(res.user)
   })
   .then(() => history.push('/'))
   .catch(error => {
    console.error(error)
    setForm({
     isError: true,
     errorMsg: 'Invalid Credentials',
     email: '',
     password: ''
    })
   })
 }

 const renderError = () => {
  //destructuring to add form. before isError and errorMsg
  const { isError, errorMsg } = form
  const toggleForm = isError ? 'danger' : ''
  if (isError) {
   return (
    <button type="submit" className={toggleForm}>
     {errorMsg}
    </button>
   )
  } else {
   return <button type="submit">Sign In</button>
  }
 }
 //Don't forget to add 'danger' class to CSS

 return (
  <>
   <form className="login-form" onSubmit={onSignIn}>
    <input
     className="login-email"
     placeholder='Email'
     value={form.email}
     onChange={handleChange}
     name='email'
     required
    />
    <input
     className="login-password"
     type="password"
     placeholder='Password'
     value={form.password}
     onChange={handleChange}
     name='password'
     required
    />
    <button type="submit" className="button">Login</button>
   </form>
  </>
 )
}