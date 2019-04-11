import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login';
import { Home } from './Home';
import { ConfirmDetails } from './ConfirmDetails';
import { ResetPassword } from './ResetPassword';


export function App() {
  return (
    <Router>
      <div> 
        <Route exact path="/" component={Login} />
        <Route path="/confirmDetails" component={ConfirmDetails} />
        <Route path="/home" component={Home} />
        <Route path="/resetPassword" component={ResetPassword} />
      </div>
    </Router>
  )
}
