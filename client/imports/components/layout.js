import React,{Component} from "react";
import {Meteor} from "meteor/meteor";

import connectionManager from "../connection-manager";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";

class Layout extends Component{
  render() {
    var styles = {
      appBar: {
        position: "fixed"
      },
      layoutContent: {
        padding: "68px 0px 0px 5px"
      }
    };
    var content = this.props.content;
    var logoutButton;
    console.log(content);

    return (
      <MuiThemeProvider>
        <div>
          <AppBar style={styles.appBar} title="nqm GP WorkForce" showMenuIconButton={false} iconElementRight={logoutButton} />
          <div style={styles.layoutContent}>
            {content}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
