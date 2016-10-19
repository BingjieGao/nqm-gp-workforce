import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import update from "react-addons-update";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

let currentYear = 2016;

 export default class WorkforceControl extends Component{

   constructor(props) {
     super(props);
     this.state = {
         "GP-cost":0,
         "Locum-cost":0,
         "Recep-cost":0,
         "Phy-cost":0,
         "Phamacy-cost":0,
         "Nurse-cost":0,
         "SNurse-cost":0
     };
     this._changeValues = this._changeValues.bind(this);
     this._changeGP = this._changeGP.bind(this);
     this._changeLocum = this._changeLocum.bind(this);
     this._changeRecep = this._changeRecep.bind(this);
     this._changePhy = this._changePhy.bind(this);
     this._changePhamacy = this._changePhamacy.bind(this);
     this._changeNurse = this._changeNurse.bind(this);
     this._changeSNurse = this._changeSNurse.bind(this);

   }

   _changeValues(Index,value){
     switch(Index){
      case 1:
        this.setState({
          "GP-cost":value
        });
        break;
      case 2:
        this.setState({
          "Locum-cost":value
        });
      break;
      case 3:
        this.setState({
          "Phy-cost":value
        });
        break;
      case 4:
        this.setState({
          "Phamacy-cost":value
        });
        break;
      case 5:
        this.setState({
          "Recep-cost":value
        });
        break;
      case 6:
        this.setState({
          "Nurse-cost":value
        });
        break;
      case 7:
        this.setState({
          "SNurse-cost":value
        });
        break;
      }
   }

   _changeGP(event){
     this._changeValues(1,event.target.value);
   }
   _changeLocum(event){
     this._changeValues(2,event.target.value);
   }
   _changePhy(event){
     this._changeValues(3,event.target.value);
   }
   _changePhamacy(event){
     this._changeValues(4,event.target.value);
   }
   _changeRecep(event){
     this._changeValues(5,event.target.value);
   }
   _changeNurse(event){
     this._changeValues(6,event.target.value);
   }
   _changeSNurse(event){
     this._changeValues(7,event.target.value);
   }
   render(){

     let self = this;
     let costdata =
         <TableRow selectable={false}>
            <TableRowColumn></TableRowColumn>
             <TableRowColumn>
               <TextField
                 type="number"
                 id="GP-cost"
                 name="GP-cost"
                 value={self.state["GP-cost"]}
                 onChange={self._changeGP}
               />
             </TableRowColumn>
             <TableRowColumn>
               <TextField
                 type="number"
                 id="Locum-cost"
                 name="Locum-cost"
                 value={self.state["Locum-cost"]}
                 onChange={self._changeLocum}
               />
             </TableRowColumn>
             <TableRowColumn>
               <TextField
                 type="number"
                 id="Phy-cost"
                 name="Phy-cost"
                 value={self.state["Phy-cost"]}
                 onChange={self._changePhy}
               />
             </TableRowColumn>
             <TableRowColumn>
               <TextField
                 type="number"
                 id="Phamacy-cost"
                 name="Phamacy-cost"
                 value={self.state["Phamacy-cost"]}
                 onChange={self._changePhamacy}
               />
             </TableRowColumn>
             <TableRowColumn>
               <TextField
                 type="number"
                 id="Recep-cost"
                 name="Recep-cost"
                 value={self.state["Recep-cost"]}
                 onChange={self._changeRecep}
               />
             </TableRowColumn>
             <TableRowColumn>
               <TextField
                 type="number"
                 id="Nurse-cost"
                 name="Nurse-cost"
                 value={self.state["Nurse-cost"]}
                 onChange={self._changeNurse}
               />
             </TableRowColumn>
             <TableRowColumn>
               <TextField
                 type="number"
                 id="SNurse-cost"
                 name="SNurse-cost"
                 value={self.state["SNurse-cost"]}
                 onChange={self._changeSNurse}
               />
             </TableRowColumn>
         </TableRow>
         ;
     return(
       <MuiThemeProvider>
       <Paper id="workforce-widget"zDepth={1} className="flex-items">
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
