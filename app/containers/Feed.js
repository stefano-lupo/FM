import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Api from '../api/api';

const api = new Api();

export default class Feed extends React.Component {

  componentDidMount() {
    console.log(api.getUsers());
  }

  render() {
    return (
      <View><Text>Welcome to Feed</Text></View>
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
