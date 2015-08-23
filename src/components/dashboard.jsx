import React, { Component, PropTypes } from 'react';
import dashboardResponse from '../mocks.es6';

export default class Dashboard extends Component {
  render() {
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
