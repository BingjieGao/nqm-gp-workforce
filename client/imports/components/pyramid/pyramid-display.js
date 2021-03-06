import React,{Component,PropTypes}from "react";

import Paper from "material-ui/Paper";
import InputControl from "../controls/inputControl";

class PyramidDisplay extends Component {

  constructor(props) {
    super(props);
    const sideMargin = 4;
    this.state = {
      margin: {
        top: 4,
        right: sideMargin,
        bottom: 24,
        left: sideMargin,
        middle: 24,
      },
      femaleList: this.props.femaleList,
      maleList: this.props.maleList,
    };
    this.state.width = props.width - sideMargin*2;
    this.state.height = props.height - this.state.margin.top - this.state.margin.bottom;
    this.state.regionWidth = this.state.width/2 - this.state.margin.middle;
    this.state.pointA = this.state.regionWidth;
    this.state.pointB = this.state.width - this.state.regionWidth;

    this.draw = this.draw.bind(this);

    this._handleFemaleChange = this._handleFemaleChange.bind(this);
    this._handleMaleChange = this._handleMaleChange.bind(this);
  }
  _handleFemaleChange(newFemaleList){
    this.setState({
      femaleList: newFemaleList,
    },function(){
      this.draw(this.props);
    })
  };
  _handleMaleChange(newMaleList){
    this.setState({
      maleList: newMaleList,
    },function(){
      this.draw(this.props);
    });
  };

  translation(x,y) {
    return 'translate(' + x + ',' + y + ')';
  }
  draw(props) {
    let females = this.state.femaleList;
    let males = this.state.maleList;
    let maxValue = 0;
    var allData = females.concat(males);
    //console.log(allData);
    _.forEach(allData, function(data){
        if(data['persons']>maxValue)
          maxValue = data['persons'];
    });
    // Elements
    let svg = d3.select('#pyramid' + props.wgtId);
    let leftBarGroup = svg.select("#leftBarGroup" + props.wgtId);
    let rightBarGroup = svg.select("#rightBarGroup" + props.wgtId);

    // Scales
    let xScale = d3.scale.linear()
      .domain([0, maxValue])
      .range([this.state.regionWidth, 0])
      .nice();

    let xScaleLeft = d3.scale.linear()
      .domain([0, maxValue])
      .range([this.state.regionWidth, 0]);

    let xScaleRight = d3.scale.linear()
      .domain([0, maxValue])
      .range([0, this.state.regionWidth]);

    let yScale = d3.scale.ordinal()
      .domain(males.map(function(d) { return d.age_band; }).reverse())
      .rangeRoundBands([this.state.height,0], 0.1);

    // Axis
    let yAxisLeft = d3.svg.axis()
      .scale(yScale)
      .orient('right')
      .tickSize(4,0)
      .tickPadding(this.state.margin.middle-4);

    let yAxisRight = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .tickSize(4,0)
      .tickFormat('');

    let xAxisRight = d3.svg.axis()
      .scale(xScaleRight)
      .orient('bottom')
      .ticks(5, ",f");

    let xAxisLeft = d3.svg.axis()
      .scale(xScaleLeft)
      .orient('bottom')
      .ticks(5, ",f");

    // Drawing
    svg.selectAll(".axis.y.left." + props.wgtId)
      .call(yAxisLeft)
      .selectAll('text')
      .style('text-anchor', 'middle');

    svg.selectAll(".axis.y.right." + props.wgtId)
      .call(yAxisRight);

    svg.selectAll(".axis.x.left." + props.wgtId)
      .transition()
      .call(xAxisLeft);

    svg.selectAll(".axis.x.right." + props.wgtId)
      .transition()
      .call(xAxisRight);

    let barLeft = leftBarGroup.selectAll(".bar.left." + props.wgtId)
      .data(males);
    let barRight = rightBarGroup.selectAll('.bar.right.' + props.wgtId)
      .data(females);

    // Show data
    barLeft.enter().append('rect')
      .attr('class', 'bar left ' + props.wgtId)
      .attr('x', 0)
      .style("fill", "#a6cee3")
      .style("stroke-width", 1)
      .style("stroke", "#1f78b4");

    // Males on left
    barLeft.transition()
      .duration(500).ease("sin-in-out")
      .attr('y', function(d) { return yScale(d.age_band); })
      .style("opacity", function(d) {
        if(props.age_bands.indexOf(d.age_band) != -1 && props.male) return 1.0;
        else return 0.5;
      })
      .attr('width', function(d) { return xScaleRight(d.persons);})
      .attr('height', yScale.rangeBand());

    barRight.enter().append('rect')
      .attr('class', 'bar right ' + props.wgtId)
      .attr('x', 0)
      .style("fill", "#fb9a99")
      .style("stroke-width", 1)
      .style("stroke", "#e31a1c");

    // Females on right
    barRight.transition()
      .duration(500).ease("sin-in-out")
      .attr('y', function(d) { return yScale(d.age_band); })
      .style("opacity", function(d) {
        if(props.age_bands.indexOf(d.age_band) != -1 && props.female) return 1.0;
        else return 0.5;
      })
      .attr('width', function(d) { return xScaleRight(d.persons); })
      .attr('height', yScale.rangeBand());
  }

  componentDidMount() {

    let svg = d3.select('#pyramid' + this.props.wgtId)
      .attr('width', this.state.margin.left + this.state.width + this.state.margin.right)
      .attr('height', this.state.margin.top + this.state.height + this.state.margin.bottom)
      .append('g')
      .attr('transform', this.translation(this.state.margin.left, this.state.margin.top));

    svg.append("g")
      .attr('class', 'axis y left ' + this.props.wgtId)
      .attr('transform', this.translation(this.state.pointA, 0));
    svg.append('g')
      .attr('class', 'axis y right ' + this.props.wgtId)
      .attr('transform', this.translation(this.state.pointB, 0));
    svg.append('g')
      .attr('class', 'axis x left ' + this.props.wgtId)
      .attr('transform', this.translation(0, this.state.height));
    svg.append('g')
      .attr('class', 'axis x right  ' + this.props.wgtId)
      .attr('transform', this.translation(this.state.pointB, this.state.height));

    let leftBarGroup = svg.append('g')
      .attr("id", "leftBarGroup" + this.props.wgtId)
      .attr('transform', this.translation(this.state.pointA, 0) + 'scale(-1,1)');
    let rightBarGroup = svg.append('g')
      .attr("id", "rightBarGroup" + this.props.wgtId)
      .attr('transform', this.translation(this.state.pointB, 0));

    this.draw(this.props);

  }

  componentWillReceiveProps(nextProps) {
    this.draw(nextProps);
  }

  renderInputs(){
    return (
      <InputControl
        ArrayMale={this.state.maleList}
        ArrayFemale={this.state.femaleList}
        onFemaleChange={this._handleFemaleChange}
        onMaleChange={this._handleMaleChange}
        />
    )
  }

  render() {
    const styles = {
      root: {
        width: this.props.width,
        height: this.props.height,
      }
    };
    return (
      <div className="calculated-container">
        <Paper zDepth={1} id="pyramid-widget" className="flex-items">
          <div style={styles.root}>
            <svg id={"pyramid" + this.props.wgtId}></svg>
          </div>
        </Paper>
          {this.renderInputs()}
      </div>
    );
  }

}

PyramidDisplay.propTypes = {
  data: React.PropTypes.array.isRequired,
  femaleList: PropTypes.array.isRequired,
  maleList: PropTypes.array.isRequired,
  totalPop: PropTypes.number.isRequired,
  wgtId: React.PropTypes.string.isRequired,
  age_bands: React.PropTypes.array.isRequired,
  male: React.PropTypes.bool.isRequired,
  female: React.PropTypes.bool.isRequired
};

export default PyramidDisplay;
