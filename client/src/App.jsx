import React from 'react';
import './App.scss';
import { Route } from "react-router-dom"
import AdminHome from './Admin/AdminHome'
import CustomerHome from './Customer/CustomerHome'

function App() {
 return (
  <div className="App">
    <Route exact path="/" component={CustomerHome} />
    <Route exact path="/admin" component={AdminHome} />
  </div>
 );
}

export default App;
