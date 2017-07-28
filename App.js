import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Spinner } from 'native-base';

import Reducers from './app/reducers/';

import MyApp from './app/MyApp'

const store = createStore(
  Reducers,
  applyMiddleware(thunk)
);

export default class App extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({fontLoaded: true});
  }
  render() {
    if(this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <MyApp />
        </Provider>
      );
    } else {
      return <Spinner />
    }
  }
}
