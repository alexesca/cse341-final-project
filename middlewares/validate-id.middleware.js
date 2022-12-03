const {get} = require('lodash');
const {isMongoId} = require('validator');

exports.validate = (req, res, next) => {
    const params = get(req, 'params');
    const _id = get(params, '_id');
    if(isMongoId(_id)) {
        next();
    } else {
        next("Invalid Mongo ID");
    }
}
