import React,{Component,Prototype} from 'react'
import {Meteor} from 'meteor/meteor';
import TableWidget from "./table/table-widget";
import Pyramid from "./pyramid/pyramid-widget";

class VisualExplorer extends Component {

  renderTable(){
    return <TableWidget />;
  }
  renderPyramid() {
    var age_band = ["All Ages"];
    var width = document.documentElement.clientWidth;
    console.log(width);
    return <Pyramid
              wgtId="py1"
              age_bands={age_band}
              male={false}
              female={true}
              year="2016"
              popletDatasetId="S1guBVt70"
              width={width*0.49}
              height={width*0.4}
            />
  }
  render(){
    return (
      <div className="container">
        {this.renderTable()}
        {this.renderPyramid()}
      </div>
    )
  }
}

export default VisualExplorer;
