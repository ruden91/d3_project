import * as d3 from 'd3';

let data = [10, 50, 80];
let width = 1500;
let height = 1500;
let r = 300;

let color = d3.scaleOrdinal().range(['red', 'blue', 'orange']);
let canvas = d3.select('body').append('svg').attr('width', width).attr('height', height);
let group = canvas.append('g').attr('transform', 'translate(300, 300)');

let arc =
  d3.arc()
    .innerRadius(200)
    .outerRadius(r);

let pie =
  d3.pie()
    .value((d) => {
      return d;
    })

let arcs =
  group.selectAll('.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc');

arcs.append('path').attr('d', arc).attr('fill', (d) => {
  return color(d.data);
})

arcs.append('text').attr('transform', (d) => {
  return `translate(${arc.centroid(d)})`;
})
.attr('text-anchor', 'middle')
.attr('font-size', '1.5em')
.text((d) => {
  return d.data;
})
