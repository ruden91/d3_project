import * as d3 from 'd3';
import config from './components/data.json'
import { times } from 'lodash';

let width = 800;
let height = 1500;

let svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

let count = 50
times(10, (i) => {
  svg.append('circle')
    .attr('class', 'first__circle-' + i)
    .attr('cx', 50)
    .attr('cy', count += 50)
    .attr('r', 20)
})

d3.select('.first__circle-0')
  .transition(d3.transition().duration(1000).ease(d3.easeLinear))
  .style('fill', '#009ac8')
  .attr('cx', 500)

d3.select('.first__circle-1')
  .transition(d3.transition().duration(1000).ease(d3.easePolyIn))
  .style('fill', '#009ac8')
  .attr('cx', 500)

d3.select('.first__circle-2')
  .transition(d3.transition().duration(1000).ease(d3.easeElastic))
  .style('fill', '#009ac8')
  .attr('cx', 500)

d3.select('.first__circle-3')
  .transition(d3.transition().duration(1000).ease(d3.easeElastic))
  .style('fill', '#009ac8')
  .attr('cx', 500)

d3.select('.first__circle-4')
  .transition(d3.transition().duration(1000).ease(d3.easeQuadOut))
  .style('fill', '#009ac8')
  .attr('cx', 500)

d3.select('.first__circle-5')
  .transition(d3.transition().duration(1000).ease(d3.easeCubicOut))
  .style('fill', '#009ac8')
  .attr('cx', 500)
