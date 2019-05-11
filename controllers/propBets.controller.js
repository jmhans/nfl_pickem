/*jshint esversion: 6 */

const request = require('request');

const ObjectId = require('mongoose').Types.ObjectId;

const betGraph = require('./../models/propBets');

var PropBetsController = {

    _get: function(req, res) {
      
      
    betGraph.find({}, (err, betSummary) =>  {

      var bsArr = [];
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (!betSummary) {
        return res.status(400).send({message: 'No bets found.'});
      } else {
        betSummary.forEach(bs => {
          bsArr.push(bs);
        });
      }
      return res.send(bsArr)
    });
   
  },
  
  
}

module.exports = PropBetsController








