/*jshint esversion: 6 */

const request = require('request');
const ObjectId = require('mongoose').Types.ObjectId;


const Participant = require('./../models/particpant');
const BaseController = require('./base.controller');

class PartcipantController extends BaseController {

  constructor() {
    super(Participant, 'participants');
  }
}


module.exports = ParticipantController








