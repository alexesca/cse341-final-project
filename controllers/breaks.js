const Breaks = require("./../db/models/breaks.js")
const {mongo} = require("mongoose"); //

exports.index = async (req, res) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Find all breaks.'
    // #swagger.description = 'This endpoint returns a list with all the breaks in the database.'
    /* #swagger.responses[200] = {
        description: 'Breaks successfully obtained.ser successfully obtained.',
        schema: { $ref: '#/definitions/Breaks' }
} */
    const breaks = await Breaks.find()
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)))
    res.send(breaks)
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Find break by ID.'
    // #swagger.description = 'This endpoint returns a break found with the provided ID'
    /* #swagger.parameters['_id'] = {
        description: "Id of the desired break.",
        required: true,
        type: "string",
        schema: "636c889a2a02ef8e6e9f50e6"
} */

    /* #swagger.responses[200] = {
        description: 'Break successfully obtained.',
        schema: { $ref: '#/definitions/Break' }
} */
    const conditions = {_id: new mongo.ObjectId(req.params._id)};
    const nyBreak = await Breaks.findOne(conditions)
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)));
    if(nyBreak) {
        res.send(nyBreak);
    } else {
        next("Break not found.");
    }
};

exports.create = async (req, res) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Create break and return ID. All fields are required.'
    // #swagger.description = 'This endpoint creates a break and returns the newly created break ID.'
    /*  #swagger.parameters['Breaks'] = {
                    in: 'body',
                    description: 'Model of the new break.',
                    schema: { $ref: '#/definitions/Break' }
            } */
    /* #swagger.responses[201] = {
    description: 'Break successfully created.',
    schema: "Newly created break ID"
} */
    const _break = new Breaks(req.body);
    const nyBreak = await _break.save()
    res.status(201).send(nyBreak._id);
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Update break.'
    // #swagger.description = 'This endpoint updates a break. All fields are required for a successful update.'
    /*  #swagger.parameters['Breaks'] = {
                in: 'body',
                description: 'Model of the new break.',
                schema: { $ref: '#/definitions/Break' }
        } */
    const _id = req.params._id;
    await Breaks.findByIdAndUpdate(_id, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Breaks']
    // #swagger.summary = 'Delete break.'
    // #swagger.description = 'This endpoint deletes a break if a valid ID is passed.'
    const _id = req.params._id;
    await Breaks.findByIdAndDelete(_id);
    res.sendStatus(200)
};
