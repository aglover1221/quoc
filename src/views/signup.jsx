import React, { Component } from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import SignupForm from '../components/signup-form';
class Signup extends Component {
  state = {}
  render() {
    return (
      <div>
        <Header heading="Signup" />
        <SignupForm />
      </div>
    );
  }
}
//functions

export default Signup;
