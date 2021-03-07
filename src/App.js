import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from 'services/history';
import { getUserInfo } from "services/auth.service";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RoutePublic from 'components/common/RoutePublic'
import RoutePrivate from "components/common/RoutePrivate";

import Login from 'containers/Login';
import Home from "containers/Home";

import { updateLogin, logout } from 'store/auth/action';
import SmallLoader from 'components/common/smallLoader';

import "./index.css";

class App extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticateLoading: true,
    };
    this.getLoggedInStatus();

    //this function is used to set the default search engine value which is pubmed or xavient at this point of time.
    // this.props.defaultSource()
  }

  getLoggedInStatus = () => {
    this.props.updateLogin()
  };

  logoutHandler = () => {
    this.props.logout();
  }

  render() {
    let { isAuthenticated } = this.props;    
    const generalLoader = this.props.loader;
    const authLoader = this.props.authLoading;
    return (<Router basename={process.env.REACT_APP_BASE_URL} history={history}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      {/* loader for all process except auth loading */}
      {generalLoader ? <SmallLoader /> : null}
      {authLoader ? <SmallLoader type="auth" /> : null}

      <Switch>
        <RoutePublic
          isAuthenticated={isAuthenticated}
          to="/"
          path="/"
          exact
          component={Login}
        />
        <RoutePrivate 
        isAuthenticated={isAuthenticated}
        to="/home"
        path="/home"
        exact
        component={Home}
        />
        <Redirect to="/" />
      </Switch>
      {/* {isAuthenticated ? <Footer /> : null} */}
    </Router>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    authLoading: state.auth.isLoading,

  };
}

const mapDispatchToProps = {
  updateLogin,
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);