const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    name: String,
    taskIds: [Schema.Types.ObjectId],
    _userId: Schema.Types.ObjectId,
    startDate: Date,
    endDate: Date,
    description: String,
    breakIds: [Schema.Types.ObjectId],
    status: String,

});

const SessionModel = mongoose.model('Session', SessionSchema);
module.exports = SessionModel;
