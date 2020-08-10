import { combineReducers} from 'redux';
import authReducer from './authReducer';
import templateReducer from './templateReducer';

export default combineReducers({
  auth: authReducer,
  templates: templateReducer,
});