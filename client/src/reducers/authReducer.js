import { FETCH_USER, LOGIN_SUCCESS, LOGIN_ERROR, JWT_TOKEN, FETCH_DATA } from '../actions/types';

const initialState = {
  token: localStorage.getItem(JWT_TOKEN) || ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGIN_ERROR:
      return action.payload;
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  };
};