import { STORE_TEMPLATE, FETCH_TEMPLATE, ERROR_CREATE_TEMPLATE, ERROR_FETCH_TEMPLATE, DELETE_TEMPLATE, ERROR_DELETE_TEMPLATE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case STORE_TEMPLATE:
      return action.payload || [];
    case FETCH_TEMPLATE:
      return action.payload || [];
    case DELETE_TEMPLATE:
      return action.payload || [];
    case ERROR_CREATE_TEMPLATE:
      return action.payload || [];
    case ERROR_FETCH_TEMPLATE:
      return [];
    case ERROR_DELETE_TEMPLATE:
      return action.payload || [];
    default:
      return state;
  };
};