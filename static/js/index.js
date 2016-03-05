import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers';
import App from './components/App';

let store = createStore(todo);

React.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
);
