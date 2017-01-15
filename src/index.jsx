import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import App from './containers/app';
import reducers from './reducers';
import './index.scss';

const finalCreateStore = compose(
  applyMiddleware(promise),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore);

const store = finalCreateStore(reducers, {});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
