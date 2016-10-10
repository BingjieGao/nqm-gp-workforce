import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from "material-ui/Paper";
import TableControl from "../controls/tableControl"
import DialogForm from "../dialog/dialog-display"

_=lodash;
const style = {
  marginRight: 20,
};

// Task component - represents a single todo item
 export default class TableContent extends Component {
   constructor(props) {
     super(props);
     this.state = {
       gpList: this.props.TableData
     };
     this._addRow = this._addRow.bind(this);
   }

   _addRow(newInfo){
     console.log(newInfo);
     newInfo.gender = newInfo.gender==1?'male':'female';
     newInfo = _.assign(newInfo,{
       _id: this.state.gpList.length+1,
       hours:{
         '2016':10,
         '2017':13,
         '2018':10
       }
     });

     this.setState({
       gpList: this.state.gpList.concat(newInfo)
     });
   }
  render() {
    var tabledata = _.map(this.state.gpList,function(row){
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
      <div className="flex-container">
      <Paper zDepth={1} id="table-widget" className="flex-items">
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
        <DialogForm onFormSubmit={this._addRow}/>
      </Paper>
      <TableControl TableData={this.state.gpList}/>
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
