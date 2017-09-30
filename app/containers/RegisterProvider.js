import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, H1, H2, P, Icon } from 'native-base';
import { List, ListItem } from 'react-native-elements';

import { containerStyle, formStyle } from '../styles/generic';
import { login, loggedInToFB } from '../actions/account';
import COLOURS from '../styles/colours';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 2,

  },
  buttonsContainer: {

  }
});

class RegisterProvider extends React.Component {

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}} padder={true} >
          <H1>Register bro</H1>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(store) {
  return {
    account: store.get('account'),
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ loggedInToFB, login }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(RegisterProvider);