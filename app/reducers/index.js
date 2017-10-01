import { combineReducers } from 'redux-immutable';
import providers from './providers';
import myProvider from './myProvider';
import user from './users';
import account from './account';

export default Reducers = combineReducers({
  account,
  myProvider,
  providers,
  user
});