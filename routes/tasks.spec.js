const request = require('supertest');
const express = require('express');
const mockingoose = require("mockingoose");
const bodyParser = require('body-parser')
const Task = require("./../db/models/tasks.js");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/tasks", require("./tasks.js"));


describe('GET /tasks', function () {
    it('should get all tasks', function (done) {
        const _doc = {
            _id: "6398092437a44c8dbd5598bb",
            _userId: "61a921f6028954d4f0319e72",
            email: "a@gmail.com",
            name: "Style buttons",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z",
            description: "Go for a walk to air your brain and exercise.",
        };

        mockingoose(Task).toReturn(_doc, 'find');
        request(app)
            .get('/tasks')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should get task', function (done) {
        const _doc = {
            _id: "6398092437a44c8dbd5598bb",
            _userId: "61a921f6028954d4f0319e72",
            email: "a@gmail.com",
            name: "Style buttons",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z",
            description: "Go for a walk to air your brain and exercise.",
        };
        mockingoose(Task).toReturn(_doc, 'findOne');
        request(app)
            .get('/tasks/6397f6ec5479670d43af3969')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should create task', function (done) {
        const body = {
            _id: "6398092437a44c8dbd5598bb",
            _userId: "61a921f6028954d4f0319e72",
            email: "a@gmail.com",
            name: "Style buttons",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z",
            description: "Go for a walk to air your brain and exercise.",
        };
        const _doc = body;

        mockingoose(Task).toReturn(_doc, 'save');

        request(app)
            .post('/tasks')
            .send(body)
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should update task', function (done) {
        const body = {
            _id: "6398092437a44c8dbd5598bb",
            _userId: "61a921f6028954d4f0319e72",
            email: "a@gmail.com",
            name: "Style buttons",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z",
            description: "Go for a walk to air your brain and exercise.",
        };
        const _doc = body;

        mockingoose(Task).toReturn(_doc, 'findByIdAndUpdate');
        request(app)
            .put('/tasks/6397f6ec5479670d43af3969')
            .send(body)
            .expect(204)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });

    it('should delete task', function (done) {
        const _doc = null;
        mockingoose(Task).toReturn(_doc, 'findByIdAndDelete');
        request(app)
            .delete('/tasks/6397f6ec5479670d43af3969')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
})
