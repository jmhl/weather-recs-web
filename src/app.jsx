import React, { Component, PropTypes } from 'react';
import { RouteHandler } from 'react-router';
import { Provider } from 'redux';
import configureStore from '../store/configureStore.es6';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {() => <RouteHandler />}
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};
