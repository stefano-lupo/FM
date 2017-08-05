import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, View, TextInput } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text, H1, Icon } from 'native-base';

import { containerStyle, formStyle } from '../styles/generic';
import { login, loggedInToFB } from '../actions/account';

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

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: undefined,
      password: undefined,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("Received Props");
    if(nextProps.account.accountAuthToken && nextProps.user.userAuthToken) {
      Actions.replace('tabbar');
    }
  }

  async logInFb() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('148118272433624', {
      permissions: ['public_profile', 'email', 'user_friends'],
    });
    if (type === 'success') {
      await this.props.loggedInToFB(token);
    }
  }

  login() {
    const { email, password } = this.state;
    this.props.login(email, password)
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}} padder={true} >
          <View style={styles.headerContainer}>
            <H1>Welcome to FindMe! </H1>
          </View>
          <View style={styles.formContainer}>
            <Text>Email </Text>
            <TextInput
              keyboardType={'email-address'}
              placeholder="you@email.com"
              style={formStyle.textInput}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            <Text>Password </Text>
            <TextInput
              style={formStyle.textInput}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry={true}
            />
            <Button block onPress={() => this.login()}><Text>Login</Text></Button>
            <Text style={{textAlign: 'center', paddingVertical: 20}}>Or</Text>
            <Button iconLeft block onPress={() => this.logInFb()}>
              <Icon name="pizza" />
              <Text>Login with Facebook</Text>
            </Button>

          </View>
          <View style={styles.buttonsContainer}>

          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={() => Actions.register()}>
              <Text>Register for an Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


// function mapStateToProps({ account : { authToken }}) {
//   return {
//     authToken
//   };
// }

function mapStateToProps(store) {
  return {
    account: store.get('account'),
    user: store.get('user'),
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ loggedInToFB, login }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);