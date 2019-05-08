import React from 'react';
import { NavLink } from 'react-router-dom';


export const Header = () => {
  return (
    <div className="header">
      <div className="header__bar">
        <h2>Ruby Continental | Hotels &amp; Suites</h2>

        <div className="header__bar--end">
          <h4>Pemphero Aberash</h4>
          <p className="header__logout">Log out</p>
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
};