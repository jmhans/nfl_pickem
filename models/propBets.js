const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betGraph = new Schema({
  description: {type: String, required: true}, 
  number: {type: Number, required: false}, 
  paymentStatus: {type: Number, required: false}, 
  sides: [
          {adjustment: {type: Number}}, 
          {bettor: {type: String}}, 
          {currentValue: {type: Number}}, 
          {paymentsMade: {type: Number}}, 
          {seriesName: {type: String}}
          ], 
  year: {type: Number, required: true}, 
  chartSeries: [
    {
      seriesColor: {type: String}, 
      seriesDescription: {type: String}, 
      seriesLookup: {type: String}, 
      seriesType: {type: String}
    }
  ], 
  xSeries: [
    {
      seriesDescription: {type: String}, 
      seriesNum: {type: Number}
    }
  ], 
  yAxisLabel: {type: String, required: true}, 
  yAxisMin: {type: Number, required: false}
});


const betData = new Schema({
  gameNum: {type: Number, required: true}, 
  winDiff: {type: Number, required: true}, 
  minline: {type: Number, required: true}, 
  milline: {type: Number, required: true},
  minResult: {type: Number, required: true},
  milResult: {type: Number, required: true},
  minAvg: {type: Number, required: true}, 
  milAvg: {type: Number, required: true},
  min95Avg: {type: Number, required: true}, 
  minInnBat: {type: Number, required: true}, 
  minGameTime: {type: String, required: false},
  milGameTime: {type: String, required: false},
  minGamePk: {type: Number, required: false},
  milGamePk: {type: Number, required: false},
  minWins: {type: Number, required: true},
  milWins: {type: Number, required: true},
  minInnBatCumulative: {type: Number, required: true},
  milInnBatCumulative: {type: Number, required: true}
});



module.exports = mongoose.model('betGraph', betGraph);

