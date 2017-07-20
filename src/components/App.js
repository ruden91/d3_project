import React, { Component } from 'react';
import * as d3 from 'd3';

class App extends Component {
  constructor() {
    super();

    let svg = d3.select('body')
      .append('svg')
      .attr('class', 'react__d3chart')
      .attr('width', 320)
      .attr('height', 320)
      console.log(svg);

    d3.select('svg')
      .append('circle')
      .attr('cx', 160)
      .attr('cy', 160)
      .attr('r', 50)
      .style('fill', '#009ac8')
  }
  render() {
    return (
      <div>
        react x d3
      </div>
    )
  }
}

export default App;
