const Breaks = require("./../db/models/breaks.js")
const {mongo} = require("mongoose"); //

exports.index = async (req, res) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Find all breaks.'
    // #swagger.description = 'This endpoint returns a list with all the breaks in the database.'
    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Breaks' }
} */
    const breaks = await Breaks.find()
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)))
    res.send(breaks)
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Find nyBreak by ID.'
    // #swagger.description = 'This endpoint returns a nyBreak found with the provided ID'
    /* #swagger.parameters['_id'] = {
        description: "Id of the desired nyBreak.",
        required: true,
        type: "string",
        schema: "636c889a2a02ef8e6e9f50e6"
} */

    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/User' }
} */
    const conditions = {_id: new mongo.ObjectId(req.params._id)};
    const nyBreak = await Breaks.findOne(conditions)
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)));
    if(nyBreak) {
        res.send(nyBreak);
    } else {
        next("User not found.");
    }
};

exports.create = async (req, res) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Create nyBreak and return ID. All fields are required.'
    // #swagger.description = 'This endpoint creates a nyBreak and returns the newly created nyBreak ID.'
    /*  #swagger.parameters['Breaks'] = {
                    in: 'body',
                    description: 'Model of the new nyBreak.',
                    schema: { $ref: '#/definitions/User' }
            } */
    /* #swagger.responses[201] = {
    description: 'User successfully created.',
    schema: "Newly created User ID"
} */
    const nyBreak = await Breaks.create(req.body);
    res.status(201).send(nyBreak._id);
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Update nyBreak.'
    // #swagger.description = 'This endpoint updates a nyBreak. All fields are required for a successful update.'
    /*  #swagger.parameters['Breaks'] = {
                in: 'body',
                description: 'Model of the new nyBreak.',
                schema: { $ref: '#/definitions/User' }
        } */
    const _id = req.params._id;
    await Breaks.findByIdAndUpdate(_id, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Delete nyBreak.'
    // #swagger.description = 'This endpoint deletes a nyBreak if a valid ID is passed.'
    const _id = req.params._id;
    await Breaks.findByIdAndDelete(_id);
    res.sendStatus(200)
};
