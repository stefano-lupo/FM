import React from 'react';
import { Text } from 'react-native';
import { Scene, Router} from 'react-native-router-flux';

import Login from './containers/Login';
import Home from './containers/Home';
import ProviderCategories from './containers/ProviderCategories';
import Settings from './containers/Settings';
import ProviderList from './containers/ProviderList';


// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

export default class MyApp extends React.Component {

  render() {
    return (
      <Router>
        <Scene hideNavBar="true" key="root">
          <Scene
            key="tabbar"
            tabBarPosition={"bottom"}
            tabs={true}
            tabBarStyle={{ backgroundColor: '#00aaFF' }} >

            {/* Provider Search */}
            <Scene key="providersTab" title="Providers" icon={TabIcon}>
              <Scene
                key="providerCategories"
                component={ProviderCategories}
                title="Find Providers"
              />
              <Scene
                key="providerList"
                component={ProviderList}
                title="Provider List"
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