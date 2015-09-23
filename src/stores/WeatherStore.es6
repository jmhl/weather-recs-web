import alt from '../alt.es6';
import WeatherActions from '../actions/WeatherActions.es6';

class WeatherStore {
  constructor() {
    // this.bindListeners({
    //   updateWeather: WeatherActions.fetchWeather,
    // });

    this.bindActions(alt.getActions('WeatherActions'));

    this.state = {
      weather: {},
    };
  }

  updateWeather(weather) {
    console.log('updating weather');
    this.setState({ weather: weather });
  }
}

export default alt.createStore(WeatherStore, 'WeatherStore');
