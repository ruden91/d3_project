import * as d3 from 'd3';

let width = 500;
let height = 500;
let canvas =
  d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

let group = canvas.append('g').attr('transform', 'translate(100, 100)');

let r = 100;
let p = Math.PI * 2;

let arc =
  d3.arc()
    .innerRadius(r - 20)
    .outerRadius(r)
    .startAngle(0)
    .endAngle(p);

group.append('path').attr('d', arc)
