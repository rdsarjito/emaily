import { combineReducers} from 'redux';
import authReducer from './authReducer';
import incrementReducer from './incrementReducer';
import templateReducer from './templateReducer';

export default combineReducers({
  auth: authReducer,
  increment: incrementReducer,
  template: templateReducer,
});