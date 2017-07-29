import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, Text, View, Button, Alert } from 'react-native';


import { loggedIn } from '../actions/account';

class Login extends React.Component {

  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('148118272433624', {
      permissions: ['public_profile', 'email', 'user_friends'],
    });
    if (type === 'success') {
      await this.props.loggedIn(token);
      await Actions.replace('tabbar');
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome to Find Me! </Text>
        <Button onPress={() => this.logIn()} title="Login with Facebook" />
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    providers: state.ProvidersReducers.providersByCategory,
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({ loggedIn }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);