import {substituteCalculator} from "./substituteCalculator";
import {Meteor} from "meteor/meteor";
import {fteCalculator} from "./fteCalculator";

_=lodash;

function ratingCalculator(PyramidFemale,PyramidMale){

  let totalDemandNow = 0, totalDemandTwo = 0,totalDemandFive = 0,totalDemandTen = 0;
  let shortfallNow = 0, shortfallTwo = 0,shortfallFive = 0,shortfallTen = 0;
  let length = Meteor.settings.public.maleRatings.length;
  let patientsNumber = 0;
  _.forEach(PyramidFemale,(row,Index) => {
    var ratingMale = Meteor.settings.public.maleRatings[length-Index-1];
    var ratingFemale = Meteor.settings.public.femaleRatings[length-Index-1];
    //console.log(PyramidMale[Index]);
    patientsNumber += row['persons'] + PyramidMale[Index]['persons'];
    totalDemandNow += row['persons']*ratingFemale + PyramidMale[Index]['persons']*ratingMale;
  });
  totalDemandNow = parseInt(totalDemandNow/(Meteor.settings.public.annual_leave*52));
  totalDemandTwo = totalDemandNow;
  totalDemandFive =  totalDemandNow;
  totalDemandTen = totalDemandNow;

  shortfallNow = -Number($('#totalHoursNow').html())+totalDemandNow;
  shortfallTwo = -Number($('#totalHoursTwo').html())+totalDemandTwo;
  shortfallFive = -Number($('#totalHoursFive').html())+totalDemandFive;
  shortfallTen = -Number($('#totalHoursTen').html())+totalDemandTen;


  var GPcost = Number($("#0cost").val());
  var Locumcost = Number($("#1cost").val());

  let costNow = Number($('#totalHoursNow').html())*GPcost + shortfallNow*Locumcost;
  let costTwo = Number($('#totalHoursTwo').html())*GPcost + shortfallTwo*Locumcost;
  let costFive = Number($('#totalHoursFive').html())*GPcost + shortfallFive*Locumcost;
  let costTen = Number($('#totalHoursTen').html())*GPcost + shortfallTen*Locumcost;

  let ratingResult = {
    demandNow:totalDemandNow,
    demandTwo:totalDemandTwo,
    demandFive:totalDemandFive,
    demandTen:totalDemandTen,
    shortfallNow: shortfallNow,
    shortfallTwo: shortfallTwo,
    shortfallFive: shortfallFive,
    shortfallTen: shortfallTen
  }
  $("#fte-2016").html(Number($('#totalHoursNow').html())*fteCalculator(patientsNumber).toFixed(2));
  $("#fte-2018").html(Number($('#totalHoursTwo').html())*fteCalculator(patientsNumber).toFixed(2));
  $("#fte-2021").html(Number($('#totalHoursFive').html())*fteCalculator(patientsNumber).toFixed(2));
  $("#fte-2026").html(Number($('#totalHoursTen').html())*fteCalculator(patientsNumber).toFixed(2));

  $('#demand-2016').html(ratingResult.demandNow);
  $('#demand-2018').html(ratingResult.demandTwo);
  $('#demand-2021').html(ratingResult.demandFive);
  $('#demand-2026').html(ratingResult.demandTen);

  $('#shortfall-2016').html(ratingResult.shortfallNow);
  $('#shortfall-2018').html(ratingResult.shortfallTwo);
  $('#shortfall-2021').html(ratingResult.shortfallFive);
  $('#shortfall-2026').html(ratingResult.shortfallTen);

  $('#cost-2016').html(parseInt(costNow));
  $('#cost-2018').html(parseInt(costTwo));
  $('#cost-2021').html(parseInt(costFive));
  $('#cost-2026').html(parseInt(costTen));

  substituteCalculator();
}


export {ratingCalculator};
