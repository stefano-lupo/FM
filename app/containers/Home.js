import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyleSheet, Text, View } from 'react-native';


class Home extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Text>Welcome { this.props.user.firstName }</Text>
        <Text>Auth Token: { this.props.authToken }</Text>
      </View>
    );
  }
}

function mapStateToProps({ account: { authToken, user } }) {
  return {
    authToken,
    user,
  };
}

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({ fetchUserCoverPhoto }, dispatch);
// }

export default connect(mapStateToProps, null)(Home);