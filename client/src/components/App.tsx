import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login';
import { ConfirmDetails } from './ConfirmDetails';
import { ResetPassword } from './ResetPassword';


export function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/confirmDetails" component={ConfirmDetails} />
      <Route path="/resetPassword" component={ResetPassword} />
    </Router>
  )
}
