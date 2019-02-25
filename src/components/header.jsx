import React, { Component } from 'react';
import Nav from './nav';
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Nav />
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 my-auto">
              <h1>{this.props.heading}</h1>

            </div>
          </div>
        </div>
      </header>
    );
  }
}
//functions

export default Header;
