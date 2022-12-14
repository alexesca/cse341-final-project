const {get} = require('lodash');

exports.validate = (req, res, next) => {
    const body = get(req, 'body')
    const _userId = get(body, '_userId');
    const name = get(body, 'name');
    const description = get(body, 'description');
    const createdAt = get(body, 'createdAt');
    const dueDate = get(body, 'dueDate');

    if(!name || !description || !_userId || !createdAt || !dueDate) return next("All fields are required.");
    next();

}
