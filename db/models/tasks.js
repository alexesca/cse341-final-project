const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    email: String,
    name: String,
    description: String,
    _userId: String,
    createdAt: Date,
    dueDate: Date,

});

const TaskModel = mongoose.model('Task', TaskSchema);
module.exports = TaskModel;
