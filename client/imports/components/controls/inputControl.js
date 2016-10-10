import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { Meteor } from "meteor/meteor";

 export default class InputControl extends Component{
   constructor(props) {
     super(props);
     this.state = {
       femaleList: props.ArrayFemale,
       maleList: props.ArrayMale
     }
     this._handleInputs = this._handleInputs.bind(this);
   }
   _handleInputs(event){
      this.setState({
        // femaleList: update(this.state.femaleList,{})
        // [event.target.name]: event.target.value
      });
   }

   render(){
     console.log(this.state.femaleList[0]);
     var female_array = this.state.femaleList;
     return(
       <Paper id="input-widget" zDepth={1} className="flex-items">
        <h3>Input fields </h3>
        <div>
          <TextField
            id="text-field-controlled"
            value={this.state.femaleList[0]['persons']}
            errorText="This field is required"
            floatingLabelText="Name"
            onChange={this._handleInputs}
            name={this.state.femaleList[0]['age_band']}
          /><br />
          <TextField
            id="text-field-controlled"
            value={this.state.maleList[0]['persons']}
            errorText="This field is required"
            floatingLabelText="Name"
            onChange={this._handleInputs}
            name={this.state.maleList[0]['age_band']}
          /><br />
        </div>
       </Paper>
     )

   }
 }
 InputControl.propTypes = {
   // This component gets the task to display through a React prop.
   // We can use propTypes to indicate it is required
   ArrayFemale: PropTypes.array.isRequired,
   ArrayMale: PropTypes.array.isRequired
 };
