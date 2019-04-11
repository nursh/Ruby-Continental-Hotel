import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom';


export const Home = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/utilities">Utilities</Link>
        </li>
        <li>
          <Link to="/facilities">Facilities</Link>  
        </li>
        <li>
          <Link to="/management">Management</Link>
        </li>
      </ul>
    </div>

    <Route path="/bookings" component={Bookings} />
    <Route path="/accounts" component={Accounts} />
    <Route path="/utilities" component={Utilities} />
    <Route path="/facilities" component={Facilities} />
    <Route path="/management" component={Management} />
  </Router>
);

const Bookings = () => <h1>Bookings</h1>
const Accounts = () => <h1>Accounts</h1>
const Utilities = () => <h1>Utilities</h1>
const Facilities = () => <h1>Facilities</h1>
const Management = () => <h1>Management</h1>

