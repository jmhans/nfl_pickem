var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router


var ParticipantController = require('../controllers/participant.controller');
router.use(new ParticipantController().route());


module.exports = router;