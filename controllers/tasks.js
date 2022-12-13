const Tasks = require("./../db/models/tasks.js") //

exports.index = async (req, res) => {
    // #swagger.tags = ['Tasks']
    // #swagger.summary = 'Find all tasks.'
    // #swagger.description = 'This endpoint returns a list with all the tasks in the database.'
    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Tasks' }
} */
    const tasks = await Tasks.find()
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)))
    res.send(tasks)
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Tasks']
    // #swagger.summary = 'Find task by ID.'
    // #swagger.description = 'This endpoint returns a task found with the provided ID'
    /* #swagger.parameters['_id'] = {
        description: "Id of the desired task.",
        required: true,
        type: "string",
        schema: "636c889a2a02ef8e6e9f50e6"
} */

    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/User' }
} */

    const task = await Tasks.findById(req.params._id)
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)));
    if(task) {
        res.send(task);
    } else {
        next("User not found.");
    }
};

exports.create = async (req, res) => {
    // #swagger.tags = ['Tasks']
    // #swagger.summary = 'Create task and return ID. All fields are required.'
    // #swagger.description = 'This endpoint creates a task and returns the newly created task ID.'
    /*  #swagger.parameters['Tasks'] = {
                    in: 'body',
                    description: 'Model of the new task.',
                    schema: { $ref: '#/definitions/User' }
            } */
    /* #swagger.responses[201] = {
    description: 'User successfully created.',
    schema: "Newly created User ID"
} */
    const _task = new Tasks(req.body);
    const task = await _task.save()
    res.status(201).send(task._id);
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Tasks']
    // #swagger.summary = 'Update task.'
    // #swagger.description = 'This endpoint updates a task. All fields are required for a successful update.'
    /*  #swagger.parameters['Tasks'] = {
                in: 'body',
                description: 'Model of the new task.',
                schema: { $ref: '#/definitions/User' }
        } */
    const _id = req.params._id;
    await Tasks.findByIdAndUpdate(_id, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Tasks']
    // #swagger.summary = 'Delete task.'
    // #swagger.description = 'This endpoint deletes a task if a valid ID is passed.'
    const _id = req.params._id;
    await Tasks.findByIdAndDelete(_id);
    res.sendStatus(200)
};
