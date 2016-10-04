import connectionManager from "../connection-manager";

function loadTableData({tableId,tablename},onData){
  console.log('tableid is '+tableId);
  console.log('tablename is '+tablename);

  var data = [
    {
      _id:1,
      age_band:"0-4",
      area_id:'E06000046',
      area_name:'Isle of Wight',
      gender:'female',
      persons:3200,
      popId:'ONS',
      popId_decription:'ONS projection',
      year:'2016'
    },
    {
      _id:2,
      age_band:"0-4",
      area_id:'E06000046',
      area_name:'Isle of Wight',
      gender:'male',
      persons:3200,
      popId:'ONS',
      popId_decription:'ONS projection',
      year:'2016'
    }
  ];
  onData(null,{TableData:data});
}


export default loadTableData;
