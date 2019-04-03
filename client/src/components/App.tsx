import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login';


export function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
    </Router>
  )
}
