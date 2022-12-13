const {get} = require('lodash');

exports.validate = (req, res, next) => {
    const body = get(req, 'body')
    const name = get(body, 'name');
    const taskIds = get(body, 'taskIds');
    const _userId = get(body, '_userId');
    const startDate = get(body, 'startDate');
    const endDate = get(body, 'endDate');
    const description = get(body, 'description');
    const breakIds = get(body, 'breakIds');
    const status = get(body, 'status');

    if(!name || !description || !_userId || !startDate || !endDate || !taskIds || !breakIds || !status) return next("All fields are required.");
    next();

}
