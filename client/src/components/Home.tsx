import React, { Component } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';


export class Home extends Component {

  logout = () => {
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div className="header">
        <div className="header__bar">
          <h2>Ruby Continental | Hotels &amp; Suites</h2>

          <div className="header__bar--end">
            <h4>Pemphero Aberash</h4>
            <NavLink to="/" className="header__logout">
              <p onClick={this.logout}>Log out</p>
            </NavLink>
          </div>
        </div>

        <ul className="header__nav">
          <li>
            <NavLink to="#">Bookings</NavLink>
          </li>
          <li>
            <NavLink to="#">Accounts</NavLink>
          </li>
          <li>
            <NavLink to="#">Utilities</NavLink>
          </li>
          <li>
            <NavLink to="#">Facilities</NavLink>
          </li>
          <li>
            <NavLink to="#">Management</NavLink>
          </li>
        </ul>
      </div>
    );
  }
};