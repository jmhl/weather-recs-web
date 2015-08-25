import { combineReducers } from 'redux';
import {
  RECEIVE_WEATHER,
  REQUEST_WEATHER
} from '../actions/index.es6';

function weather(state={ isFetching: false, weather: {} }) {
  switch (action.type) {
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        weather: action.weather,
        lastUpdated: action.receivedAt
      });
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weather,
});

export default rootReducer;
