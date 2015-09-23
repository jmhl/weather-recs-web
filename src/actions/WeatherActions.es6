import alt from '../alt.es6';
import axios from 'axios';

const HOST = 'http://localhost:3000';

class WeatherActions {
  constructor() {
    this.generateActions('updateWeather');
  }

  fetchWeather(latitude, longitude) {
    // return dispatch => {
      return axios.get(`${HOST}/weather/`, {
        params: {
          latitude,
          longitude,
        },
      })
        .then(res => this.actions.updateWeather(res.data));
    // }
  }
}

export default alt.createActions(WeatherActions);
