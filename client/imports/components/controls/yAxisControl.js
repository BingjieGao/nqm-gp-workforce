import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { Meteor } from "meteor/meteor";
_=lodash;

 export default class YAxisControl extends Component{
   render(){
     var thisLength = Meteor.settings.public['age_bands'].length;
     var yAxislist = _.map(Meteor.settings.public['age_bands'],function(row,i){
       return (
         <div key={Meteor.settings.public['age_bands'][thisLength-1-i]} className="yaxis-labels">
          <p>{Meteor.settings.public['age_bands'][thisLength-1-i]}</p>
         </div>
       )
     });

     return(
       <div>
        {yAxislist}
       </div>
     )
   }
 }
