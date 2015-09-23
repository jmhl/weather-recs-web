import React, { Component, PropTypes } from 'react';

class Loader extends Component {
  render() {
    let size = this.props.size || 'large';

    return (
      <div className="loader">
        Loading...
      </div>
    );
  }
}

Loader.propTypes = {
  size: PropTypes.string,
};

export default Loader;
