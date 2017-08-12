import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';


class Home extends React.Component {

  componentDidMount() {
  }

  onJobSelected(job) {
    console.log("Selected job");
  }

  renderJobsList(title, jobs) {
    if(jobs.isEmpty()) {
      return null;
    }

    return (
      <View>
        <Text>{title}</Text>
        <List>
          {
            jobs.map((job) => (
              <ListItem
                key={job._id}
                title={`${job.category}, ${job.title}`}
                subtitle={job.description}
                onPress={() => this.onJobSelected()}
              />
            ))
          }
        </List>
      </View>
    );
  }

  render() {
    const { user } = this.props;
    const requested = user.jobs.get('requested');
    const active = user.jobs.get('active');
    const completed = user.jobs.get('completed');
    return (
      <View>
        <Text>{`Hello ${user.getName()}`}</Text>
        {this.renderJobsList('Requested', requested)}
        {this.renderJobsList('Active', active)}
        {this.renderJobsList('Completed', completed)}
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