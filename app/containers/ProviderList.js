import React from 'react';
import { Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProvidersByCategory } from '../actions/providers';


class ProviderList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProvidersByCategory(this.props.category.category);
  }

  render() {
    const { providers } = this.props;

    if(!providers) return (<Text>Loading</Text>);

    return (
      <List>
        {
          providers.map((provider) => (
            <ListItem
              key={provider._id}
              title={provider.firstName + provider.lastName}
              subtitle={provider.score}
              avatar={{uri: provider.thumbnail}}
            />
          ))
        }
      </List>
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

export default connect(mapStateToProps, matchDispatchToProps)(ProviderList);