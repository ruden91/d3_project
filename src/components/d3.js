import * as d3 from 'd3';

class Chart {
  constructor() {
    const rects = d3.selectAll('rect');
    rects.style('fill', 'orange');
  }
}

export default Chart;
