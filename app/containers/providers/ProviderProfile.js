import React from 'react';
import { Image, View, ScrollView } from 'react-native';
import { Text, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProvidersByCategory } from '../../actions/providers';
import Profile from '../../components/Profile';


class ProviderProfile extends React.Component {

  componentDidMount() {
    // Fetch reviews etc, merge into currentPRovider?
    //this.props.fetchProvidersByCategory(this.props.category.category);
  }

  render() {
    const { provider } = this.props;
    return (
      <Profile provider={provider} />
    );
  }
}


function mapStateToProps(state) {
  return {
    providers: state.ProvidersReducers.providersByCategory,
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchProvidersByCategory}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProviderProfile);