import * as constants from './constants';

export default function todos(state = {}, action) {
  switch (action.type) {
    case constants.FETCH_DATA:
      return [
        {},
      ];

    default:
      return state;
  }
}
