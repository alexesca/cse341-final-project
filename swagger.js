const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: "localhost:3000",
    // host: "scripts-io.onrender.com",
    swaggerUIPath: '/api-docs',
    schemes: ['http'],
    // schemes: ['https'],
    "securityDefinitions": {
        "oauth": {
            "type": "oauth2",
            "authorizationUrl": "https://scripts-io.onrender.com/login/github",

        }
    },
    definitions: {
        Users: [{
            "email" : "m@gmail.com",
            "name" : "Miguel",
            "phoneNumber" : "208-109-8899",
        }],
        User: {
            "email" : "m@gmail.com",
            "name" : "Miguel",
            "phoneNumber" : "208-109-8899",
        },
        Technologies: [{
            "_id" : "6375c691fdc424f3222d320f",
            "name" : "Angular",
            "description" : "Front-framewor developed by google.",
            "logo" : "angular.jpg",
        }],
        Technology: {
            "name" : "Angular",
            "description" : "Front-framewor developed by google.",
            "logo" : "angular.jpg",
        },
        Scripts: [{
            "_userId" : "6375c50e3b3e912a359a2e35",
            "name" : "Create ng lib",
            "description" : "Creates an angular lib.",
            "script" : "nx g @nrwl/angular:lib [name] --directory=scheduler/",
            "date" : "2022-09-16T06:00:00.000+0000",
            "shortName" : "ng lib",
        }],
        Script: {
            "_userId" : "6375c50e3b3e912a359a2e35",
            "name" : "Create ng lib",
            "description" : "Creates an angular lib.",
            "script" : "nx g @nrwl/angular:lib [name] --directory=scheduler/",
            "date" : "2022-09-16T06:00:00.000+0000",
            "shortName" : "ng lib",
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['app.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
