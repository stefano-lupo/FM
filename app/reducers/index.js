import {combineReducers} from 'redux';
import ProvidersReducers from './providers';
import UsersReducers from './users';

const Reducers = combineReducers({
  UsersReducers,
  ProvidersReducers
});

export default Reducers;