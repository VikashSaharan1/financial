// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './auth/reducers/authReducer';


// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer
});


// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
