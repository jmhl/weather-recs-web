import _ from 'lodash';
import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:3000/weather/';

// Actions
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';

// Action Creators
function requestWeather(position) {
  return {
    type: REQUEST_WEATHER,
    position,
  };
}

function receiveWeather(position, json) {
  return {
    type: RECEIVE_WEATHER,
    position,
    weather: json,
    receivedAt: Date.now(),
  };
}

export function fetchWeather(latitude, longitude) {
  let position = {
    latitude,
    longitude,
  };

  return dispatch => {
    dispatch(requestWeather(position));
    return fetch(`${baseUrl}?latitude=${latitude}&longitude=${longitude}`)
      .then(req => req.json())
      .then(json => dispatch(receiveWeather(position, json)));
  };
}
