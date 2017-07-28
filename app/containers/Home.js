import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {


  render() {
    return (
      <View><Text>Welcome to {this.props.authToken}</Text></View>
    );
  }
}

function mapStateToProps(state) {
  return {
    authToken: state.AccountReducers.authToken,
  };
}
// function matchDispatchToProps(dispatch){
//   return bindActionCreators({fetchProvidersByCategory}, dispatch);
// }

export default connect(mapStateToProps, null)(Home);