// utils/api.js
import axios from 'axios';
import store from '../store';
import { logout } from '../auth/actions/authActions';
import { GetType } from './local-store';

const api = axios.create({
  //baseURL: 'https://alpha.surfpoint.io/api/v1/',
  baseURL: 'http://localhost:8080/api/v1/',
    
});

api.interceptors.request.use(config => {

  if(config.url.indexOf('/auth/') >= 0 || window.location.pathname === "/") {
    return config;
  }

  const auth = store.getState().auth;
  let accessToken  = null;
  console.log(GetType(auth));
  if(GetType(auth) === 'object'){
     accessToken = auth.accessToken;
  } else if(GetType(auth) === 'string') {
    accessToken = JSON.parse(store.getState().auth).accessToken;
  }
  //const accessToken = store.getState().auth.accessToken;
  if (accessToken) {
    //console.log('test');
    config.headers["x-access-token"] = accessToken;
    //config.headers["x-access-token"] = accessToken;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    if (error.response.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default api;
