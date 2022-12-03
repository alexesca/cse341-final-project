const Users = require("./../db/models/users") //

exports.index = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Find all user.'
    // #swagger.description = 'This endpoint returns a list with all the user in the database.'
    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Users' }
} */
    const user = await Users.find()
    res.send(user)
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Find script by ID.'
    // #swagger.description = 'This endpoint returns a script found with the provided ID'
    /* #swagger.parameters['_id'] = {
        description: "Id of the desired script.",
        required: true,
        type: "string",
        schema: "636c889a2a02ef8e6e9f50e6"
} */

    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/User' }
} */

    const script = await Users.findById(req.params._id);
    if(script) {
        res.send(script);
    } else {
        next("User not found.");
    }
};

exports.create = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Create script and return ID. All fields are required.'
    // #swagger.description = 'This endpoint creates a script and returns the newly created script ID.'
    /*  #swagger.parameters['Users'] = {
                    in: 'body',
                    description: 'Model of the new script.',
                    schema: { $ref: '#/definitions/User' }
            } */
    /* #swagger.responses[201] = {
    description: 'User successfully created.',
    schema: "Newly created User ID"
} */
    const script = await Users.create(req.body);
    res.status(201).send(script._id);
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Update script.'
    // #swagger.description = 'This endpoint updates a script. All fields are required for a successful update.'
    /*  #swagger.parameters['Users'] = {
                in: 'body',
                description: 'Model of the new script.',
                schema: { $ref: '#/definitions/User' }
        } */
    const _id = req.params._id;
    await Users.findByIdAndUpdate(_id, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Delete script.'
    // #swagger.description = 'This endpoint deletes a script if a valid ID is passed.'
    const _id = req.params._id;
    await Users.findByIdAndDelete(_id);
    res.sendStatus(200)
};
