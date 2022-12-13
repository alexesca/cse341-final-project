const {get} = require('lodash');

exports.validate = (req, res, next) => {
    const body = get(req, 'body')
    const _userId = get(body, '_userId');
    const email = get(body, 'email');
    const name = get(body, 'name');
    const createdAt = get(body, 'createdAt');
    const dueDate = get(body, 'dueDate');
    const description = get(body, 'description');

    if(!name || !description || !_userId || !createdAt || !dueDate || !email) return next("All fields are required.");
    next();

}
