import React from 'react';
import './App.scss';
import { Route } from "react-router-dom"
import AdminHome from './Admin/AdminHome'
import CustomerHome from './Customer/CustomerHome'
import SignIn from './Customer/components/SignIn'



function App() {

  return (
    <div className="App">
      <Route exact path="/" component={CustomerHome} />
      {/* <Route exact path="/">test homepage</Route> */}
      {/* above line is only temp until we work on customer homepage */}
      <Route path="/admin" component={AdminHome} />
      <Route exact path='/SignIn' component={SignIn} />
    </div>
  );

}

export default App;
