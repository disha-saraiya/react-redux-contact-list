import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux'; 
import './index.css';
import rootReducer from './reducers/index'; 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer); 

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App />
  </Provider>
  </BrowserRouter>
  ,document.getElementById('root')
);
