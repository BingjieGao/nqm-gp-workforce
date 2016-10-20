import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from "material-ui/Paper";
import {tableCalculator} from "../../functions/tableCalculator";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

let currentYear = 2016;

 export default class TableControl extends Component{
   render(){
     var tableResults = tableCalculator(this.props.TableData);
     var totalHoursNow = tableResults.totalHoursNow;
     var totalHoursTen = tableResults.totalHoursTen;
     var totalHoursFive = tableResults.totalHoursFive;
     var totalHoursTwo = tableResults.totalHoursTwo;

     let dataArray = [
       {
         name:"Demand",
         key:"demand"
       },{
         name:"Shortfall",
         key:"shortfall"
       },{
         name:"Current Key",
         key:"cost"
       },{
         name:"Substitute Capacity",
         key:"capacity"
       },{
         name:"New Shortfall",
         key:"newshortfall"
       },{
         name:"New Cost",
         key:"newcost"
       }
     ]

     let capbilitydata =
         <TableRow selectable={false}>
            <TableRowColumn>Total HPY</TableRowColumn>
             <TableRowColumn id="totalHoursNow">{totalHoursNow}</TableRowColumn>
             <TableRowColumn id="totalHoursTwo">{totalHoursTwo}</TableRowColumn>
             <TableRowColumn id="totalHoursFive">{totalHoursFive}</TableRowColumn>
             <TableRowColumn id="totalHoursTen">{totalHoursTen}</TableRowColumn>
         </TableRow>
         ;

      let controldata = _.map(dataArray,function(row){
        return (
          <TableRow key={row.key} selectable={false}>
             <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn id={row.key+"-2016"}></TableRowColumn>
              <TableRowColumn id={row.key+"-2018"}></TableRowColumn>
              <TableRowColumn id={row.key+"-2021"}></TableRowColumn>
              <TableRowColumn id={row.key+"-2026"}></TableRowColumn>
          </TableRow>
        )
      })

    let shortfalldata =
          <TableRow selectable={false}>
             <TableRowColumn>Shortfall</TableRowColumn>
              <TableRowColumn id="shortfall-2016"></TableRowColumn>
              <TableRowColumn id="shortfall-2018"></TableRowColumn>
              <TableRowColumn id="shortfall-2021"></TableRowColumn>
              <TableRowColumn id="shortfall-2026"></TableRowColumn>
          </TableRow>
          ;
    let costdata =
          <TableRow selectable={false}>
             <TableRowColumn>Current Cost</TableRowColumn>
              <TableRowColumn id="cost-2016"></TableRowColumn>
              <TableRowColumn id="cost-2018"></TableRowColumn>
              <TableRowColumn id="cost-2021"></TableRowColumn>
              <TableRowColumn id="cost-2026"></TableRowColumn>
          </TableRow>
          ;
    let subdata =
          <TableRow selectable={false}>
             <TableRowColumn>Substitute Capacity</TableRowColumn>
              <TableRowColumn id="cost-2016"></TableRowColumn>
              <TableRowColumn id="cost-2018"></TableRowColumn>
              <TableRowColumn id="cost-2021"></TableRowColumn>
              <TableRowColumn id="cost-2026"></TableRowColumn>
          </TableRow>
          ;

     return(
       <MuiThemeProvider>
       <Paper zDepth={1}>
         <Table>
           <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
             <TableRow>
               <TableHeaderColumn></TableHeaderColumn>
               <TableHeaderColumn>{currentYear}</TableHeaderColumn>
               <TableHeaderColumn>{currentYear+2}</TableHeaderColumn>
               <TableHeaderColumn>{currentYear+5}</TableHeaderColumn>
               <TableHeaderColumn>{currentYear+10}</TableHeaderColumn>
             </TableRow>
           </TableHeader>
           <TableBody displayRowCheckbox={false} className="demand-data">
             {capbilitydata}
             {controldata}
           </TableBody>
         </Table>
       </Paper>
     </MuiThemeProvider>
     )

   }
 }
 TableControl.propTypes = {
   // This component gets the task to display through a React prop.
   // We can use propTypes to indicate it is required
   //headers:PropTypes.object.isRequired,
   TableData: PropTypes.array.isRequired
 };
