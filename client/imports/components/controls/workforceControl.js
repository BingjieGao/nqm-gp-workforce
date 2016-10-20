import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import update from "react-addons-update";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {substituteCalculator} from "../../functions/substituteCalculator";

let currentYear = 2016;

 export default class WorkforceControl extends Component{

   constructor(props) {
     super(props);
     this.state = {
       substitute:[
         {
           name:"GP",
           value:43.06,
           ratio:0,
           hour:0,
           disable:true
         },{
           name:"Locum",
           value:68.43,
           ratio:0,
           hour:0,
           disable:true
         },{
           name:"Recep",
           value:0,
           ratio:0,
           hour:0,
           disable:false
         },{
           name:"Phy",
           value:0,
           ratio:0,
           hour:0,
           disable:false
         },{
           name:"Phamacy",
           value:0,
           ratio:0,
           hour:0,
           disable:false
         },{
           name:"Nurse",
           value:0,
           ratio:0,
           hour:0,
           disable:false
         },{
           name:"SNurse",
           value:0,
           ratio:0,
           hour:0,
           disable:false
         }
       ]
     };
     this._changeValues = this._changeValues.bind(this);
     this._changeRatios = this._changeRatios.bind(this);
     this._changeHours = this._changeHours.bind(this);
   }

   _changeValues(event){
     let TempList = [];
     let Index = event.target.id.substr(0,1);
     TempList = TempList.concat(this.state.substitute);
     TempList[Number(Index)].value = event.target.value;
     this.setState({
       substitute:TempList
     });
   }
   _changeRatios(event){
     let TempList = [];
     let Index = event.target.id.substr(0,1);
     TempList = TempList.concat(this.state.substitute);
     TempList[Number(Index)].ratio = event.target.value;
     this.setState({
       substitute:TempList
     });
   }
   _changeHours(event){
     let TempList = [];
     let Index = event.target.id.substr(0,1);
     TempList = TempList.concat(this.state.substitute);
     TempList[Number(Index)].hour = event.target.value;
     this.setState({
       substitute:TempList
     });
   }

   componentWillUpdate(){
     substituteCalculator();
   }

   render(){

     let self = this;
     let costdata =_.map(this.state.substitute,function(row,index){
       return (
         <TableRow key={row.name} selectable={false}>
            <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>
                <TextField
                  type="number"
                  id={String(index)+"ratio"}
                  name={row.name+"ratio"}
                  value={row.ratio}
                  onChange={self._changeRatios}
                  disabled={row.disable}
                />
              </TableRowColumn>
             <TableRowColumn>
               <TextField
                 type="number"
                 id={String(index)+"hour"}
                 name={row.name+"hour"}
                 value={row.hour}
                 onChange={self._changeHours}
                 disabled={row.disable}
               />
             </TableRowColumn>
             <TableRowColumn>
               <TextField
                 type="number"
                 id={String(index)+"cost"}
                 name={row.name+"cost"}
                 value={row.value}
                 onChange={self._changeValues}
               />
             </TableRowColumn>
         </TableRow>
       )
     })

     return(
       <MuiThemeProvider>
       <Paper zDepth={1}>
         <Table>
           <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
             <TableRow>
               <TableHeaderColumn></TableHeaderColumn>
               <TableHeaderColumn>%Activity</TableHeaderColumn>
               <TableHeaderColumn>FullTime</TableHeaderColumn>
               <TableHeaderColumn>£ Per Hour</TableHeaderColumn>
             </TableRow>
           </TableHeader>
           <TableBody displayRowCheckbox={false} className="demand-data">
            {costdata}
           </TableBody>
         </Table>
       </Paper>
       </MuiThemeProvider>
     )
   }
 }
