import React from 'react';
import Router, { DefaultRoute, Route } from 'react-router';
import App from './app.jsx';
import Dashboard from './components/dashboard.jsx';

let routes = (
  <Route handler={App}>
    <DefaultRoute handler={Dashboard} />
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById('root'));
});
