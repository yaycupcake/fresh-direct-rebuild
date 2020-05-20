
import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductCards from '../Reusable/ProductCards'
import ProductDetail from './AdminProductDetail/AdminProductDetail'
import AdminEditProduct from './AdminEditProduct/AdminEditProduct'
import AddProduct from './AddProduct/AddProduct'
import AdminSignUp from './AdminSignUp/AdminSignUp'
import AdminLogIn from './AdminLogIn/AdminLogIn'
import AdminSignOut from './AdminSignOut/AdminSignOut'
import { verifyUser } from '../services/user'
import Layout from './shared/Layout'

const AdminHome = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const userEffect = async () => {
      const verifiedUser = await verifyUser()
      if (verifiedUser) {
        setUser(verifiedUser)
      }
    }
    userEffect()
  }, [])

  return (
    <Layout user={user}>
      <Switch>
        <Route exact path='/admin/products' render={() => user ? <ProductCards user={user} /> : <Redirect to='/admin/sign-in' />} />
        <Route exact path='/admin/products/:id' render={(props) => user ? <ProductDetail {...props} user={user} history={props.history} /> : <Redirect to='/admin/sign-in' />} />
        <Route exact path="/admin/products/:id/edit" render={(props) => user ? <AdminEditProduct {...props} user={user} /> : <Redirect to='/admin' />} />
        <Route exact path="/admin/add-product" render={() => user ? <AddProduct user={user} /> : < Redirect to='/admin/sign-up' />} />
        <Route exact path="/admin/sign-up" render={props => <AdminSignUp setUser={setUser} history={props.history} />} />
        <Route exact path="/admin/sign-in" render={props => <AdminLogIn setUser={setUser} history={props.history} />} />
        <Route exact path="/admin/sign-out" render={props => user ? <AdminSignOut user={user} clearUser={setUser} history={props.history} /> : <Redirect to='/admin' />} />
        <Route exact path='/admin' render={() => <h1>Home</h1>} />
      </Switch>
    </Layout>
  )
}

export default AdminHome

