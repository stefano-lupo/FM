import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';


class Home extends React.Component {

  componentDidMount() {
  }

  render() {
    const { job } = this.props;
    console.log(job);
    return (
      <View>
        <Text>hi</Text>
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

function matchDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserCoverPhoto }, dispatch);
}

export default connect(null, null)(Home);