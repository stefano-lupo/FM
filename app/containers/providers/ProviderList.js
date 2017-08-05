import React from 'react';
import { Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { Spinner } from 'native-base';

import { fetchProvidersByCategory } from '../../actions/providers';


class ProviderList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProvidersByCategory(this.props.category.category);
  }

  render() {
    const { providers } = this.props;

    if(!providers) return (<Spinner />);

    return (
      <List>
        {
          providers.map((provider) => (
            <ListItem
              key={provider.id}
              title={provider.getName()}
              subtitle={provider.score}
              avatar={{uri: provider.thumbnail}}
              onPress={() => Actions.providerProfile({provider})}
            />
          ))
        }
      </List>
    );
  }
}


function mapStateToProps(store) {
  return {
    providers: store.get('providers').get('providersByCategory'),
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchProvidersByCategory}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProviderList);