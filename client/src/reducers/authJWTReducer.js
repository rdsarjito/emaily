import { JWT_TOKEN, SIGN_IN } from '../actions/types';

const initialState = localStorage.getItem(JWT_TOKEN) || false

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    default:
      return state;
  };
};