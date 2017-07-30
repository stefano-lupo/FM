import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, Text, View, Button, Alert } from 'react-native';


import { loggedInToFB } from '../actions/account';

class Login extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.authToken) {
      Actions.replace('tabbar');
    }
  }

  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('148118272433624', {
      permissions: ['public_profile', 'email', 'user_friends'],
    });
    if (type === 'success') {
      await this.props.loggedInToFB(token);
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome to FindMe! </Text>
        <Button onPress={() => this.logIn()} title="Login with Facebook" />
      </View>
    );
  }
}


function mapStateToProps({ account : { authToken }}) {
  return {
    authToken
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({ loggedInToFB }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);