import React, { Component } from 'react';
import { Route } from 'react-router';

import App from './app';
import Dashboard from './components/dashboard';

export default class Routes extends Component {
  render() {
    return (
      <Route handler={App}>
        <Route name="home" path="/" component={Dashboard} />
      </Route>
    );
  }
}
