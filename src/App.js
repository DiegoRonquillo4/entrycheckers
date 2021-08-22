import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Navigation from './components/Navigation'
import Show from './components/ShowIngreso'
import Panel from './components/PanelControl'
import Home from './components/Home'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
     <Route path="/registrar" exact component={Panel} />
     <Route path="/Mall1" exact component={Show} />
    </Router>
  );
}
export const backend = {
  host: "http://localhost",
  port: 8080
}


export default App;
