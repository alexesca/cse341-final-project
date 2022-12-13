var request = require("axios");

exports.create = async (req, res) => {
    // #swagger.tags = ['Auth']
    // #swagger.summary = 'Get user token with user's credentials'
    // #swagger.description = 'This endpoint gets an access token using the user's credentials.'
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
        json: true,
        body: {
        "client_id": process.env.AUTH_CLIENT_ID,
            "client_secret": process.env.AUTH_CLIENT_SECRET,
            "audience": process.env.AUTH_AUDIENCE,
            "grant_type":"client_credentials"
    }
    };
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error)  reject(error);
            else resolve(body)
        });
    });
};

