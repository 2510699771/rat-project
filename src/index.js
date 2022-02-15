import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './redux/store'
import { Provider } from 'react-redux';

import axios from 'axios';
import './api/axios'
axios.defaults.baseURL = 'http://web.woniuxlab.com:8002'
// import "antd/dist/antd.css"
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
