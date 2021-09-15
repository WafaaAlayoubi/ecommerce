import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signin"   component={SignIn}/>
        <Route path="/signup"  component={SignUp}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
