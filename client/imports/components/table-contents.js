import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


// Task component - represents a single todo item
export default class TableContents extends Component {
  renderTableContents(){
    return this.props.TableContents.map(function(row){
      <TableRowColumn>{row.ID}</TableRowColumn>
      <TableRowColumn>{row.Name}</TableRowColumn>
      <TableRowColumn>{row.Status}</TableRowColumn>
    })
  }
  render() {
    return (
        {this.renderTableContents()}
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  TableContents: PropTypes.array.isRequired,
};
