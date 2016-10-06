import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

_=lodash;
const style = {
  marginRight: 20,
};
var years = ['2016','2017','2018'];

// Task component - represents a single todo item
 export default class TableContent extends Component {

   addRow(){
     console.log('click');
   }
  render() {
    var tabledata = _.map(this.props.TableData,function(row){
      return (
        <TableRow key={row._id}>
            <TableRowColumn>{row._id}</TableRowColumn>
            <TableRowColumn>{row.name}</TableRowColumn>
            <TableRowColumn>{row.age}</TableRowColumn>
            <TableRowColumn>{row.gender}</TableRowColumn>
            <TableRowColumn>{row.hours['2016']}</TableRowColumn>
            <TableRowColumn>{row.hours['2017']}</TableRowColumn>
            <TableRowColumn>{row.hours['2018']}</TableRowColumn>
        </TableRow>
      )
    })
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>_id</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Age</TableHeaderColumn>
              <TableHeaderColumn>Gender</TableHeaderColumn>
              <TableHeaderColumn>No. of Hours 2016</TableHeaderColumn>
              <TableHeaderColumn>No. of Hours 2017</TableHeaderColumn>
              <TableHeaderColumn>No. of Hours 2018</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
              {tabledata}
          </TableBody>
        </Table>
        <div>
          <FloatingActionButton style={style} onClick={this.addRow}>
          <ContentAdd />
          </FloatingActionButton>
        </div>
    </div>
    );
  }
}

// const TableContent = ({TableContents}) =>(
//
// )

TableContent.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  //headers:PropTypes.object.isRequired,
  TableData: PropTypes.array.isRequired
};
