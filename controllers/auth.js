const axios = require("axios");

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
    try {
        var config = {
            method: 'post',
            url: process.env.AUTH_URL,
            headers: {
                'content-type': 'application/json',
                "Accept-Encoding": "gzip,deflate,compress"
            },
            data: {
                "client_id": process.env.AUTH_CLIENT_ID,
                "client_secret": process.env.AUTH_CLIENT_SECRET,
                "audience": process.env.AUTH_AUDIENCE,
                "grant_type":"client_credentials"
            }
        };
        const response = await axios(config);
        res.send(response.data);
    } catch (e) {
        debugger
        throw e;
    }
};

