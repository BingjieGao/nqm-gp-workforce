import {Meteor} from "meteor/meteor";
_=lodash;

function substituteCalculator(){
  let sub_array = ["2","3","4","5","6"];
  let sub_cap = 0;
  let costNow = 0,costTwo = 0,costFive = 0,costTen= 0
  _.forEach(sub_array,function(index){
    sub_cap += Number($("#"+index+"ratio").val());
    $("#"+index+"hour").html((Number($("#"+index+"ratio").val())*Meteor.settings.public.fulltime).toFixed(2));
  });

  let capNow = sub_cap*Number($("#demand-2016").html());
  let capTwo = sub_cap*Number($("#demand-2018").html());
  let capFive = sub_cap*Number($("#demand-2021").html());
  let capTen = sub_cap*Number($("#demand-2026").html());
  let newShortfallNow = Number($("#shortfall-2016").html()) - capNow;
  let newShortfallTwo = Number($("#shortfall-2018").html()) - capTwo;
  let newShortfallFive = Number($("#shortfall-2021").html()) - capFive;
  let newShortfallTen = Number($("#shortfall-2026").html()) - capTen;

  $("#capacity-2016").html(parseInt(capNow));
  $("#capacity-2018").html(parseInt(capTwo));
  $("#capacity-2021").html(parseInt(capFive));
  $("#capacity-2026").html(parseInt(capTen));

  $("#newshortfall-2016").html(parseInt(newShortfallNow));
  $("#newshortfall-2018").html(parseInt(newShortfallTwo));
  $("#newshortfall-2021").html(parseInt(newShortfallFive));
  $("#newshortfall-2026").html(parseInt(newShortfallTen));

  _.forEach(sub_array,function(index){
    costNow += Number($("#"+index+"ratio").val())*Number($("#demand-2016").html())*Number($("#"+index+"cost").val());
    costTwo += Number($("#"+index+"ratio").val())*Number($("#demand-2018").html())*Number($("#"+index+"cost").val());
    costFive += Number($("#"+index+"ratio").val())*Number($("#demand-2021").html())*Number($("#"+index+"cost").val());
    costTen += Number($("#"+index+"ratio").val())*Number($("#demand-2026").html())*Number($("#"+index+"cost").val());
  });

  costNow += Number($("#totalHoursNow").html())*Number($("#0cost").val()) + newShortfallNow*Number($("#1cost").val());
  costTwo += Number($("#totalHoursTwo").html())*Number($("#0cost").val()) + newShortfallTwo*Number($("#1cost").val());
  costFive += Number($("#totalHoursFive").html())*Number($("#0cost").val()) + newShortfallFive*Number($("#1cost").val());
  costTen += Number($("#totalHoursTen").html())*Number($("#0cost").val())+ newShortfallTen*Number($("#1cost").val());

  $("#newcost-2016").html(parseInt(costNow));
  $("#newcost-2018").html(parseInt(costTwo));
  $("#newcost-2021").html(parseInt(costFive));
  $("#newcost-2026").html(parseInt(costTen));

}

export {substituteCalculator}
