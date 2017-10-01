import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity,  } from 'react-native';
import { Container, Content, Footer, FooterTab, H1, H2, P, Icon, Button } from 'native-base';
import { List, ListItem } from 'react-native-elements';

import { containerStyle, formStyle } from '../styles/generic';
import { loginMyProvider } from '../actions/account';
import COLOURS from '../styles/colours';

const styles = StyleSheet.create({

});



class SelectUser extends React.Component {

  componentWillReceiveProps({user, myProvider}) {
    if(user) {
      Actions.home({type: 'user'});
    } else if (myProvider) {
      Actions.home({type: 'provider'});
    }
  }

  loginUser() {

  }

  loginProvider(id) {
    this.props.loginMyProvider(id);
  }

  registerProvider(accountId) {
    Actions.registerProvider({accountId});
  }

  renderMyProviders(account) {
    const { providers } = account;
    if(providers.isEmpty()) {
      return <Text>You have not registered any providers!</Text>
    }

    return (
      <List>
        {
          providers.map((provider) => (
            <ListItem
              key={provider.id}
              title={provider.name}
              onPress={() => this.loginProvider(provider.id)}
              avatar={{uri: provider.thumbnail}}
            />
          ))
        }
      </List>
    );
  }

  render() {
    const { account } = this.props;

    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}} padder={true} >
          <H2>Log in as User</H2>
          <TouchableOpacity onPress={this.loginUser}>
            <View style={{flexDirection: 'row'}}>
              <View stlye={{flex: 2}}>
                <Icon name='person' theme={{ iconFamily: 'FontAwesome' }}/>
              </View>
              <View style={{flex: 3}}>
                <Text>{account.getName()}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <H2>Or Your Service?</H2>
          {this.renderMyProviders(account)}
        </Content>
        <Footer>
          <FooterTab>
            <Button style={{backgroundColor: COLOURS.ACCENT}} full onPress={() => this.registerProvider(account.id)}>
              <Text>Register a Provider</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function mapStateToProps(store) {
  return {
    account: store.get('account'),
    myProvider: store.get('myProvider'),
    user: store.get('user')
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ loginMyProvider }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectUser);