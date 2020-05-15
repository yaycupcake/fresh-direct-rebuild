import React, { Component } from 'react'
import './SignUp.css'
import Layout from './shared/Layout'
import { signUp, signIn } from '../services/user'
class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event =>
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })

    onSignUp = event => {
      event.preventDefault()
      
        const { history, setUser } = this.props

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
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
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
                <form className="signup-form" onSubmit={this.onSignUp}>
                    <input
                        className="new-username"
                        placeholder='Username'
                        value={this.state.username}
                        name='username'
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        className="new-email"
                        placeholder='Email'
                        value={this.state.email}
                        name='email'
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        className="new-password"
                        type="password"
                        placeholder='Password'
                        value={this.state.password}
                        name='password'
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        className="new-password-confirm"
                        type="password"
                        placeholder='Confirm Password'
                        value={this.state.passwordConfirmation}
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