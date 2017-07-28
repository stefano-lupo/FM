import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, Text, View, Button, Alert } from 'react-native';


import { loggedIn } from '../actions/account';

// todo delete this!
//"Cr02#a$BdPUIzGvh6l%aPSnwW2!pVJO^ZYCbNb55ai8YmmIAyC2!nFALZrpRlY6brtdt6c8MY5@R*80sATA$LXotY22l!&5706ko^ALjTApYiVJMXswd2SWUyfxd7cqz"

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
  //
  // logIn() {
  //   console.log("thi");
  //   this.props.loggedIn("Penmis");
  //   Actions.home();
  // }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome to Find Me! </Text>
        <Button title="Log in with Facebook" onPress={() => this.logIn()}
        /></View>
    );
  }
}


function mapStateToProps(state) {
  return {
    providers: state.ProvidersReducers.providersByCategory,
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({loggedIn}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);