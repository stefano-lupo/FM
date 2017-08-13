import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { GiftedChat } from 'react-native-gifted-chat';

import { fetchMessages } from '../../actions/jobs';

class Chat extends React.Component {

  state = {
    messages: [],
  };

  componentWillMount() {
    console.log(this.props.jobID);
    this.props.fetchMessages(this.props.jobID);
    // this.setState({
    //   messages: [
    //     {
    //       _id: 1,
    //       text: 'Hello developer',
    //       createdAt: new Date(),
    //       user: {
    //         _id: 2,
    //         name: 'React Native',
    //         avatar: 'https://facebook.github.io/react/img/logo_og.png',
    //       },
    //     },
    //   ],
    // });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({messages: nextProps.messages})
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}


function mapStateToProps(store) {
  return {
    user: store.get('user'),
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Chat);