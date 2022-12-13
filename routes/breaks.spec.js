const request = require('supertest');
const assert = require('assert');
const express = require('express');
const mockingoose = require("mockingoose");
const Break = require("./../db/models/breaks.js");


const app = express();

app.use("/breaks", require("./breaks.js"));


describe('GET /user', function () {
    it('responds with json', function (done) {
        let myBreak;
        const req = {};
        const res = {
            send: u => myBreak = u
        }
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

    })
})
