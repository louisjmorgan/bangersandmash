/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'Bangers and Mash Festival';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
