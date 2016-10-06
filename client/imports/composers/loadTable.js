import connectionManager from "../connection-manager";
import {tableCalculator} from "../functions/tableCalculator"
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
        '2016':10,
        '2017':11,
        '2018':10
      }
    },
    {
      _id:2,
      name:"Second GP",
      age:40,
      gender:'male',
      hours:{
        '2016':20,
        '2017':13,
        '2018':16
      }
    }
  ];
  console.log(tableCalculator);
  var tableResult = tableCalculator(data);
  console.log(tableResult);
  onData(null,{TableData:data});
}


export default loadTableData;
