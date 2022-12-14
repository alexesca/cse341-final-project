const Users = require("./../db/models/users.js") //

exports.index = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Find all user.'
    // #swagger.description = 'This endpoint returns a list with all the user in the database.'
    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Users' }
} */
    try {
        const user = await Users.find()
            .lean()
            .then(doc => JSON.parse(JSON.stringify(doc)))
        res.send(user);
    } catch (e) {
        throw new Error("There was an error finding all the users.");
    }
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Find user by ID.'
    // #swagger.description = 'This endpoint returns a user found with the provided ID'
    /* #swagger.parameters['_id'] = {
        description: "Id of the desired user.",
        required: true,
        type: "string",
        schema: "636c889a2a02ef8e6e9f50e6"
} */

    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/User' }
} */

    const user = await Users.findById(req.params._id)
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)));
    if(user) {
        res.send(user);
    } else {
        next("User not found.");
    }
};

exports.create = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Create user and return ID. All fields are required.'
    // #swagger.description = 'This endpoint creates a user and returns the newly created user ID.'
    /*  #swagger.parameters['Users'] = {
                    in: 'body',
                    description: 'Model of the new user.',
                    schema: { $ref: '#/definitions/User' }
            } */
    /* #swagger.responses[201] = {
    description: 'User successfully created.',
    schema: "Newly created User ID"
} */
    const _user = new Users(req.body);
    const user = await _user.save();
    res.status(201).send(user._id);
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Update user.'
    // #swagger.description = 'This endpoint updates a user. All fields are required for a successful update.'
    /*  #swagger.parameters['Users'] = {
                in: 'body',
                description: 'Model of the new user.',
                schema: { $ref: '#/definitions/User' }
        } */
    const _id = req.params._id;
    await Users.findByIdAndUpdate(_id, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Delete user.'
    // #swagger.description = 'This endpoint deletes a user if a valid ID is passed.'
    const _id = req.params._id;
    await Users.findByIdAndDelete(_id);
    res.sendStatus(200)
};
