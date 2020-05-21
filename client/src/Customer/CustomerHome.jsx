import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import CustomerMain from './components/CustomerMain/CustomerMain'
import CustomerProduct from './components/CustomerProduct/CustomerProduct'
import CustomerList from './components/CustomerList/CustomerList'
import SignIn from './components/SignIn'
import Layout from './shared/Layout'

export default function CustomerHome() {
  const [cart, updateCart] = useState([])

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={CustomerMain} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route path='/products/:id' render={(props) => <CustomerProduct {...props} updateCart={updateCart} />} />
        <Route path='/:category' component={CustomerList} />
        </Switch>
    </Layout>
  )
}
