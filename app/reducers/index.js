import {combineReducers} from 'redux';
import ProvidersReducers from './providers';
import UsersReducers from './users';
import AccountReducers from './account';

const Reducers = combineReducers({
  UsersReducers,
  ProvidersReducers,
  AccountReducers
});

export default Reducers;