import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Scene, Router, TabBar } from 'react-native-router-flux';

import Login from './containers/Login';
import Home from './containers/Home';
import FindProvider from './containers/FindProvider';
import Feed from './containers/Feed';
import Settings from './containers/Settings';

export default class MyApp extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="Route">
          <Scene key="home" title="Home" tabs={true} hideNavBar={true} tabBarStyle={styles.tabBar}>
            <Scene key="ProviderSearchTab" tabBarLabel="Providers" component={FindProvider} hideNavBar={true}>
            </Scene>
            <Scene key="FeedTab" tabBarLabel="Feed" component={Feed} hideNavBar={true}>
            </Scene>
            <Scene key="SettingsTab" tabBarLabel="Settings" component={Settings} hideNavBar={true}>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}