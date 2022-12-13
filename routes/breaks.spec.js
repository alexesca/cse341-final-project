const request = require('supertest');
const express = require('express');
const mockingoose = require("mockingoose");
const bodyParser = require('body-parser')
const Break = require("./../db/models/breaks.js");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/breaks", require("./breaks.js"));


describe('GET /breaks', function () {
    it('should get all breaks', function (done) {
        const _doc = {
            "_id": "6397f6ec5479670d43af3969",
            name: "Go for a walk",
            description: "Go for a walk to air your brain and exercise.",
            _userId: "61a921f6028954d4f0319e72",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z"
        };

        mockingoose(Break).toReturn(_doc, 'find');
        request(app)
            .get('/breaks')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should get break', function (done) {
        const _doc = {
            "_id": "6397f6ec5479670d43af3969",
            name: "Go for a walk",
            description: "Go for a walk to air your brain and exercise.",
            _userId: "61a921f6028954d4f0319e72",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z"
        };
        mockingoose(Break).toReturn(_doc, 'findOne');
        request(app)
            .get('/breaks/6397f6ec5479670d43af3969')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should create break', function (done) {
        const body = {
            "_id": "6397f6ec5479670d43af3969",
            name: "Go for a walk",
            description: "Go for a walk to air your brain and exercise.",
            _userId: "61a921f6028954d4f0319e72",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z"
        };
        const _doc = body;

        mockingoose(Break).toReturn(_doc, 'save');
        request(app)
            .post('/breaks')
            .send(body)
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should update break', function (done) {
        const body = {
            "_id": "6397f6ec5479670d43af3969",
            name: "Go for a walk",
            description: "Go for a walk to air your brain and exercise.",
            _userId: "61a921f6028954d4f0319e72",
            createdAt: "2019-02-25T20:52:58.000Z",
            dueDate: "2019-02-25T21:52:58.000Z"
        };
        const _doc = body;

        mockingoose(Break).toReturn(_doc, 'findByIdAndUpdate');
        request(app)
            .put('/breaks/6397f6ec5479670d43af3969')
            .send(body)
            .expect(204)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should update break', function (done) {
        const _doc = null;
        mockingoose(Break).toReturn(_doc, 'findByIdAndDelete');
        request(app)
            .delete('/breaks/6397f6ec5479670d43af3969')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
})
