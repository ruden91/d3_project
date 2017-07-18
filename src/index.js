import * as d3 from 'd3';

let canvas = d3.select('body').append('svg').attr('width', 500).attr('height', 500);
let circle = canvas.append('circle').attr('cx', 300).attr('cy', 300).attr('r', 100).attr('fill', 'red');

let rect = canvas.append('rect').attr('width', 100).attr('height', 50);

let line = canvas.append('line').attr('x1', 100).attr('y1', 300).attr('x2', 200).attr('y2', 200).attr('stroke', "green").attr('stroke-width', 10);
