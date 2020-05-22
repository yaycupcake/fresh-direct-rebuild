import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import CustomerMain from './components/CustomerMain/CustomerMain'
import CustomerProduct from './components/CustomerProduct/CustomerProduct'
import CustomerList from './components/CustomerList/CustomerList'
import CustomerCart from './components/CustomerCart/CustomerCart'
import SignIn from './components/SignIn'
import Layout from './shared/Layout'

export default function CustomerHome(props) {
  const [cart, updateCart] = useState([])

  useEffect(() => {
    console.log(cart);
    
  },[cart])

  /*
    --- addToCart ---
    Checks to see if the cartItem is already included in the cart.
    If so, it will just update the quantity.
    Otherwise, it will add the cartItem (product & quantity)
  */
  const addToCart = (cartItem) => {
    const tempCart = cart
    const includedProduct = tempCart.findIndex(item => item.product._id === cartItem.product._id)
    if (includedProduct >= 0) {
      tempCart[includedProduct].quantity += cartItem.quantity
    } else {
      tempCart.push(cartItem)
    }
    updateCart(tempCart)
    console.log('Temp Cart: ', tempCart);
    
  }

  return (
    <Layout>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path='/cart' render={(props) => <CustomerCart {...props} cart={cart} addToCart={addToCart} />} />
        <Route path='/products/:id' render={(props) => <CustomerProduct {...props} addToCart={addToCart} />} />
        <Route path='/:category' component={CustomerList} />
        <Route exact path="/" component={CustomerMain} />
      </Switch>
    </Layout>
  )
}
