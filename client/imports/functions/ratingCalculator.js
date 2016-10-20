import {substituteCalculator} from "./substituteCalculator";

_=lodash;

function ratingCalculator(PyramidFemale,PyramidMale){

  let totalDemandNow = 0, totalDemandTwo = 0,totalDemandFive = 0,totalDemandTen = 0;
  let shortfallNow = 0, shortfallTwo = 0,shortfallFive = 0,shortfallTen = 0;
  let length = Meteor.settings.public.maleRatings.length;
  _.forEach(PyramidFemale,(row,Index) => {
    var ratingMale = Meteor.settings.public.maleRatings[length-Index-1];
    var ratingFemale = Meteor.settings.public.femaleRatings[length-Index-1];
    //console.log(PyramidMale[Index]);
    totalDemandNow += row['persons']*ratingFemale + PyramidMale[Index]['persons']*ratingMale;
  });
  totalDemandNow = parseInt(totalDemandNow);
  totalDemandTwo = totalDemandNow;
  totalDemandFive =  totalDemandNow;
  totalDemandTen = totalDemandNow;

  shortfallNow = -Number($('#totalHoursNow').html())+totalDemandNow;
  shortfallTwo = -Number($('#totalHoursTwo').html())+totalDemandTwo;
  shortfallFive = -Number($('#totalHoursFive').html())+totalDemandFive;
  shortfallTen = -Number($('#totalHoursTen').html())+totalDemandTen;


  console.log($("#0cost").val());
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
