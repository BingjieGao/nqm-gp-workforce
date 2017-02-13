import {stackArea} from "./stackArea";
_=lodash;
let year_array = ["2016","2018","2021","2026","2030"];

function shortfallD3(){
  let shortfall_line = d3.select('#shortfall-d3');
  shortfall_line.selectAll('svg').remove();
  let shortfall_array = [
    {
      year:"2016",
      shortfall:Number($('#shortfall-2016').html())
    },{
      year:"2018",
      shortfall:Number($('#shortfall-2018').html())
    },{
      year:"2021",
      shortfall:Number($('#shortfall-2021').html())
    },{
      year:"2026",
      shortfall:Number($('#shortfall-2026').html())
    }];
  console.log(shortfall_array);
  var margin = {top: 20, right: 20, bottom: 30, left: 100},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
    padding = width * 0.05;

var x = d3.scale.ordinal().rangePoints([0,width],0.5);
var y = d3.scale.linear()
    .rangeRound([height, 5]);

var xAxis = d3.svg.axis().scale(x).orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("#shortfall-d3").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  x.domain(shortfall_array.map(function(d) { return d['year']; }));
  y.domain([d3.min(shortfall_array,function(d){return d['shortfall']*0.9}),d3.max(shortfall_array,function(d){return d['shortfall']*1.1})]);

  var line = d3.svg.line()
      .x(function(d,i) { return x(d['year']); })
      .y(function(d,i) { return y(d['shortfall']); });

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Shortfall ");

  svg.append("path")
      .datum(shortfall_array)
      .attr("class", "line")
      .attr("d", line)

  stackArea();
}

export {shortfallD3};
