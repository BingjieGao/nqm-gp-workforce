
_=lodash;
let year_array = ["2016","2018","2021","2026"];

function shortfallD3(){
  let shortfall_array = [Number($('#shortfall-2016').html()),Number($('#shortfall-2018').html()),Number($('#shortfall-2021').html()),Number($('#shortfall-2026').html())];
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 400 - margin.left - margin.right,
    height = 150 - margin.top - margin.bottom;

var formatDate = d3.time.format("%d-%b-%y");

var x = d3.scale.ordinal().rangeRoundBands([0, width]);

x.domain(year_array.map(function(d) { return d; }));

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis().scale(x).orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d,i) { return x(year_array[i]); })
    .y(function(d,i) { return y(d); });

var svg = d3.select("#shortfall-d3").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  x.domain(d3.extent(year_array, function(d) { return d; }));
  y.domain(d3.extent(shortfall_array, function(d) { d = +d; console.log(d); return d; }));

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
      .text("Price ($)");

  svg.append("path")
      .datum(shortfall_array)
      .attr("class", "line")
      .attr("d", line)

}

export {shortfallD3};
