import alt from '../alt.es6';
import axios from 'axios';

const HOST = 'http://localhost:3000';

class WeatherActions {
  fetchWeather(latitude, longitude) {
    return dispatch => {
      return axios.get(`${HOST}/weather/`, {
        params: {
          latitude,
          longitude,
        },
      })
        .then(res => console.log(res));
    }
  }
}

export default alt.createActions(WeatherActions);
