import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <RouteHandler {...this.props} />
      </div>
    );
  }
}

export default App;
