import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, H1, H2, P, Icon } from 'native-base';
import { List, ListItem } from 'react-native-elements';

import { containerStyle, formStyle } from '../styles/generic';
import { registerServiceProvider } from '../actions/account';
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

  register() {
    console.log("hit");
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
              value={this.state.description}
            />
            <Text>Category </Text>
            <TextInput
              style={formStyle.textInput}
              onChangeText={(category) => this.setState({category})}
              value={this.state.category}
            />
            <Button style={{backgroundColor: COLOURS.ACCENT}} block onPress={() => this.register()}><Text>Register</Text></Button>
          </View>
        </Content>
      </Container>
    );
  }
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({ registerServiceProvider }, dispatch);
}

export default connect(null, matchDispatchToProps)(RegisterProvider);