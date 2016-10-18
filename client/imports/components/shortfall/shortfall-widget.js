import React from "react";
import { Meteor } from "meteor/meteor";
import Paper from "material-ui/Paper"

class ShortfallWidget extends React.Component {
  render(){
    return (
      <div className="d3-container">
      <Paper zDepth={1} id="shortfall-line" className="flex-items">
        <div id="shortfall-d3"></div>
      </Paper>
      <Paper zDepth={1} id="shortfall-stack" className="flex-items">
        <div id="stack-d3"></div>
      </Paper>
      </div>
    )
  }
}
export default ShortfallWidget;
