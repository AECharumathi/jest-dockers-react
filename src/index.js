import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux'

import reducers from "./reducers";

const store = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={store(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

