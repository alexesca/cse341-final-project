const {get} = require('lodash');

exports.validate = (req, res, next) => {
    const body = get(req, 'body');
    const email = get(body, 'email');
    const name = get(body, 'name');
    const phoneNumber = get(body, 'phoneNumber');

    if(!email || !name || !phoneNumber) next("All fields are required.");

}
