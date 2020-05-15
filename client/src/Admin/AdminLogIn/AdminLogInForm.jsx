import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { signIn } from '.../services/user'
//need to set up services. Should we have universal services or admin vs customer?
import AdminLayout from '../AdminLayout'
import useForm from '.../useForm'

export default function AdminLogIn() {

  const { handleChange, handleSubmit, values } = useForm(onSignIn)

  onSignIn = event => {
    event.preventDefault()
    const history = useHistory()
    signIn(this.state)

    try {
      await setUser(res.user)
      return history.push('/')
    }
    catch (error) {
      console.error(error)
      setIsError(true)
      setErrorMsg('Invalid Credentials')
      setEmail('')
      setPassword('')
    }
  }

  renderError = () => {
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
      <AdminLayout>
        <form className="login-form" onSubmit={onSignIn}>
          <input
            className="login-email"
            placeholder='Email'
            value={email}
            onChange={handleChange}
            name='email'
            required
          />
          <input
            className="login-password"
            type="password"
            placeholder='Password'
            value={password}
            onChange={handleChange}
            name='password'
            required
          />
          <button type="submit" className="button">Login</button>
        </form>
      </AdminLayout>
    </>
  )
}