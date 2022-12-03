const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BreakSchema = new Schema({
    name: String,
    description: String,
    _userId: String,
    createdAt: Date,
    dueDate: Date,
});

const BreakModel = mongoose.model('Break', BreakSchema);
module.exports = BreakModel;
