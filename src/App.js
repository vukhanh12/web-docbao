import React from 'react';
import logo from './logo.svg';
import './App.css';



import Genk from './components/Genk.js'
import ICT from './components/ICT.js'
import Mobile from './components/Mobile.js'
import Internet from './components/Internet.js'
import Login from './login/login.js'
import SignUp from './login/signup'

import TopMenu from './components/TopMenu.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Index = () => <h2>Home</h2>

function App(path) {

  return (
    <Router>
    <div className="App">
     <TopMenu/>
    </div>

    <Route path="/" exact component={Genk}/>
    
    <Route path="/mobile" exact component={Mobile}/>
    <Route path="/tin-ict" exact component={ICT}/>
    <Route path="/internet" exact component={Internet}/>

    <Route path="/login" exact component={Login}/>
    <Route path="/signup" exact component={SignUp}/>
    </Router>
  );
}

export default App;
