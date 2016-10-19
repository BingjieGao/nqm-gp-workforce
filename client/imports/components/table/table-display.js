import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from "material-ui/Paper";
import TableControl from "../controls/tableControl";
import DialogForm from "../dialog/dialog-display";
import TextField from "material-ui/TextField";
import {shortfallCalculator} from "../../functions/shortfallCalculator";
import {shortfallD3} from "../../functions/shortfallD3"

_=lodash;
const style = {
  marginRight: 20,
};
var currentYear = 2016;
// Task component - represents a single todo item
 export default class TableContent extends Component {
   constructor(props) {
     super(props);
     this.state = {
       gpList: this.props.TableData
     };
     this._addRow = this._addRow.bind(this);
     this._changeNow = this._changeNow.bind(this);
     this._changeTwo = this._changeTwo.bind(this);
     this._changeFive = this._changeFive.bind(this);
     this._changeTen = this._changeTen.bind(this);
   }

   _addRow(newInfo){
     console.log(newInfo);
     newInfo.gender = newInfo.gender==1?'male':'female';
     newInfo = _.assign(newInfo,{
       _id: this.state.gpList.length+1,
       hours:{
         '2016':35,
         '2018':35,
         '2021':35,
         '2026':0
       }
     });

     this.setState({
       gpList: this.state.gpList.concat(newInfo)
     },function(){
       shortfallCalculator();
       shortfallD3();
     });
   }
   _changeNow(event){
     console.log('fire changeNow');
     let TempList = [];
     TempList = this.state.gpList.concat(TempList);
     _.forEach(TempList,function(row){
       if(row['_id'] == Number(event.target.id) && event.target.name == String(currentYear)){
         console.log(event.target.value);
         row.hours['2016'] = Number(event.target.value);
       }
     })
     this.setState({
       gpList: TempList
     },function(){
       shortfallCalculator();
       shortfallD3();
     })
   }
   _changeTwo(event){
     console.log('fire changeTwo');
     let TempList = [];
     TempList = this.state.gpList.concat(TempList);
     _.forEach(TempList,function(row){
       if(row['_id'] == Number(event.target.id) && event.target.name == String(currentYear+2)){
         console.log(event.target.value);
         row.hours[String(currentYear+2)] = Number(event.target.value);
       }
     })
     this.setState({
       gpList: TempList
     },function(){
       shortfallCalculator();
       shortfallD3();
     })
   }
   _changeFive(event){
     console.log('fire changeFive');
     let TempList = [];
     TempList = this.state.gpList.concat(TempList);
     _.forEach(TempList,function(row){
       if(row['_id'] == Number(event.target.id) && event.target.name == String(currentYear+5)){
         console.log(event.target.value);
         row.hours[String(currentYear+5)] = Number(event.target.value);
       }
     })
     this.setState({
       gpList: TempList
     },function(){
       shortfallCalculator();
       shortfallD3();
     })
   }
   _changeTen(event){
     console.log('fire changeTen');
     let TempList = [];
     TempList = this.state.gpList.concat(TempList);
     _.forEach(TempList,function(row){
       if(row['_id'] == Number(event.target.id) && event.target.name == String(currentYear+10)){
         console.log(event.target.value);
         row.hours[String(currentYear+10)] = Number(event.target.value);
       }
     })
     this.setState({
       gpList: TempList
     },function(){
       shortfallCalculator();
       shortfallD3();
     });
     console.log(this.state.gpList);
   }
  render() {
    var self = this;
    var tabledata = _.map(this.state.gpList,function(row){
      return (
        <TableRow key={row._id} selectable={false}>
            <TableRowColumn>{row._id}</TableRowColumn>
            <TableRowColumn>{row.name}</TableRowColumn>
            <TableRowColumn>{row.age}</TableRowColumn>
            <TableRowColumn>{row.gender}</TableRowColumn>
            <TableRowColumn>
              <TextField
                type="number"
                id={String(row['_id'])}
                name={String(currentYear)}
                value={row.hours['2016']}
                onChange={self._changeNow}
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                type="number"
                id={String(row['_id'])}
                name={String(currentYear+2)}
                value={row.hours[String(currentYear+2)]}
                onChange={self._changeTwo}
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                type="number"
                id={String(row['_id'])}
                name={String(currentYear+5)}
                value={row.hours[String(currentYear+5)]}
                onChange={self._changeFive}
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                type="number"
                id={String(row['_id'])}
                name={String(currentYear+10)}
                value={row.hours[String(currentYear+10)]}
                onChange={self._changeTen}
              />
            </TableRowColumn>
        </TableRow>
      )
    })
    return (
      <div className="flex-container">
      <Paper zDepth={1} id="table-widget" className="flex-items">
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>_id</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Age</TableHeaderColumn>
              <TableHeaderColumn>Gender</TableHeaderColumn> 
              <TableHeaderColumn>HPW in {currentYear}</TableHeaderColumn>
              <TableHeaderColumn>HPW in {currentYear+2}</TableHeaderColumn>
              <TableHeaderColumn>HPW in {currentYear+5}</TableHeaderColumn>
              <TableHeaderColumn>HPW in {currentYear+10}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={false}>
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
