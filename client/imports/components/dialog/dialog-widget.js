import React, {Component,Prototype} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import GPForm from "../form/form-widget"

export default class DialogForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this._handleOpen = this._handleOpen.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }
    _handleOpen() {
      this.setState({open: true});
    }
    _handleClose() {
      this.setState({open: false});
    }

  render(){
    console.log(GPForm.state);
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
        onTouchTap={this._handleClose}
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
        <GPForm />
       </Dialog>
     </div>
    )
  }
}
