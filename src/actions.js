import axios from 'axios';

import * as constants from './constants';

export function fetchRSS() {
  const request = axios({
    method: 'get',
    url: constants.RSS_URL,
  });

  return {
    type: constants.FETCH_RSS,
    payload: request,
  };
}

export function fetchRSSSuccess(posts) {
  return {
    type: constants.FETCH_RSS_SUCCESS,
    payload: posts,
  };
}

export function fetchRSSFailure(error) {
  return {
    type: constants.FETCH_RSS_FAILURE,
    payload: error,
  };
}

export function fetchFile() {
  const request = axios({
    method: 'get',
    url: location.href + constants.FILE_URL,
  });

  return {
    type: constants.FETCH_FILE,
    payload: request,
  };
}

export function fetchFileSuccess(posts) {
  return {
    type: constants.FETCH_FILE_SUCCESS,
    payload: posts,
  };
}

export function fetchFileFailure(error) {
  return {
    type: constants.FETCH_FILE_FAILURE,
    payload: error,
  };
}

