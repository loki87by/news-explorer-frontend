// *импорты
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// *функционал
const ProtectedRoute = ({component: Component, ...props}) => {
  React.useEffect(() => {
    if (!props.loggedIn) {
      props.handleLoginClick();
    }
  });

  return (
    <Route>
      {
      () => props.loggedIn ? <Component {...props} /> : <Redirect to="/"/>
      }
    </Route>
  )
};

// *экспорт
export default ProtectedRoute;