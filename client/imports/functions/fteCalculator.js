import {Meteor} from "meteor/meteor";

let fteResult = 0;
function fteCalculator(patients){
  if(patients != null){
    fteResult =1000/((Meteor.settings.public.fulltime)*patients);
  }
  else{
    console.log(fteResult);
  }
  return fteResult;
}
export {fteCalculator};
