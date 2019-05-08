import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login';
import { Home } from './Home';
import { ConfirmDetails } from './ConfirmDetails';
import { ResetPassword } from './ResetPassword';
import { ProtectedRoute } from './ProtectedRoute';


export function App() {
  return (
    <Router>
      <div> 
        <Route exact path="/" component={Login} />
        <Route path="/confirmDetails" component={ConfirmDetails} />
        <Route path="/resetPassword" component={ResetPassword} />
        <ProtectedRoute path="/home" component={Home} />
      </div>
    </Router>
  )
}
