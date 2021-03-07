import { errorMessages } from 'constants/errorMessages';
import { doLogin, doLogout, loginStatus } from '../../services/auth.service';
import { toast } from "react-toastify";
import history from 'services/history';

const MODULE_NAME = '[AUTH] ';

export const ActionTypes = {

  LOGIN_FETCHING: MODULE_NAME + 'LOGIN_FETCHING',
  LOGIN_SUCCESS: MODULE_NAME + 'LOGIN_SUCCESS',
  LOGIN_FAILURE: MODULE_NAME + 'LOGIN_FAILURE',

  LOGOUT_SUCCESS: MODULE_NAME + 'LOGOUT_SUCCESS',

  UPDATE_AUTH: MODULE_NAME + 'UPDATE_AUTH',

  SET_LOADER: MODULE_NAME + 'SET_LOADER',


};

export const loginSuccessAction = (result) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: result
});

const updateAuthAction = payload => ({
  type: ActionTypes.UPDATE_AUTH,
  payload: payload
})


export const login = data => dispatch => {
  dispatch(({ type: ActionTypes.LOGIN_FETCHING }));
  return doLogin(data)
    .then((response) => {
      if(response?.token){
        localStorage.setItem("token", response.token);
        dispatch(loginSuccessAction(response.token))
      }
    })
    .catch(err => {
      toast.error('Invalid Credentials.');
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: errorMessages[401]
      });
      throw errorMessages[401];
    });
};

export const logout = () => dispatch => {
  doLogout()
    .then((response) => {
      dispatch({
        type: ActionTypes.LOGOUT_SUCCESS
      });
      localStorage.removeItem("adv_s_fi"); // advanced fields removed
      localStorage.removeItem("defaultCollection");  // remove the default collection settings for the application which is set by default from user login page
      history.push("/")
    })
    .catch(err => {
      console.log('logout', err);
    });
};

export const userInfo = (response) => dispatch => {
  dispatch(updateAuthAction(response))
};

export const updateLogin = () => dispatch => {
  dispatch(({ type: ActionTypes.LOGIN_FETCHING }));
  if(localStorage.getItem("token")==="" || localStorage.getItem("token")==undefined){
    history.push("/")
    dispatch({
      type: ActionTypes.LOGIN_FAILURE,
      payload: errorMessages[401]
    });
  }else{
    dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
          });
  }
  // return loginStatus()
  //   .then((result) => {
  //     dispatch({
  //       type: ActionTypes.LOGIN_SUCCESS,
  //       payload: result
  //     });
  //     return true || {};
  //   })
  //   .catch(error => {
  //     dispatch({
  //       type: ActionTypes.LOGIN_FAILURE,
  //       payload: { error }
  //     });
  //     return null;
  //   })
};

export const logoutHandler = () => dispatch => {
  dispatch({type: ActionTypes.LOGIN_FAILURE});
  localStorage.removeItem("token");
  history.push("/")
}