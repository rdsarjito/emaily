import { JWT_TOKEN, FETCH_DATA, FIND_DATA } from '../actions/types';

import { saveToLocalStorage } from '../helper/localStorage';

export default (state = {}, action) => {
  switch (action.type) {
    case FIND_DATA:
      let newArr = [];
      newArr.push(action.payload);
      saveToLocalStorage(JWT_TOKEN, newArr);
      return newArr;
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  };
};