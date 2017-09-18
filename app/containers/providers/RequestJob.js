import React from 'react';
import { Image, View, ScrollView, TextInput } from 'react-native';
import { Container, Content, Header, Text, H1, Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { requestJob } from '../../actions/jobs';
import { formStyle, containerStyle } from '../../styles/generic';


class ProviderProfile extends React.Component {

  constructor(){
    super();
    this.state = {
      title: undefined,
      description: undefined,

    };
  }

  componentDidMount() {
    // Fetch reviews etc, merge into currentPRovider?
    //this.props.getProvidersByCategory(this.props.category.category);
  }

  onJobRequested(provider) {
    const { title, description } = this.state;
    this.props.requestJob(provider._id, title, description, provider.category );
    Actions.pop();
  }

  render() {
    const { provider } = this.props;
    return (
      <ScrollView style={containerStyle.container}>
        <H1>{ provider.getName() }</H1>
        <Text>Job Title</Text>
        <TextInput placeholder="What you need done?"
           style={formStyle.textInput}
           onChangeText={(title) => this.setState({title})}
           value={this.state.title}/>
        <Text>Job Description</Text>
        <TextInput multiline={true} numberOfLines={4}
           placeholder="Some more info" style={formStyle.textInput}
           onChangeText={(description) => this.setState({description})}
           value={this.state.description}/>
        <Button block onPress={() => this.onJobRequested(provider)}>
          <Text>Request Job</Text>
        </Button>
        <View style={formStyle.dummyPadding} />
      </ScrollView>
    );
  }
}


function mapStateToProps({ providers: { providersByCategory } }) {
  return {
    providersByCategory
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({ requestJob }, dispatch);
}

export default connect(null, matchDispatchToProps)(ProviderProfile);