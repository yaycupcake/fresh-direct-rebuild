import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom"
import AdminHome from './Admin/AdminHome'
import CustomerHome from './Customer/CustomerHome'

import SignIn from './Customer/components/SignIn'
import CustomerProduct from './Customer/CustomerProduct';
import CustomerList from './Customer/CustomerList'

function App() {

 return (
   <div className="App">
     <Switch>
      <Route exact path="/" component={CustomerHome} />
      <Route exact path="/sign-in" component={SignIn} />
      {/* <Route exact path="/">test homepage</Route> */}
      {/* above line is only temp until we work on customer homepage */}
      <Route path='/products/:id' component={CustomerProduct} />
      <Route path='/:category' component={CustomerList}/>
      <Route path="/admin" component={AdminHome} />
    </Switch>
  </div>
 );

}

export default App;
