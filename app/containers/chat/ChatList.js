import React from 'react';
import { Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { Spinner } from 'native-base';

import { fetchProvidersByCategory } from '../../actions/providers';


class ChatList extends React.Component {


  render() {
    const { jobs } = this.props;

    const requested = jobs.get('requested');

    if(!requested) return (<Spinner />);

    return (
      <List>
        {
          requested.map((job) => (
            <ListItem
              key={job._id}
              title={job.providerID}
              onPress={() => Actions.chat({jobID: job._id})}
            />

          ))
        }
      </List>
    );
  }
}


function mapStateToProps(store) {
  return {
    jobs: store.get('user').get('jobs'),
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchProvidersByCategory}, dispatch);
}

export default connect(mapStateToProps, null)(ChatList);