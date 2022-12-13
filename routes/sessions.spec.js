const request = require('supertest');
const express = require('express');
const mockingoose = require("mockingoose");
const bodyParser = require('body-parser')
const Session = require("./../db/models/sessions.js");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/sessions", require("./sessions.js"));


describe('GET /sessions', function () {
    it('should get all sessions', function (done) {
        const _doc = {
            "_id": "6397f6ec5479670d43af3969",
            name: "Go for a walk",
            description: "Go for a walk to air your brain and exercise.",
            _userId: "61a921f6028954d4f0319e72",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z"
        };

        mockingoose(Session).toReturn(_doc, 'find');
        request(app)
            .get('/sessions')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should get session', function (done) {
        const _doc = {
            "_id": "6397f6ec5479670d43af3969",
            name: "Go for a walk",
            description: "Go for a walk to air your brain and exercise.",
            _userId: "61a921f6028954d4f0319e72",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z"
        };
        mockingoose(Session).toReturn(_doc, 'findOne');
        request(app)
            .get('/sessions/6397f6ec5479670d43af3969')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should create session', function (done) {
        const body = {
            _id: "6398092437a44c8dbd5598bb",
            name: "Style buttons",
            taskIds: ["6397f6ec5479670d43af3968"],
            _userId: "61a921f6028954d4f0319e72",
            startDate: "2019-02-25T20:52:58.000Z",
            endDate: "2019-02-25T21:52:58.000Z",
            description: "Go for a walk to air your brain and exercise.",
            breakIds: ["6397f6ec5479670d43af3969"],
            status: "In progress",
        };
        const _doc = body;

        mockingoose(Session).toReturn(_doc, 'save');
        request(app)
            .post('/sessions')
            .send(body)
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should update session', function (done) {
        const body = {
            _id: "6398092437a44c8dbd5598bb",
            name: "Style buttons",
            taskIds: ["6397f6ec5479670d43af3968"],
            _userId: "61a921f6028954d4f0319e72",
            startDate: "2019-02-25T20:52:58.000Z",
            endDate: "2019-02-25T21:52:58.000Z",
            description: "Go for a walk to air your brain and exercise.",
            breakIds: ["6397f6ec5479670d43af3969"],
            status: "In progress",
        };
        const _doc = body;

        mockingoose(Session).toReturn(_doc, 'findByIdAndUpdate');
        request(app)
            .put('/sessions/6397f6ec5479670d43af3969')
            .send(body)
            .expect(204)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should delete session', function (done) {
        const _doc = null;
        mockingoose(Session).toReturn(_doc, 'findByIdAndDelete');
        request(app)
            .delete('/sessions/6397f6ec5479670d43af3969')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
})
