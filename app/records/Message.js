import Immutable from 'immutable';
import moment from 'moment';

const MessageRecord = Immutable.Record({
  _id: undefined,
  text: undefined,
  from: undefined,
  to: undefined,
  sentDate: undefined,
  seenDate: undefined,
});

export class Message extends MessageRecord {

}

export const createMessage = (messageData) => {

  return new Message({
    ...messageData,
    sentDate: moment(messageData.sentDate),
    seenDate: messageData.seenDate ? moment(messageData.seenDate) : undefined,
  })
};