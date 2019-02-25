import React, { Component } from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import SigninForm from '../components/signin-form';
class Login extends Component {
  state = {}
  render() {
    return (
      <div>
        <Header heading="Login"/>
        <SigninForm />
      </div>
    );
  }
}
//functions

export default Login;
