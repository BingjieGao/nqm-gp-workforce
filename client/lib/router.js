import React from "react";
import {mount} from "react-mounter";
import {FlowRouter} from "meteor/kadira:flow-router";
import connectionManager from "../imports/connection-manager";

import Table from "../imports/components/table/table-widget"
import Header from "../imports/containers/layout-container";
import Contents from "../imports/components/viewer";
import FormContent from "../imports/components/form/form-widget";


// This is the default route - render the explorer
FlowRouter.route("/", {
  name: "root",
  action: function(params, queryParams) {
    mount(Header, { content:function(){
      return <Contents />
    }});
  }
});
