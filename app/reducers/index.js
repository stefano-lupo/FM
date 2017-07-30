import {combineReducers} from 'redux';
import providers from './providers';
import user from './users';
import account from './account';

const Reducers = combineReducers({
  user,
  providers,
  account
});

export default Reducers;