import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './containers/App';

function run() {
  let domAppElement = document.getElementById('app');
  if (!domAppElement) {
    domAppElement = document.createElement('app');
    document.body.appendChild(domAppElement);
  }

  /* eslint no-underscore-dangle:off */
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // Only for dev
    applyMiddleware(thunk),
  );

  /* eslint react/jsx-filename-extension: off */
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    domAppElement,
  );
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
