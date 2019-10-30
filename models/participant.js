const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema({
    nickname: {type: String, required: true}, 
    user_id: {type: String, required: false}
});

module.exports = mongoose.model( 'Participant', participantSchema);
