import React, { Component, PropTypes } from 'react';
import WeatherAction from '../actions/WeatherActions.es6';
import Error from './common/error.jsx';
import Loader from './common/loader.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.locationError = this.locationError.bind(this);
    this.locationSuccess = this.locationSuccess.bind(this);
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError);
    }
  }

  locationError() {
    console.warn('No geolocation');
  }

  locationSuccess(position) {
    console.log(position);
    const { dispatch } = this.props;
    let { latitude, longitude } = position.coords;
    WeatherAction.fetchWeather(latitude, longitude);
  }

  render() {
    console.log('hi');
    // let temperature = this.props.temperature;

    return (
      <div className="dashboard">
        hihihi
      </div>
    );
  }
}

// Dashboard.propTypes = {
//   temperature: PropTypes.shape({
//     formatted: PropTypes.string.isRequired,
//     measure: PropTypes.number.isRequired,
//     unit: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Dashboard;
