import {Meteor} from "meteor/meteor";
import injectTapEventPlugin from "react-tap-event-plugin";
Meteor.startup(function(){
  //Material-UI onTap
  injectTapEventPlugin();
})
