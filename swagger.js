const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My Developer Productivity API',
        description: 'This is the best productivity app.',
    },
    // host: "localhost:3000",
    host: "cse341-final-project-tug6.onrender.com",
    swaggerUIPath: '/api-docs',
    // schemes: ['http'],
    schemes: ['https'],
    "securityDefinitions": {
        "oauth": {
            "type": "oauth2",
            "authorizationUrl": "https://cse341-final-project-tug6.onrender.com/login",

        }
    },
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
            "_userId" : "6375c691fdc424f3222d320g",
            "name" : "Style application menu",
            "description" : "Add styles to the application menu to match overall app theme.",
            "createdAt" : "2022-09-16T06:00:00.000+0000",
            "dueDate" : "2022-10-16T06:00:00.000+0000",
        }],
        Task: {
            "_userId" : "6375c691fdc424f3222d320g",
            "name" : "Style application menu",
            "description" : "Add styles to the application menu to match overall app theme.",
            "createdAt" : "2022-09-16T06:00:00.000+0000",
            "dueDate" : "2022-10-16T06:00:00.000+0000",
        },
        Breaks: [{
            name: "Go for a walk",
            description: "Go for a walk to air your brain and exercise.",
            _userId: "61a921f6028954d4f0319e72",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z"
        }],
        Break: {
            name: "Go for a walk",
            description: "Go for a walk to air your brain and exercise.",
            _userId: "61a921f6028954d4f0319e72",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z"
        },
        Sessions: [{
            "_userId" : "6375c50e3b3e912a359a2e35",
            "breakIds" : ["6375c50e3b3e912a359a2e35"],
            "taskIds" : ["6375c50e3b3e912a359a2e35"],
            "name" : "Monday morning session",
            "description" : "Starting your day session",
            "startDate" : "2022-09-16T06:00:00.000+0000",
            "endDate" : "2022-09-16T07:00:00.000+0000",
            "status" : "Completed",
        }],
        Session: {
            "_userId" : "6375c50e3b3e912a359a2e35",
            "breakIds" : ["6375c50e3b3e912a359a2e35"],
            "taskIds" : ["6375c50e3b3e912a359a2e35"],
            "name" : "Monday morning session",
            "description" : "Starting your day session",
            "startDate" : "2022-09-16T06:00:00.000+0000",
            "endDate" : "2022-09-16T07:00:00.000+0000",
            "status" : "Completed",
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['app.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
