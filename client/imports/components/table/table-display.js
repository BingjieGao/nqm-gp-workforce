import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

_=lodash;
const style = {
  marginRight: 20,
};

// Task component - represents a single todo item
 export default class TableContent extends Component {
  render() {
    var tabledata = _.map(this.props.TableData,function(row){
      console.log(row);
      return (
        <TableRow key={row._id}>
            <TableRowColumn>{row._id}</TableRowColumn>
            <TableRowColumn>{row.age_band}</TableRowColumn>
            <TableRowColumn>{row.area_name}</TableRowColumn>
            <TableRowColumn>{row.gender}</TableRowColumn>
            <TableRowColumn>{row.persons}</TableRowColumn>
            <TableRowColumn>{row.popId}</TableRowColumn>
            <TableRowColumn>{row.popId_decription}</TableRowColumn>
            <TableRowColumn>{row.year}</TableRowColumn>
          </TableRow>
      )
    })
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>_id</TableHeaderColumn>
              <TableHeaderColumn>Age Band</TableHeaderColumn>
              <TableHeaderColumn>Area Name</TableHeaderColumn>
              <TableHeaderColumn>Gender</TableHeaderColumn>
              <TableHeaderColumn>Persons</TableHeaderColumn>
              <TableHeaderColumn>PopId</TableHeaderColumn>
              <TableHeaderColumn>popId_decription</TableHeaderColumn>
              <TableHeaderColumn>Year</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
              {tabledata}
          </TableBody>
        </Table>
        <div>
          <FloatingActionButton style={style} onClick={this.addRow()}>
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
