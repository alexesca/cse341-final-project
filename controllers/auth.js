var request = require("request");

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
    var options = { method: 'POST',
        url: process.env.AUTH_URL,
        headers: { 'content-type': 'application/json' },
        body: {
        "client_id": process.env.AUTH_CLIENT_ID,
            "client_secret": process.env.AUTH_CLIENT_SECRET,
            "audience": process.env.AUTH_AUDIENCE,
            "grant_type":"client_credentials"
    }
    };
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) reject(error);
            resolve(body)
        });
    });
};

