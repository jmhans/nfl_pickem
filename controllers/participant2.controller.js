/*jshint esversion: 6 */

const request = require('request');
const ObjectId = require('mongoose').Types.ObjectId;


const Participant = require('./../models/participant');
const BaseController = require('./base.controller');

class ParticipantController extends BaseController {

  constructor() {
    super(Participant, 'participants');
  }
}


module.exports = ParticipantController

