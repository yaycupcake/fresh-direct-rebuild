import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom"
import AdminHome from './Admin/AdminHome'
import CustomerHome from './Customer/CustomerHome'

function App() {
 return (
   <div className="App">
     <Switch>
      <Route path="/admin" component={AdminHome} />
      <Route path="/" component={CustomerHome} />
    </Switch>
  </div>
 );

}

export default App;
