import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { Meteor } from "meteor/meteor";
_=lodash;

 export default class InputControl extends Component{
   constructor(props) {
     super(props);
     this.state = {
       femaleList: props.ArrayFemale,
       maleList: props.ArrayMale,
     }
     this._handleFemale = this._handleFemale.bind(this);
     this._handleMale = this._handleMale.bind(this);
   }
   _handleFemale(event){
     let TempList  = [];
     TempList = TempList.concat(this.state.femaleList);
     _.forEach(TempList,function(TempObj){
       if(TempObj['age_band'] == event.target.name){
        TempObj['persons'] = event.target.value;
      }
     })

      this.setState({
        femaleList: TempList,
      });

      this.props.onFemaleChange(TempList);
   }
   _handleMale(event){
     let TempList  = [];
     TempList = TempList.concat(this.state.maleList);
     _.forEach(TempList,function(TempObj){
       if(TempObj['age_band'] == event.target.name)
        TempObj['persons'] = Number(event.target.value);
     })

      this.setState({
        maleList: TempList
      });
      this.props.onMaleChange(TempList);
   }

   render(){

     return(
       <Paper id="input-widget" zDepth={1} className="flex-items">
        <h3>Input fields </h3>
        <div>
          <TextField
            type="number"
            value={this.state.maleList[0]['persons']}
            errorText="This field is required"
            onChange={this._handleMale}
            name={this.state.maleList[0]['age_band']}
          /><br />
          <TextField
            type="number"
            value={this.state.femaleList[0]['persons']}
            errorText="This field is required"
            onChange={this._handleFemale}
            name={this.state.femaleList[0]['age_band']}
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
