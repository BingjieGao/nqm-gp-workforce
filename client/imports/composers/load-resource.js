import connectionManager from "../connection-manager";
import TDXApi from "nqm-api-tdx/client-api";
import {Meteor} from "meteor/meteor";

function loadResourceData({resourceId, filter, options}, onData) {
  const config = {
    commandHost: Meteor.settings.public.commandHost,
    queryHost: Meteor.settings.public.queryHost,
    accessToken: connectionManager.authToken
  };
  const api = new TDXApi(config);
  var filter = {"area_id":{"$eq":"E01023286"},"year":{"$eq":"2016"}};
  api.getDatasetData(resourceId, filter, null, options, (err, response) => {
    if (err) console.log("Failed to get data: ", err);
    else {
      let maleList = [];
      let femaleList = [];
      let totalPop = 0;
      //console.log(response.data);
      _.forEach(response.data, function(data,index){
        if (data.age_band == "All Ages") totalPop += data.persons;
        else {
          data._id = index;
          if (data.gender == "male") maleList.push(data);
          else femaleList.push(data);
        }
      });
      maleList.sort(function(a,b) {
        return b.age_band.replace(/(^\d+)(.+$)/i,'$1') - a.age_band.replace(/(^\d+)(.+$)/i,'$1');
      });
      femaleList.sort(function(a,b) {
        return b.age_band.replace(/(^\d+)(.+$)/i,'$1') - a.age_band.replace(/(^\d+)(.+$)/i,'$1');
      });
      onData(null, {data: response.data,maleList:maleList,femaleList:femaleList,totalPop:totalPop});
    }
  });
}

export default loadResourceData;
