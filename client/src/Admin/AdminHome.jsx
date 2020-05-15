import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Products from './Products'
import ProductDetail from './ProductDetail'
import AdminEditProduct from './AdminEditProduct'
import AddProduct from './AddProduct'
import AdminSignUp from './AdminSignUp'
import AdminLogIn from './AdminLogIn'
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
      <Route exact path="/admin/products/:id/edit" render={(props) => user ? <AdminEditProduct {...props} user={user} /> : <Redirect to='/admin' />} />
      <Route exact path="/admin/add-product" render={() => user ? <AddProduct user={user} /> : < Redirect to='/admin/sign-up' />} />
      <Route exact path="/admin/sign-up" render={props => <AdminSignUp setUser={setUser} history={props.history} />} />
      <Route exact path="/admin/sign-in" render={props => <AdminLogIn setUser={setUser} history={props.history} />} />
      <Route exact path="/admin/signout" render={props => <SignOut user={user} clearUser={setUser} history={props.history} />} />
    </Switch>
  )
}

export default AdminHome