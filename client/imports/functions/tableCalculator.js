import {Meteor} from "meteor/meteor";
_=lodash;

let currentYear = 2016;
function tableCalculator(TableData){
  console.log(TableData);
  let totalHoursNow = 0, totalHoursTwo = 0,totalHoursFive = 0,totalHoursTen = 0;
  _.forEach(TableData,row => {
    totalHoursNow += row.hours[String(currentYear)]*(Meteor.settings.public.annual_leave);
    totalHoursTwo += row.hours[String(currentYear+2)]*(Meteor.settings.public.annual_leave) ;
    totalHoursFive += row.hours[String(currentYear+5)] * (Meteor.settings.public.annual_leave);
    totalHoursTen += row.hours[String(currentYear+10)] * (Meteor.settings.public.annual_leave);
  })

  let tableResult = {
    totalHoursNow:parseInt(totalHoursNow),
    totalHoursTwo:parseInt(totalHoursTwo),
    totalHoursFive:parseInt(totalHoursFive),
    totalHoursTen:parseInt(totalHoursTen)
  }

  console.log(tableResult);
  return tableResult;
}

export {tableCalculator};
