import connectionManager from "../connection-manager";

function loadTableData({tableId,tablename},onData){
  console.log('tableid is '+tableId);
  console.log('tablename is '+tablename);

  var data = [
    {
      _id:1,
      name:"First GP",
      age:30,
      gender:'male',
      hours:{
        '2016':40,
        '2018':37,
        '2021':30,
        '2026':20
      }
    },
    {
      _id:2,
      name:"Second GP",
      age:40,
      gender:'male',
      hours:{
        '2016':30,
        '2018':26,
        '2021':27,
        '2026':15
      }
    }
  ]

  onData(null,{TableData:data});
}


export default loadTableData;
