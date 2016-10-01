import React from "react";
import {mount} from "react-mounter";
import {FlowRouter} from "meteor/kadira:flow-router";

import connectionManager from "../imports/connection-manager";
import Layout from "../imports/containers/layout-container";

// This is the default route - render the explorer
FlowRouter.route("/", {
  name: "root",
  action: function(params, queryParams) {
    mount(Layout, { content:<h1>nqm</h1>});
  }
});
