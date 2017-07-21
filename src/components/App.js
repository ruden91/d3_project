import React, { Component } from 'react';
import * as d3 from 'd3';

class App extends Component {
  render() {
    return (
      <div className="container">
        <MainRangeSelection />
        <Cards />
        <MainContainer />
        <SubContainer />
      </div>
    )
  }
}

export default App;
