
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
  totalDemandTwo = totalDemandNow;
  totalDemandFive =  totalDemandNow;
  totalDemandTen = totalDemandNow;

  shortfallNow = -Number($('#totalHoursNow').html())+totalDemandNow;
  shortfallTwo = -Number($('#totalHoursTwo').html())+totalDemandTwo;
  shortfallFive = -Number($('#totalHoursFive').html())+totalDemandFive;
  shortfallTen = -Number($('#totalHoursTen').html())+totalDemandTen;

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

}

export {ratingCalculator};
