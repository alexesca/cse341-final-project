const {get} = require('lodash');

exports.validate = (req, res, next) => {
    const body = get(req, 'body');
    const email = get(body, 'email');
    const name = get(body, 'name');

    if(!email || !name) return next("All fields are required.");
    next();

}
