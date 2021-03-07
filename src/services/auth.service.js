import axios from './config';
import endPoint from "./endpoint";
import { successHandler, errorHandler } from './utils';
import { TOKEN_FIELD } from "constants/urlConstants.js";


export const doLogin = (userDetail) => {
  return axios
    .post(endPoint.login(), userDetail)
    .then(response => {
      return successHandler(response).then((result) => {
        return result;
      });
    })
    .catch(error => {
      return errorHandler(error);
    });
};

export const doLogout = () => {
  return axios
    .post(endPoint.logout())
    .then(response => {
      return successHandler(response).then((response) => {
        return response;
      })
    })
    .catch(error => {
      return errorHandler(error);
    });
};




// we are utilizing search api for user authentication on every page refresh hit. 
export const loginStatus = () => {
  return axios
    .get(endPoint.userInfo())
    .then(response => {
      return successHandler(response).then((response) => {
        /* if (response && response.response && response.response.docs) {
          return true
        }
        return false; */
        return response
      });
    })
    .catch(error => {
      return errorHandler(error);
    })
}

