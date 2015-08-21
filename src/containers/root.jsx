import React, { Component, PropTypes } from 'react';
import { Route, Router } from 'react-router';
import App from './app.jsx';
import Dashboard from '../components/dashboard.jsx';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <Route path="/dashboard" component={Dashboard} />
        </Route>
      </Router>
    );
  }
}
