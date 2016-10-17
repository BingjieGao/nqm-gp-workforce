import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { Meteor } from "meteor/meteor";
import YAxisControl from "./yAxisControl";
import PyramidControl from "./pyramidControl";
import ReactDom from "react-dom";
import {ratingCalculator} from "../../functions/ratingCalculator";
import {shortfallD3} from "../../functions/shortfallD3";

_=lodash;

 export default class InputControl extends Component{
   constructor(props) {
     super(props);
     this.state = {
       femaleList: props.ArrayFemale,
       maleList: props.ArrayMale,
     }
     this._handleFemale = this._handleFemale.bind(this);
     this._handleMale = this._handleMale.bind(this);
     this.renderYAxis = this.renderYAxis.bind(this);
   }
   _handleFemale(event){
     let TempList  = [];
     TempList = TempList.concat(this.state.femaleList);
     _.forEach(TempList,function(TempObj){
       if(TempObj['age_band'] == event.target.name){
        TempObj['persons'] = Number(event.target.value);
      }
     })

      this.setState({
        femaleList: TempList,
      });
      let ratingResult = ratingCalculator(TempList,this.state.maleList);
      $('#demand-2016').html(ratingResult.demandNow);
      $('#demand-2018').html(ratingResult.demandTwo);
      $('#demand-2021').html(ratingResult.demandFive);
      $('#demand-2026').html(ratingResult.demandTen);

      $('#shortfall-2016').html(ratingResult.shortfallNow);
      $('#shortfall-2018').html(ratingResult.shortfallTwo);
      $('#shortfall-2021').html(ratingResult.shortfallFive);
      $('#shortfall-2026').html(ratingResult.shortfallTen);

      this.props.onFemaleChange(TempList);
   }
   _handleMale(event){
     let TempList  = [];
     TempList = TempList.concat(this.state.maleList);
     _.forEach(TempList,function(TempObj){
       if(TempObj['age_band'] == event.target.name)
        TempObj['persons'] = Number(event.target.value);
     })
     let ratingResult = ratingCalculator(this.state.femaleList,TempList);
     $('#demand-2016').html(ratingResult.demandNow);
     $('#demand-2018').html(ratingResult.demandTwo);
     $('#demand-2021').html(ratingResult.demandFive);
     $('#demand-2026').html(ratingResult.demandTen);

     $('#shortfall-2016').html(ratingResult.shortfallNow);
     $('#shortfall-2018').html(ratingResult.shortfallTwo);
     $('#shortfall-2021').html(ratingResult.shortfallFive);
     $('#shortfall-2026').html(ratingResult.shortfallTen);


      this.setState({
        maleList: TempList
      });
      this.props.onMaleChange(TempList);
   }
   renderYAxis() {
     return(
       <YAxisControl />
     )
   }
  //  renderPyramid(){
  //    ReactDom.render(<PyramidControl femaleList={this.state.femaleList} maleList={this.state.maleList}/>,document.getElementsByClassName('demand-data'));
  //  }
  //  componentDidMount(props){
  //    setTimeout(function(){
  //      ReactDom.render(<PyramidControl femaleList={props.femaleList} maleList={props.maleList}/>,document.getElementsByClassName('demand-data'));
  //    },5000);
  //  }
  //  componentDidUpdate(){
  //    setTimeout(function(){
  //      ReactDom.render(<PyramidControl femaleList={this.state.femaleList} maleList={this.state.maleList}/>,document.getElementsByClassName('demand-data'));
  //    },5000);
  //  }
   render(){
     var self = this;
     var femaleDisplay =  _.map(this.state.femaleList,function(row){
       let tempId = "female"+row['_id'];
        return(
            <TextField
              className="editable-inputs"
              key={row['_id']}
              id={tempId}
              type="number"
              value={row['persons']}
              onChange={self._handleFemale}
              name={row['age_band']}
            />
        )
      })
      var maleDisplay =  _.map(this.state.maleList,function(row){
        let tempId = "female"+row['_id'];
         return(
              <TextField
                className="editable-inputs"
                key={row['_id']}
                id={tempId}
                type="number"
                value={row['persons']}
                onChange={self._handleMale}
                name={row['age_band']}
              />
         )
       })
       console.log(this.renderYAxis());

       let ratingResult = ratingCalculator(self.state.femaleList,self.state.maleList);
       $('#demand-2016').html(ratingResult.demandNow);
       $('#demand-2018').html(ratingResult.demandTwo);
       $('#demand-2021').html(ratingResult.demandFive);
       $('#demand-2026').html(ratingResult.demandTen);

       $('#shortfall-2016').html(ratingResult.shortfallNow);
       $('#shortfall-2018').html(ratingResult.shortfallTwo);
       $('#shortfall-2021').html(ratingResult.shortfallFive);
       $('#shortfall-2026').html(ratingResult.shortfallTen);
       shortfallD3();

     return(
       <Paper id="input-widget" zDepth={1} className="flex-items">
        <h3>Input fields </h3>
        <div className="input-container">
          <div className="input-itmes" id="male-inputs">
            {maleDisplay}
          </div>
          <div className="input-items" id="yAxis-inputs">
            {this.renderYAxis()}
          </div>
          <div className="input-itmes" id="female-inputs">
            {femaleDisplay}
          </div>
        </div>
       </Paper>
     )

   }
 }
 InputControl.propTypes = {
   // This component gets the task to display through a React prop.
   // We can use propTypes to indicate it is required
   ArrayFemale: PropTypes.array.isRequired,
   ArrayMale: PropTypes.array.isRequired
 };
