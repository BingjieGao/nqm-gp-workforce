import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

let currentYear = 2016;

 export default class PyramidControl extends Component{

   constructor(props){
     super(props);
     console.log(props)
   }

   render(){
     return(
       <TableRow selectable={false}>
          <TableRowColumn>Total HPY</TableRowColumn>
           <TableRowColumn>{10}</TableRowColumn>
           <TableRowColumn>{10}</TableRowColumn>
           <TableRowColumn>{10}</TableRowColumn>
           <TableRowColumn>{10}</TableRowColumn>
       </TableRow>
     )
   }

 }
