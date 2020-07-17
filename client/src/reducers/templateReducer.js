import { STORE_TEMPLATE, ERROR_CREATE_TEMPLATE, GET_TEMPLATE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case STORE_TEMPLATE:
      return action.payload || false;
    case GET_TEMPLATE:
      return action.payload || false;
    default:
      return state;
  };
};