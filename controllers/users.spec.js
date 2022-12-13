const mockingoose = require('mockingoose');

const User = require('./../db/models/users.js');
const Controller = require('./users.js');


describe('User Model Specs', () => {
    describe('Find Users Specs ', findUsersSpecs);
});

function findUsersSpecs() {
    it('should return the doc with find',  (done) => {
        try {
            let user;
            const req = {};
            const res = {
                send: u => user = u
            }
            const _doc = {
                _id: '507f191e810c19729de860ea',
                name: 'name',
                email: 'name@email.com',
            };

            mockingoose(User).toReturn(_doc, 'find');

            Controller.index(req, res)
                .then(() => {
                    expect(user).toEqual(_doc);
                    done()
                })
                .catch(e => {
                    throw e
                });
        } catch (e) {
            done.fail(e);
        }
    });

    it('should return the doc with findById',  (done) => {
        try {
            let mySession;
            const req = {params: {_id: "6397f6ec5479670d43af3969"}};
            const res = {
                send: u => mySession = u
            }
            const _doc = {
                _id: '507f191e810c19729de860ea',
                name: 'name',
                email: 'name@email.com',
            };
            const next = () => {
                throw "Should not hit next."
            }

            mockingoose(User).toReturn(_doc, 'findOne');

            Controller.id(req, res, next)
                .then(() => {
                    expect(mySession).toEqual(_doc);
                    done()
                })
                .catch(e => {
                    throw e
                });
        } catch (e) {
            done.fail(e);
        }
    });

    it('should create break',  (done) => {
        try {
            let mySession;
            const body = {
                _id: '507f191e810c19729de860ea',
                name: 'name',
                email: 'name@email.com',
            };
            const req = {body};
            const res = {
                status: function (code) {
                    return this
                },
                send: u => mySession = u
            }
            const _doc = body;

            mockingoose(User).toReturn(_doc, 'save');

            Controller.create(req, res)
                .then(() => {
                    expect(mySession.toString()).toBe(_doc._id);
                    done()
                })
                .catch(e => {
                    throw e
                });
        } catch (e) {
            done.fail(e);
        }
    });

    it('should update break',  (done) => {
        try {
            let mySession;
            const body = {
                _id: '507f191e810c19729de860ea',
                name: 'name',
                email: 'name@email.com',
            };
            const req = {body, params: {"_id": "6397f6ec5479670d43af3969"}};
            const res = {
                sendStatus: u => mySession = u
            }
            const _doc = body;

            mockingoose(User).toReturn(_doc, 'findByIdAndUpdate');

            Controller.update(req, res)
                .then(() => {
                    expect(mySession).toBe(204);
                    done()
                })
                .catch(e => {
                    throw e
                });
        } catch (e) {
            done.fail(e);
        }
    });

    it('should delete break',  (done) => {
        try {
            let mySession;
            const req = {params: {"_id": "6397f6ec5479670d43af3969"}};
            const res = {
                sendStatus: u => mySession = u
            }
            const _doc = null;

            mockingoose(User).toReturn(_doc, 'findByIdAndDelete');

            Controller.delete(req, res)
                .then(() => {
                    expect(mySession).toBe(200);
                    done()
                })
                .catch(e => {
                    throw e
                });
        } catch (e) {
            done.fail(e);
        }
    });
}
