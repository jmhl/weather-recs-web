import React, { Component, PropTypes } from 'react';
import { RouteHandler } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};
