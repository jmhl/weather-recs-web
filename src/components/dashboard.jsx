import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Error from './common/error.jsx';
import Loader from './common/loader.jsx';
import dashboardResponse from '../mocks.es6';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.locationError = this.locationError.bind(this);
    this.locationSuccess = this.locationSuccess.bind(this);

    this.state = {
      // loading, error, success
      pageStatus: 'loading',
    };
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError);
    } else {
      this.setState({ pageStatus: 'error' });
    }
  }

  locationError() {
    this.setState({ pageStatus: 'error' });
  }

  locationSuccess(position) {
    console.log(position);
    this.setState({
      latitude: position.coords.latitude,
      pageStatus: 'success',
      longitude: position.coords.longitude,
    });
  }

  render() {
    switch (this.state.pageStatus) {
      case 'loading':
        return <Loader />;
      case 'error':
        return <Error message="Sorry, but we need your location." />;
    }

    let temperature = this.props.temperature;

    return (
      <div className="dashboard">
        {this.props.temperature.formatted}
      </div>
    );
  }
}

Dashboard.propTypes = {
  temperature: PropTypes.shape({
    formatted: PropTypes.string.isRequired,
    measure: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
};

Dashboard.defaultProps = {
  temperature: dashboardResponse.temperature,
};
