import { STORE_TEMPLATE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_TEMPLATE:
      return action.payload || false;
    default:
      return state;
  };
};