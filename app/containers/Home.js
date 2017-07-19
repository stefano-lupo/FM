import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import api from '../api/api';

export default class Home extends React.Component {


  render() {
    return (
      <View><Text>Welcome to Home</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
