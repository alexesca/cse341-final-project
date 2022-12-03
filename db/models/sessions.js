const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    taskIds: [Schema.Types.ObjectId],
    _userId: Schema.Types.ObjectId,
    startDate: Date,
    endDate: Date,
    description: String,
    breakIds: [Schema.Types.ObjectId],
    status: String,

});

const TaskModel = mongoose.model('Task', TaskSchema);
module.exports = TaskModel;
