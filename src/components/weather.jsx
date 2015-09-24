import React, { Component, findDOMNode, PropTypes } from 'react';

class Weather extends Component {
  componentDidMount() {
    let canvas = findDOMNode(this.refs.weather);
    let ctx = canvas.getContext('2d');
    let raindrops = [];
    let width = window.innerWidth;
    let height = 350;
    let colors = ['#F35D4F', '#F36849', '#C0D988', '#6DDAF1', '#F1E85B'];
    canvas.width = window.innerWidth;
    canvas.height = height;
  }

  render() {
    return (
      <canvas ref="weather" className="weather">
      </canvas>
    );
  }
}

export default Weather;
