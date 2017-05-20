import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import '../assets/vendor/bootstrap/css/bootstrap.css';

import store from './store';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
