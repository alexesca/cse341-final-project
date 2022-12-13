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
        url: 'https://byui-cse341-final-project.us.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        body: '{"client_id":"wvgNv0AyspMzVapB5gfZoiuj0YUjWg19","client_secret":"LMgZP9iyHYw03MH9CxKZV4fBoDQ-qk4Y_vQNSmiglf89ktMgfgNG4N8ML5HusJtZ","audience":"http://localhost:3000/api-docs/","grant_type":"client_credentials"}' };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
};

