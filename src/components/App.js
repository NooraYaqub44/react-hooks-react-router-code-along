import React from 'react'
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';

function App() {
    return (
        <div>
            <Navbar/>
  <Switch>
  <Route exact path="/">
    <Home/>
  </Route>
  <Route path="/about">
    <About/>
    </Route>
    <Route path="/Login">
      <Login/>
    </Route>
    </Switch> 
        </div>
    )
}

export default App
