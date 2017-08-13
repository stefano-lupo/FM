import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import styles from '../../styles/home.js';
import { containerStyle } from '../../styles/generic';


class Home extends React.Component {

  componentDidMount() {
  }

  onJobSelected(job) {
    console.log("Selected job");
    Actions.jobProfile({ job })
  }

  renderJobsList(jobs) {
    console.log(jobs);
    if(jobs.isEmpty()) {
      return null;
    }

    let date, title;
    if(jobs.get(0).status === 'requested') {
      date = 'requestDate';
      title = 'Requested Jobs';
    } else if(jobs.get(0).status === 'active') {
      date = 'startDate';
      title = 'Active Jobs';
    } else {
      date = 'completionDate';
      title = 'Completed Jobs';
    }

    return (
      <View>
        <Text style={styles.listHeader}>{title}</Text>
        <List containerStyle={styles.list}>
          {
            jobs.map((job) => (
              <ListItem
                key={job._id}
                avatar={{uri: "http://wallpaper-gallery.net/images/image/image-3.jpg"}}
                roundAvatar
                title={job.title}
                subtitle={job.category}
                rightTitleNumberOfLines={2}
                rightTitle={`Dude Name\n${job[date].format("Do MM YYYY")}`}
                onPress={() => this.onJobSelected(job)}
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
      <ScrollView>
        <Text>{`Hello ${user.getName()}`}</Text>
        {this.renderJobsList(requested)}
        {this.renderJobsList(active)}
        {this.renderJobsList(completed)}
      </ScrollView>
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