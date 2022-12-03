const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    name: String,
    phoneNumber: String,
    date: Date,
    username: String,
    password: String
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
