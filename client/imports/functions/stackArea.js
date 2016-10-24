
_=lodash;
let year_array = ["2016","2018","2021","2026","2030"];

function stackArea(){
  let stackArea = d3.select("#stack-d3");
  stackArea.selectAll('svg').remove();
  let stackArea_array = [
    {
      year:"2016",
      value:Number($('#totalHoursNow').html()),
      key:"capability"
    },
    {
      year:"2016",
      key:"demand",
      value: Number($('#demand-2016').html())
    },{
      year:"2018",
      value:Number($('#totalHoursTwo').html()),
      key:"capability"
    },
    {
      year:"2018",
      key:"demand",
      value: Number($('#demand-2018').html())
    },{
      year:"2021",
      value:Number($('#totalHoursFive').html()),
      key:"capability"
    },
    {
      year:"2021",
      key:"demand",
      value: Number($('#demand-2021').html())
    },{
      year:"2026",
      value:Number($('#totalHoursTen').html()),
      key:"capability"
    },
    {
      year:"2026",
      key:"demand",
      value: Number($('#demand-2026').html())
    },];
    var margin = {top: 20, right: 30, bottom: 30, left: 100},
      width = 600 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

var x = d3.scale.ordinal().rangePoints([0,width],0.5);

  var y = d3.scale.linear()
      .rangeRound([height, 0]);

  var z = ["rgba(124, 181, 236, 0.3)","rgba(247, 163, 92, 0.3)"]

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var stack = d3.layout.stack()
      .offset("zero")
      .values(function(d) { return d.values; })
      .x(function(d) { return d['year']; })
      .y(function(d) { return d['value']; });

  var nest = d3.nest()
      .key(function(d) { return d.key; });

  var area = d3.svg.area()
      .interpolate("cardinal")
      .x(function(d) { return x(d['year']); })
      .y0(function(d) { return y(d.y0); })
      .y1(function(d) { return y(d.y); });

  var svg = d3.select("#stack-d3").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var layers = stack(nest.entries(stackArea_array));

    x.domain(stackArea_array.map(function(d) { return d['year']; }));
    y.domain([0, d3.max(stackArea_array, function(d) { return d.y0 + d.y; })]);

    svg.selectAll(".layer")
        .data(layers)
      .enter().append("path")
        .attr("class", "layer")
        .attr("d", function(d) { return area(d.values); })
        .style("fill", function(d, i) { return z[i]; });

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
}

export {stackArea};
