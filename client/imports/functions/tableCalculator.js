
_=lodash;

let currentYear = 2016;
function tableCalculator(TableData){
  console.log(TableData);
  let totalHoursNow = 0, totalHoursTwo = 0,totalHoursFive = 0,totalHoursTen = 0;
  _.forEach(TableData,row => {
    totalHoursNow += row.hours[String(currentYear)];
    totalHoursTwo += row.hours[String(currentYear+2)];
    totalHoursFive += row.hours[String(currentYear+5)];
    totalHoursTen += row.hours[String(currentYear+10)]
  })

  let tableResult = {
    totalHoursNow:totalHoursNow,
    totalHoursTwo:totalHoursTwo,
    totalHoursFive:totalHoursFive,
    totalHoursTen:totalHoursTen
  }

  console.log(tableResult);
  return tableResult;
}

export {tableCalculator};
