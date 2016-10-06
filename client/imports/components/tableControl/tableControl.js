import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from "material-ui/Paper";
import {tableCalculator} from "../../functions/tableCalculator"


 export default class TableControl extends Component{
   render(){
     var tableResults = tableCalculator(this.props.TableData);
     var totalHours = tableResults.totalHours;
     var sum = tableResults.sum;
     console.log(totalHours);
     return(
       <Paper id="calculated-widget"zDepth={1} className="flex-items">
          <h2>Total Hours: {totalHours}</h2>
          <h3>Sum</h3>
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
