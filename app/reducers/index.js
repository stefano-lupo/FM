import { combineReducers } from 'redux-immutable';
import providers from './providers';
import user from './users';
import account from './account';

export default Reducers = combineReducers({
  user,
  providers,
  account
});