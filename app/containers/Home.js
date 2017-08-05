import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'native-base';


class Home extends React.Component {

  componentDidMount() {
  }

  renderActiveJobs(activeJobs) {
    if(activeJobs.isEmpty()) {
      return <Text>You have no active jobs</Text>
    }

    return (
      <List>
        {
          activeJobs.map((job) => (
            <ListItem
              key={job._id}
              title={job.title}
            />
          ))
        }
      </List>
    );
  }

  render() {
    const { accountAuthToken, email, fbAccessToken } = this.props.account;
    const { user } = this.props;
    return (
      <View>
        <Text>Welcome { user.getName() }</Text>
        <Text>Email: { email }</Text>
        <Text>FBToken: { fbAccessToken }</Text>
        <Text>Account Auth Token: { accountAuthToken.substr(0,10) }</Text>
        <Text>User Auth Token: { user.userAuthToken.substr(0,10) }</Text>
        {this.renderActiveJobs(user.jobs.active)}
      </View>
    );
  }
}

function mapStateToProps(store) {
  return {
    account: store.get('account'),
    user: store.get('user'),
  };
}

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({ fetchUserCoverPhoto }, dispatch);
// }

export default connect(mapStateToProps, null)(Home);