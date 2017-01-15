import * as constants from './constants';

const INITIAL_STATE = {
  rssData: {},
  fileData: {},
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.FETCH_RSS_SUCCESS:
      return Object.assign({ rssData: action.payload }, state);
    case constants.FETCH_FILE_SUCCESS:
      return Object.assign({ fileData: action.payload }, state);
    default:
      return state;
  }
}

