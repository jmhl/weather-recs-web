import React, { Component, PropTypes } from 'react';
import { RouteHandler } from 'react-router';
import { Provider } from 'redux';
import configureStore from '../store/configureStore.es6';

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
