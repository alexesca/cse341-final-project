const Sessions = require("./../db/models/sessions.js")

exports.index = async (req, res) => {
    // #swagger.tags = ['Sessions']
    // #swagger.summary = 'Find all sessions.'
    // #swagger.description = 'This endpoint returns a list with all the sessions in the database.'
    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Sessions' }
} */
    const sessions = await Sessions.find()
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)))
    res.send(sessions)
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Sessions']
    // #swagger.summary = 'Find session by ID.'
    // #swagger.description = 'This endpoint returns a session found with the provided ID'
    /* #swagger.parameters['_id'] = {
        description: "Id of the desired session.",
        required: true,
        type: "string",
        schema: "636c889a2a02ef8e6e9f50e6"
} */

    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Session' }
} */

    const conditions  = {_id: req.params._id};
    const session = await Sessions.findOne(conditions)
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)));
    if(session) {
        res.send(session);
    } else {
        next("User not found.");
    }
};

exports.create = async (req, res) => {
    // #swagger.tags = ['Sessions']
    // #swagger.summary = 'Create session and return ID. All fields are required.'
    // #swagger.description = 'This endpoint creates a session and returns the newly created session ID.'
    /*  #swagger.parameters['Sessions'] = {
                    in: 'body',
                    description: 'Model of the new session.',
                    schema: { $ref: '#/definitions/Session' }
            } */
    /* #swagger.responses[201] = {
    description: 'User successfully created.',
    schema: "Newly created User ID"
} */
    const _session = new Sessions(req.body);
    const session = await _session.save();
    res.status(201).send(session._id);
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Sessions']
    // #swagger.summary = 'Update session.'
    // #swagger.description = 'This endpoint updates a session. All fields are required for a successful update.'
    /*  #swagger.parameters['Sessions'] = {
                in: 'body',
                description: 'Model of the new session.',
                schema: { $ref: '#/definitions/Session' }
        } */
    const _id = req.params._id;
    await Sessions.findByIdAndUpdate(_id, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Sessions']
    // #swagger.summary = 'Delete session.'
    // #swagger.description = 'This endpoint deletes a session if a valid ID is passed.'
    const _id = req.params._id;
    await Sessions.findByIdAndDelete(_id);
    res.sendStatus(200)
};
