import * as d3 from 'd3';

const dataArray = [20, 150, 50, 40, 120, 320];
let width = 500;
let height = 500;
let widthScale = d3.scaleLinear().domain([0, 60]).range([0, width]);
let color = d3.scaleLinear().domain([0, 130]).range(['red', 'blue'])
let canvas = d3.select("body").append('svg').attr('width', width).attr('height', height);

let line = canvas
            .selectAll("rect")
            .data(dataArray)
            .enter()
              .append('rect')
              .attr('width', function(d) {
                return widthScale(d);
              })
              .attr('fill', (d) => {
                return color(d);
              })
              .attr('height', 50)
              .attr('y', function(d, i) {
                return i * 80;
              })
