import axios from 'axios';

const constants = {
  BASE_URL: {
    dev: process.env.REACT_APP_DEV_URL,
    prod: process.env.REACT_APP_PROD_URL
  },
};

export const getConstants = key =>
  typeof process.env.NODE_ENV !== 'undefined'
    ? constants[key.toLocaleUpperCase()].dev
    : constants[key].prod;

const instance = axios.create({
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json",
    // token: JSON.stringify(localStorage.getItem("token")).slice(1, -1)
    token: JSON.stringify(localStorage.getItem("token")).slice(1, -1)
  }
});

export default instance;
