import React, { Component, PropTypes } from 'react';
import { RouteHandler } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};