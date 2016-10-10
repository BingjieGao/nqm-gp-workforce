import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

_=lodash;

const styles = {
  customWidth:{
    width:150,
  },
};

// Task component - represents a single todo item
 export default class FormContent extends Component {
   constructor(props) {
     super(props);
     this.state = {
       name:'',
       gender: 1,
       age: ''
     };
     this._handleGender = this._handleGender.bind(this);
     this._handleName = this._handleName.bind(this);
     this._handleAge = this._handleAge.bind(this);
     //this.getValues = this.getValues.bind(this);
   }

    _handleGender(event,index,value){
      this.setState({
        gender: value
      });
      console.log(this.state);
    }
    _handleName(event,index,value){
      this.setState({
        name: event.target.value
      });
      console.log(this.state);
    }
    _handleAge(event){
      this.setState({
        age: event.target.value
      });
      console.log(this.state);
    }
     getValues() {
       return this.state;
     }

  render() {
    return (
      <div>
        <TextField
          value={this.state.name}
          errorText="This field is required"
          floatingLabelText="Name"
          onChange={this._handleName}
        /><br />
      <SelectField value={this.state.gender} onChange={this._handleGender} floatingLabelText="Gender">
          <MenuItem value={1} primaryText="Male" />
          <MenuItem value={2} primaryText="Female" />
        </SelectField>
        <br />
        <TextField
          value={this.state.age}
          errorText="This field is required"
          floatingLabelText="Age"
          onChange={this._handleAge}
          /><br />
      </div>
    )
  }
}

FormContent.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  //FormData: PropTypes.array.isRequired
};
