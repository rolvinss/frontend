import { ActionTypes } from './action';


const initialState = {
  isAuthenticated: true,
  login: {
    userInfo: null,
    isLoading: null,
    error: null,
  },
  isLoading: false,
  userDetails: {}
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.LOGIN_FETCHING:
      console.log("fetching")
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.LOGIN_SUCCESS:
      console.log(payload)
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        userDetails: payload
      };

    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false
      };

    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      };

    case ActionTypes.UPDATE_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        login: {
          ...state.login,
          userInfo: action.payload,
          isLoading: false,
          error: null,
        },
      };

    case ActionTypes.SET_LOADER:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
