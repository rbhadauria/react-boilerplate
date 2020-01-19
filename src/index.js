import React from 'react';
import ReactDOM from 'react-dom';
import DefaultErrorBoundary from './DefaultErrorBoundary';
import '@babel/polyfill';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
