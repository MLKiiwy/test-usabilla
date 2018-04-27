import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

function run() {
  let domAppElement = document.getElementById('app');
  if (!domAppElement) {
    domAppElement = document.createElement('app');
    document.body.appendChild(domAppElement);
  }

  /* eslint react/jsx-filename-extension: off */
  ReactDOM.render(<App />, domAppElement);
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
