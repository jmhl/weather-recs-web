import React, { PropTypes, Component } from 'react';
import { RouteHandler } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <RouteHandler />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};
