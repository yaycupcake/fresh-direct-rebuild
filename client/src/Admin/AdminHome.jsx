import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Products from './Products'
import ProductDetail from './ProductDetail'
import SignUp from './SignUp'
import SignIn from './SignIn'
import SignOut from './SignOut'

const AdminHome = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userEffect = async () => {
      const user = await verifyUser() 
      if (user) {
        setUser(user)
      }
    }
      userEffect()
  }, [])

  return (
    <Switch>
      <Route exact path='/admin' render={() => { }} />
      <Route exact path='/admin/products' render={() => <Products user={user} />} />
      <Route exact path='/admin/products/:id' render={(props) => <ProductDetail {...props} user={user} history={props.history} />} />
      <Route exact path="/admin/products/:id/edit" render={(props) => user ? <ProductEdit {...props} user={user} /> : <Redirect to='/admin' />} />
      <Route exact path="/admin/add-product" render={() => user ? <ProductCreate user={user} /> : < Redirect to='/admin/sign-up' />} />
      <Route exact path="/admin/sign-up" render={props => <SignUp setUser={setUser} history={props.history} />} />
      <Route exact path="/admin/sign-in" render={props => <SignIn setUser={setUser} history={props.history} />} />
      <Route exact path="/admin/signout" render={props => <SignOut user={user} clearUser={setUser} history={props.history} />} />
    </Switch>
  )
}

export default AdminHome