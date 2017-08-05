import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyleSheet, Text, View } from 'react-native';


class Home extends React.Component {

  componentDidMount() {
  }

  render() {
    const { accountAuthToken, email, fbAccessToken } = this.props.account;
    const { userAuthToken, firstName, lastName } = this.props.user;
    return (
      <View>
        <Text>Welcome { firstName } {lastName }</Text>
        <Text>Email: { email }</Text>
        <Text>FBToken: { fbAccessToken }</Text>
        <Text>Account Auth Token: { accountAuthToken.substr(0,10) }</Text>
        <Text>User Auth Token: { userAuthToken.substr(0,10) }</Text>
      </View>
    );
  }
}

function mapStateToProps(store) {
  return {
    account: store.get('account'),
    user: store.get('user'),
  };
}

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({ fetchUserCoverPhoto }, dispatch);
// }

export default connect(mapStateToProps, null)(Home);