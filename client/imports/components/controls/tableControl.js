import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from "material-ui/Paper";
import {tableCalculator} from "../../functions/tableCalculator";

let currentYear = 2016;

 export default class TableControl extends Component{
   render(){
     var tableResults = tableCalculator(this.props.TableData);
     var totalHoursNow = tableResults.totalHoursNow;
     var totalHoursTen = tableResults.totalHoursTen;
     var totalHoursFive = tableResults.totalHoursFive;
     var totalHoursTwo = tableResults.totalHoursTwo;

     let capbilitydata =
         <TableRow selectable={false}>
            <TableRowColumn>Total HPY</TableRowColumn>
             <TableRowColumn>{totalHoursNow}</TableRowColumn>
             <TableRowColumn>{totalHoursTwo}</TableRowColumn>
             <TableRowColumn>{totalHoursFive}</TableRowColumn>
             <TableRowColumn>{totalHoursTen}</TableRowColumn>
         </TableRow>
         ;

      let demanddata =
            <TableRow selectable={false}>
               <TableRowColumn>Total HPY</TableRowColumn>
                <TableRowColumn>{totalHoursNow}</TableRowColumn>
                <TableRowColumn>{totalHoursTwo}</TableRowColumn>
                <TableRowColumn>{totalHoursFive}</TableRowColumn>
                <TableRowColumn>{totalHoursTen}</TableRowColumn>
            </TableRow>
            ;

     return(
       <Paper id="calculated-widget"zDepth={1} className="flex-items">
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
           <TableBody displayRowCheckbox={false}>
             {capbilitydata}
           </TableBody>
         </Table>
       </Paper>
     )

   }
 }
 TableControl.propTypes = {
   // This component gets the task to display through a React prop.
   // We can use propTypes to indicate it is required
   //headers:PropTypes.object.isRequired,
   TableData: PropTypes.array.isRequired
 };
