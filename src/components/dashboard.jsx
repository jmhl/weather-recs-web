import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import WeatherActions from '../actions/WeatherActions.es6';
import WeatherStore from '../stores/WeatherStore.es6';
import Error from './common/error.jsx';
import Loader from './common/loader.jsx';

@connectToStores
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.locationError = this.locationError.bind(this);
    this.locationSuccess = this.locationSuccess.bind(this);
  }

  static getStores() {
    return [WeatherStore];
  }

  static getPropsFromStores() {
    return WeatherStore.getState();
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.locationSuccess,
        this.locationError
      );
    }
  }

  locationError() {
    console.warn('No geolocation');
  }

  locationSuccess(position) {
    console.log(position);
    let { latitude, longitude } = position.coords;
    WeatherActions.fetchWeather(latitude, longitude);
  }

  render() {
    console.log('hi');
    console.log(this.props);
    // let temperature = this.props.temperature;

    return (
      <div className="dashboard">
        hihihi
      </div>
    );
  }
}

Dashboard.propTypes = {
  params: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  weather: PropTypes.shape({
  }),
};

// export default connectToStores(Dashboard);
export default Dashboard;
