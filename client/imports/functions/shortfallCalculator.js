
_=lodash;

function shortfallCalculator(){
  let shortfallNow = -Number($('#totalHoursNow').html())+Number($('#demand-2016').html());
  let shortfallTwo = -Number($('#totalHoursTwo').html())+Number($('#demand-2018').html());
  let shortfallFive = -Number($('#totalHoursFive').html())+Number($('#demand-2021').html());
  let shortfallTen = -Number($('#totalHoursTen').html())+Number($('#demand-2026').html());

  $('#shortfall-2016').html(shortfallNow);
  $('#shortfall-2018').html(shortfallTwo);
  $('#shortfall-2021').html(shortfallFive);
  $('#shortfall-2026').html(shortfallTen);
}

export {shortfallCalculator};
