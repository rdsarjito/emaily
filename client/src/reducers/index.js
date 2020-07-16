import { combineReducers} from 'redux';
import authReducer from './authReducer';
import barangReducer from './barangReducer';
import incrementReducer from './incrementReducer';
import templateReducer from './templateReducer';

export default combineReducers({
  auth: authReducer,
  barang: barangReducer ,
  increment: incrementReducer,
  template: templateReducer
});