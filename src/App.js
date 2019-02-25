import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './views/home';
import Login from './views/login';
import Signup from './views/signup';


import { NavLink, Switch, Route } from 'react-router-dom';


class Main extends Component {
  state = {}
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (
          <Home {...props} />
        )}></Route>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />

      </Switch>
    );
  }
}
class App extends Component {
  simpleAction = (event) => {
   this.props.simpleAction();
  }
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
