import React, { Component } from 'react'
import './SignUp.css'
import AdminLayout from '../AdminLayout'
import useForm from '.../useForm'
import { signUp, signIn } from '.../services/user'

export default function SignUp() {
  const { handleChange, handleSubmit, values } = useForm(onSignUp)

  onSignUp = event => {
    event.preventDefault()

    const { history, setUser } = this.props


    //needs updates below
    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.user))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({
          email: '',
          password: '',
          passwordConfirmation: '',
          isError: true,
          errorMsg: 'Sign Up Details Invalid'
        })
      })
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
      return <button type="submit">Sign Up</button>
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <form className="signup-form" onSubmit={onSignUp}>
            <input
              className="new-username"
              placeholder='Username'
              value={username}
              name='username'
              onChange={handleChange}
              required
            />
            <input
              className="new-email"
              placeholder='Email'
              value={email}
              name='email'
              onChange={handleChange}
              required
            />
            <input
              className="new-password"
              type="password"
              placeholder='Password'
              value={password}
              name='password'
              onChange={handleChange}
              required
            />
            <input
              className="new-password-confirm"
              type="password"
              placeholder='Confirm Password'
              value={passwordConfirmation}
              name='passwordConfirmation'
              onChange={this.handleChange}
              required
            />
            <button type="submit" className='button'>Sign Up</button>
          </form>
        </Layout>
      </div>
    )
  }
}

export default AdminSignUp 