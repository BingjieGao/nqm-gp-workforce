import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from "material-ui/Paper";
import {tableCalculator} from "../../functions/tableCalculator";
import {shortfallD3} from "../../functions/shortfallD3";

let currentYear = 2016;

 export default class TableControl extends Component{
   componentDidMount(){
     shortfallD3();
   }
   render(){
     var tableResults = tableCalculator(this.props.TableData);
     var totalHoursNow = tableResults.totalHoursNow;
     var totalHoursTen = tableResults.totalHoursTen;
     var totalHoursFive = tableResults.totalHoursFive;
     var totalHoursTwo = tableResults.totalHoursTwo;

     let capbilitydata =
         <TableRow selectable={false}>
            <TableRowColumn>Total HPY</TableRowColumn>
             <TableRowColumn id="totalHoursNow">{totalHoursNow}</TableRowColumn>
             <TableRowColumn id="totalHoursTwo">{totalHoursTwo}</TableRowColumn>
             <TableRowColumn id="totalHoursFive">{totalHoursFive}</TableRowColumn>
             <TableRowColumn id="totalHoursTen">{totalHoursTen}</TableRowColumn>
         </TableRow>
         ;

      let demanddata =
            <TableRow selectable={false}>
               <TableRowColumn>Demand</TableRowColumn>
                <TableRowColumn id="demand-2016"></TableRowColumn>
                <TableRowColumn id="demand-2018"></TableRowColumn>
                <TableRowColumn id="demand-2021"></TableRowColumn>
                <TableRowColumn id="demand-2026"></TableRowColumn>
            </TableRow>
            ;
    let shortfalldata =
          <TableRow selectable={false}>
             <TableRowColumn>Shortfall</TableRowColumn>
              <TableRowColumn id="shortfall-2016"></TableRowColumn>
              <TableRowColumn id="shortfall-2018"></TableRowColumn>
              <TableRowColumn id="shortfall-2021"></TableRowColumn>
              <TableRowColumn id="shortfall-2026"></TableRowColumn>
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
           <TableBody displayRowCheckbox={false} className="demand-data">
             {capbilitydata}
             {demanddata}
             {shortfalldata}
           </TableBody>
         </Table>
         <div id="shortfall-d3"></div>
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
