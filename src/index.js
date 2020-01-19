import React from 'react';
import ReactDOM from 'react-dom';
import DefaultErrorBoundary from './DefaultErrorBoundary';
import '@babel/polyfill';
import App from './App';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  let axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
