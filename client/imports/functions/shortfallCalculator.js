
import {substituteCalculator} from "./substituteCalculator";
_=lodash;

function shortfallCalculator(){
  let shortfallNow = -Number($('#totalHoursNow').html())+Number($('#demand-2016').html());
  let shortfallTwo = -Number($('#totalHoursTwo').html())+Number($('#demand-2018').html());
  let shortfallFive = -Number($('#totalHoursFive').html())+Number($('#demand-2021').html());
  let shortfallTen = -Number($('#totalHoursTen').html())+Number($('#demand-2026').html());

  var GPcost = Number($("#0cost").val());
  var Locumcost = Number($("#1cost").val());

  let costNow = Number($('#totalHoursNow').html()) * GPcost + shortfallNow * Locumcost;
  let costTwo = Number($('#totalHoursTwo').html()) * GPcost + shortfallTwo * Locumcost;
  let costFive = Number($('#totalHoursFive').html()) * GPcost + shortfallFive * Locumcost;
  let costTen = Number($('#totalHoursTen').html()) * GPcost + shortfallTen * Locumcost;

  $('#shortfall-2016').html(shortfallNow);
  $('#shortfall-2018').html(shortfallTwo);
  $('#shortfall-2021').html(shortfallFive);
  $('#shortfall-2026').html(shortfallTen);

  $('#cost-2016').html(parseInt(costNow));
  $('#cost-2018').html(parseInt(costTwo));
  $('#cost-2021').html(parseInt(costFive));
  $('#cost-2026').html(parseInt(costTen));

  substituteCalculator();
}

export {shortfallCalculator};
