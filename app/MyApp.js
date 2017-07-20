import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Scene, Router} from 'react-native-router-flux';

import Login from './containers/Login';
import Home from './containers/Home';
import FindProvider from './containers/FindProvider';
import Settings from './containers/Settings';


// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

export default class MyApp extends React.Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabBarPosition={"bottom"}
            tabs={true}
            tabBarStyle={{ backgroundColor: '#00aaFF' }} >

            {/* Provider Search */}
            <Scene key="providersTab" title="Providers" icon={TabIcon}>
              <Scene
                key="providers"
                component={FindProvider}
                title="Find Providers"
              />
            </Scene>

            {/* Home */}
            <Scene key="homeTab" title="Home" icon={TabIcon}>
              <Scene
                key="home"
                component={Home}
                title="Home"
              />
            </Scene>

            {/* Settings */}
            <Scene key="settings" title="Settings" icon={TabIcon}>
              <Scene
                key="settingsTab"
                component={Settings}
                title="Settings"
              />
            </Scene>


          </Scene>
        </Scene>
      </Router>
    );
  }
}