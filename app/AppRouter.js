import React from 'react';
import { Text } from 'react-native';
import { Scene, Router} from 'react-native-router-flux';

import COLOURS from './styles/colours';


import Login from './containers/Login';
import Register from './containers/Register';

import Home from './containers/home/Home';
import JobProfile from './containers/home/JobProfile';

import Chat from './containers/chat/Chat';
import ChatList from './containers/chat/ChatList';

import ProviderCategories from './containers/providers/ProviderCategories';
import ProviderList from './containers/providers/ProviderList';
import ProviderProfile from './containers/providers/ProviderProfile';
import ProviderReview from './containers/providers/ProviderReview';
import RequestJob from './containers/providers/RequestJob';


// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

export default class AppRouter extends React.Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabs={true}
            tabBarPosition="bottom"
/*            tabBarStyle={{ backgroundColor: COLOURS.ACCENT }}
            activeBackgroundColor={{backgroundColor: 'yellow'}}
            ativeTintColor="white"
            indicatorStyle={{backgroundColor: 'white'}}*/
          >

            {/* Provider Search */}
            <Scene key="providersTab" title="Providers" icon={TabIcon}>
              <Scene
                key="providerCategories"
                component={ProviderCategories}
                title="Categories"
              />
              <Scene
                key="providerList"
                component={ProviderList}
                title="Providers List"
                hideTabBar={true}
              />
              <Scene
                key="providerProfile"
                component={ProviderProfile}
                title="Provider Profile"
                hideTabBar={true}
              />
              <Scene
                key="providerReview"
                component={ProviderReview}
                title="Provider Review"
                hideTabBar={true}
              />
              <Scene
                key="requestJob"
                component={RequestJob}
                title="Request Job"
                hideTabBar={true}
              />
            </Scene>


            {/* Home */}
            <Scene key="homeTab" title="Home" icon={TabIcon} initial={true}>
              <Scene
                key="home"
                component={Home}
                title="Home"
                hideNavBar={true}
              />
              <Scene
                key="jobProfile"
                component={JobProfile}
                title="Job Profile"
              />
            </Scene>


            {/* Chat */}
            <Scene key="chatTab" title="Chat" icon={TabIcon}>
              <Scene
                key="chatList"
                component={ChatList}
                title="ChatList"
                initial={true}
              />
              <Scene
                key="chat"
                component={Chat}
                title="Chat"
              />
            </Scene>


          </Scene>

          <Scene key="login" title="Login" component={Login} initial={true} hideNavBar={true} />
          <Scene key="register" title="Register" component={Register} />
        </Scene>
      </Router>
    );
  }
}