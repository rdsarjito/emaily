import { combineReducers} from 'redux';
import authReducer from './authReducer';
import authJWTReducer from './authJWTReducer';
import templateReducer from './templateReducer';

export default combineReducers({
  auth: authReducer,
  authJWT: authJWTReducer,
  templates: templateReducer,
});