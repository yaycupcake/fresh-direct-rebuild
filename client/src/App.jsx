import React from 'react';
import './App.scss';
import { Route, Link } from "react-router-dom"

function App() {
 return (
  <div className="App">
   <header className="App-header">

    <Route exact path="/">

     <h1>customer home page</h1>
    </Route>
    <Route exact path="/admin">
     <h1>admin panel</h1>
    </Route>
   </header>
  </div>
 );
}

export default App;
