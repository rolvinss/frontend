import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import  LeftNavBar  from 'components/leftNavBar';
import "./index.css";


const RoutePrivate = (props) => {
  const { component: Component, isAuthenticated, to, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated) {
          return <Redirect to={"/"} />;
        }
        return (<React.Fragment>
          <div className="float-container">
            <div className="float-child">
              {/* <LeftNavBar /> */}
              leftNavBar
            </div>
            <div className="float-child child-main" >
              <Component {...props} />
            </div>
          </div>
        </React.Fragment>);
      }}
    />
  )
};

RoutePrivate.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};


export default RoutePrivate;
