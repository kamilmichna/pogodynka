
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClientComponent from './ClientComponent/ClientComponent';
import { Reset } from 'styled-reset'
import LandingComponent from './LandingComponent/LandingComponent';
const App = () => {
  return(
    <Router>
      <Reset/>
      <Route exact path="/" component={LandingComponent}/>
      <Route path="/client" component={ClientComponent}/>
    </Router>
  )
}

export default App;
