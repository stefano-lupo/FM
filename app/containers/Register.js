import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, TextInput, Text, View, Button, ScrollView } from 'react-native';

import { formStyle } from '../styles/generic';
import { register } from '../actions/account';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
  },
  header: {
    marginBottom: 10,
    padding: 20,
    alignSelf: 'center',
  },
  formContainer: {
    flex: 1,
  },
  textInput: {
    height: 50,
    padding: 5,
    marginBottom: 20,
    alignContent: 'center',
  },
  dummyPadding: {
    paddingBottom: 400
  }
});


class Register extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: undefined,
      email: undefined,
      password: undefined,
    }
  }

  componentWillReceiveProps(props) {
    console.log("received props");
    console.log(props);
    if(props.account.accountAuthToken) {
      Actions.home();
    }
  }

  register() {
    this.props.register(this.state);
  }
  
  render() {
    console.log(this.props.account);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text>First, lets set you up with an account</Text>
        </View>
        <View style={styles.formContainer}>
          <Text>First Name </Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
          />
          <Text>Last Name </Text>
          <TextInput
            autoCapitalize={'words'}
            autoCorrect={false}
            style={styles.textInput}
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
          />
          <Text>Email </Text>
          <TextInput
            keyboardType={'email-address'}
            style={styles.textInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <Text>Password </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
          />
          <Button title="Register" onPress={() => this.register()} />
          <View style={formStyle.dummyPadding}></View>
        </View>
      </ScrollView>
    );
  }
}


function mapStateToProps(store) {
  return {
    account: store.get('account')
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({ register }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Register);