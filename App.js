import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './app/reducers/';

import MyApp from './app/MyApp'

const store = createStore(
  Reducers,
  applyMiddleware(thunk)
);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}
