import { FETCH_USER, FETCH_DATA } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case FETCH_DATA:
      return action.payload || false;
    default:
      return state;
  };
};