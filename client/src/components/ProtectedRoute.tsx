import React, { ReactNode } from 'react';
import {
  Route,
  Redirect,
  RouteProps
} from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuthenticated';


interface ProtectedProps extends RouteProps {
  component: React.ComponentType<RouteProps>,
}

export const ProtectedRoute: React.SFC<ProtectedProps> = (props: ProtectedProps) => {
  const { component: Component, ...rest} = props;

  return <Route {...rest} render={(routeProps) => (
      (isAuthenticated()) 
      ? <Component {...routeProps} />
      : <Redirect to={{
          pathname: '/',
          state: { from: routeProps.location }
        }}/>
    )}
  />
}