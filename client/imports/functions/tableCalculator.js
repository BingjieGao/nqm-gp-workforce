
_=lodash;

function tableCalculator(TableData){
  let sum,totalHours = 0;
  _.forEach(TableData,row => {
    for(var years in row.hours){
      totalHours += row.hours[years];
    }
  })
  sum = totalHours * 6;
  console.log(totalHours);
  let tableResult = {
    sum:sum,
    totalHours:totalHours
  }
  return tableResult;
}

export {tableCalculator};
