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
     this.state = {value: 1};
     this.handleChange = this.handleChange.bind(this);
   }
  handleChange(event,index,value){
    this.setState({value: event.target.value});
    //this.value = {value};
  }
   onsubmit(){
     console.log('submit');
   }

  render() {
    return (
      <div>
        <TextField
          errorText="This field is required"
          floatingLabelText="Name"
        /><br />
      <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Gender">
          <MenuItem value={1} primaryText="Male" />
          <MenuItem value={2} primaryText="Female" />
        </SelectField>
        <br />
        <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Age Band">
            <MenuItem value={1} primaryText="0-4" />
            <MenuItem value={2} primaryText="5-9" />
            <MenuItem value={3} primaryText="10-14" />
            <MenuItem value={4} primaryText="15-19" />
            <MenuItem value={5} primaryText="20-24" />
            <MenuItem value={6} primaryText="25-29" />
        </SelectField>
        <br />
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Message Field"
      errorText="This field is required."
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
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
