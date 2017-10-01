import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import styles from '../../styles/home.js';
import { containerStyle } from '../../styles/generic';


class Home extends React.Component {

  componentDidMount() {

  }

  render() {
    return <Text>hi</Text>;``
  }
}

function mapStateToProps(store) {
  return {
    account: store.get('account'),
    user: store.get('user'),
    myProvider: store.get('myProvider')
  };
}

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({ fetchUserCoverPhoto }, dispatch);
// }

export default connect(mapStateToProps, null)(Home);