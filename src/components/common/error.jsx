import React, { Component, PropTypes } from 'react';

class ErrorComponent extends Component {
  render() {
    return (
      <div className="error">
        {this.props.message}
      </div>
    );
  }
}

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorComponent;
