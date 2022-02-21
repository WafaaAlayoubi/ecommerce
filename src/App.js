import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Details from './components/Details'
import {  checkUserAsync } from './features/user/userSlice';
import {  useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const dispatch = useDispatch();
  dispatch(checkUserAsync());

  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/signin"   component={SignIn}/>
        <Route path="/signup"  component={SignUp}/>
        <Route path="/products"  component={Products}/>
        <Route path="/details" component={Details}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
