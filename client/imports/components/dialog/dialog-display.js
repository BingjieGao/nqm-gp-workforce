import React, {Component,Prototype} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import GPForm from "../form/form-display"

export default class DialogForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this._handleOpen = this._handleOpen.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
    _handleOpen() {
      this.setState({open: true});
    }
    _handleClose() {
      //console.log(this.refs.dialogContent.getValues());
      this.setState({open: false});
    }
    _handleSubmit() {
      console.log(this.refs.dialogContent.getValues());
      this.setState({open : false});
      this.props.onFormSubmit(this.refs.dialogContent.getValues());
    }

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this._handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this._handleSubmit}
      />
    ];

    return(
      <div>
       <FlatButton label="Add new" onClick={this._handleOpen} />
       <Dialog
         title="Add new GP information"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
       >
        <GPForm ref="dialogContent"/>
       </Dialog>
     </div>
    )
  }
}
