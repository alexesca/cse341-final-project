const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My Developer Productivity API',
        description: 'This is the best productivity app.',
    },
    host: "localhost:3000",
    // host: "scripts-io.onrender.com",
    swaggerUIPath: '/api-docs',
    schemes: ['http'],
    // schemes: ['https'],
    definitions: {
        Users: [{
            "email" : "m@gmail.com",
            "name" : "Miguel",
        }],
        User: {
            "email" : "m@gmail.com",
            "name" : "Miguel",
        },
        Tasks: [{
            "_id" : "6375c691fdc424f3222d320f",
            "name" : "Angular",
            "description" : "Front-framewor developed by google.",
            "logo" : "angular.jpg",
        }],
        Task: {
            "name" : "Angular",
            "description" : "Front-framewor developed by google.",
            "logo" : "angular.jpg",
        },
        Sessions: [{
            "_userId" : "6375c50e3b3e912a359a2e35",
            "name" : "Create ng lib",
            "description" : "Creates an angular lib.",
            "script" : "nx g @nrwl/angular:lib [name] --directory=scheduler/",
            "date" : "2022-09-16T06:00:00.000+0000",
            "shortName" : "ng lib",
        }],
        Session: {
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
