import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Nav extends Component {
  constructor(props) {
    super(props);
  }
  renderNav() {
      return (
      <nav className="navbar fixed-top navbar-expand-lg">
        <NavLink className="navbar-brand" to={`/`}>QUOC</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to={`/`}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/signup`}>Signup</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/login`}>Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )

  }
  render() {

    return (
      <div>
      {this.renderNav()}
      </div>
    );
  }
}
//functions

export default Nav;
