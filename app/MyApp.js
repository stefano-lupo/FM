import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router, TabBar } from 'react-native-router-flux';

import Login from './containers/Login';
import Home from './containers/Home';
import FindProvider from './containers/FindProvider';
import Feed from './containers/Feed';
import Settings from './containers/Settings';


// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>Derp{title}</Text>
  );
};

var styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

export default class MyApp extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="Route">
          <Scene key="home" title="Home" tabs={true} hideNavBar={true} tabBarStyle={styles.tabBar}>
            <Scene key="ProviderSearchTab" tabBarLabel="Feed" component={FindProvider} hideNavBar={true}>
            </Scene>
            <Scene key="FeedTab" tabBarLabel="Providers" component={Feed} hideNavBar={true}>
            </Scene>
            <Scene key="SettingsTab" tabBarLabel="Settings" component={Settings} hideNavBar={true}>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}