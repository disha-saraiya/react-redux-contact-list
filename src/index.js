import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux'; 
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import contactListReducer from './reducers/contactListReducer';

//The Redux store is created from the contactListReducer since it is a single reducer. 
const store = createStore(contactListReducer); 

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App />
  </Provider>
  </BrowserRouter>
  ,document.getElementById('root')
);
