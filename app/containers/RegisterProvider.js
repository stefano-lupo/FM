import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, H1, H2, P, Icon } from 'native-base';
import { List, ListItem } from 'react-native-elements';

import { containerStyle, formStyle } from '../styles/generic';
import { registerMyProvider } from '../actions/account';
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

  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      category: "",
    }
  }

  componentWillReceiveProps({ myProvider }) {
    if(myProvider) {
      Actions.home({type: 'provider'});
    }
  }

  registerServiceProvider(accountId) {
    const { name, description, category } = this.state;
    this.props.registerMyProvider({name, description, category, accountId});
  }

  render() {
    const { accountId } = this.props;
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}} padder={true} >
          <H1>Register as a Service Provider</H1>
          <View style={styles.formContainer}>
            <Text>Name </Text>
            <TextInput
              placeholder="Jim's Gym"
              style={formStyle.textInput}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
            <Text>Description </Text>
            <TextInput
              style={formStyle.textInput}
              onChangeText={(description) => this.setState({description})}
              placeholder="We Lift Weights"
              value={this.state.description}
              multiline={true}
            />
            <Text>Category </Text>
            <TextInput
              placeholder="Health & Fitness"
              style={formStyle.textInput}
              onChangeText={(category) => this.setState({category})}
              value={this.state.category}
            />
            <Button style={{backgroundColor: COLOURS.ACCENT}} block onPress={() => this.registerServiceProvider(accountId)}><Text>Register</Text></Button>
          </View>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(store) {
  return {
    myProvider: store.get('myProvider')
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ registerMyProvider }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(RegisterProvider);