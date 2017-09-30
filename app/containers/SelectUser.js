import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity,  } from 'react-native';
import { Container, Content, Footer, FooterTab, H1, H2, P, Icon, Button } from 'native-base';
import { List, ListItem } from 'react-native-elements';

import { containerStyle, formStyle } from '../styles/generic';
import { login, loggedInToFB } from '../actions/account';
import COLOURS from '../styles/colours';

const styles = StyleSheet.create({

});



class SelectUser extends React.Component {

  registerProvider() {
    console.log("beep boop");
  }

  selectUser(user) {
    console.log("derp");
  }

  renderMyProviders(account) {
    const { providers } = account;
    if(providers.isEmpty()) {
      return <P>You have not registered any providers!</P>
    }

    return (
      <List>
        {
          providers.map((provider) => (
            <ListItem
              key={provider.id}
              title={provider.name}
              onPress={() => this.selectUser(provider)}
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
          <TouchableOpacity>
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
            <Button style={{backgroundColor: COLOURS.ACCENT}} full onPress={() => this.registerProvider()}>
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
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ loggedInToFB, login }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectUser);