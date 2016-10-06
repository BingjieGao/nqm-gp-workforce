import React,{Component,Prototype} from 'react'
import {Meteor} from 'meteor/meteor';
import TableWidget from "./table/table-widget";
import FormWidget from "./form/form-widget";
import FormContent from "./form/form-container";

class VisualExplorer extends Component {
  renderTable(){
    return <TableWidget />;
  }
  renderForm(){
    return <FormWidget />;
  }
  render(){
    return (
      <div className="container">
        {this.renderTable()}
      </div>
    )
  }
}

export default VisualExplorer;
