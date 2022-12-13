const request = require('supertest');
const express = require('express');
const mockingoose = require("mockingoose");
const bodyParser = require('body-parser')
const User = require("./../db/models/users.js");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/users", require("./users.js"));


describe('GET /users', function () {
    it('should get all users', function (done) {
        const _doc = {
            email: 'a@gmail.com',
            name: 'Alexander Escamilla'
        };

        mockingoose(User).toReturn(_doc, 'find');
        request(app)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should get user', function (done) {
        const _doc = {
            email: 'a@gmail.com',
            name: 'Alexander Escamilla'
        };
        mockingoose(User).toReturn(_doc, 'findOne');
        request(app)
            .get('/users/6397f6ec5479670d43af3969')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should create user', function (done) {
        const body = {
            email: 'a@gmail.com',
            name: 'Alexander Escamilla'
        };
        const _doc = body;

        mockingoose(User).toReturn(_doc, 'save');
        request(app)
            .post('/users')
            .send(body)
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should update user', function (done) {
        const body = {
            email: 'a@gmail.com',
            name: 'Alexander Escamilla'
        };
        const _doc = body;

        mockingoose(User).toReturn(_doc, 'findByIdAndUpdate');
        request(app)
            .put('/users/6397f6ec5479670d43af3969')
            .send(body)
            .expect(204)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
    it('should delete user', function (done) {
        const _doc = null;
        mockingoose(User).toReturn(_doc, 'findByIdAndDelete');
        request(app)
            .delete('/users/6397f6ec5479670d43af3969')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });

    });
})
