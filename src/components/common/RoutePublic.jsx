import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutePublic = (props) => {
  const { component: Component, isAuthenticated, to, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Redirect to={to} />;
        }
        return <Component {...props} />;
      }}
    />
  )
};

RoutePublic.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};


export default RoutePublic;
