import { STORE_TEMPLATE, ERROR_CREATE_TEMPLATE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_TEMPLATE:
      return action.payload || {};
    case ERROR_CREATE_TEMPLATE:
      return action.payload
    default:
      return state;
  };
};