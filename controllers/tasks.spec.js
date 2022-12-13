const mockingoose = require('mockingoose');

const Task = require('./../db/models/tasks.js');
const Controller = require('./tasks');


describe('Task Model Specs', () => {
    describe('Find Tasks Specs ', findUsersSpecs);
});

function findUsersSpecs() {
    it('should return the doc with find',  (done) => {
        try {
            let myBreak;
            const req = {};
            const res = {
                send: u => myBreak = u
            }
            const _doc = {
                _id: '507f191e810c19729de860ea',
                name: 'name',
                email: 'name@email.com',
            };

            mockingoose(Task).toReturn(_doc, 'find');

            Controller.index(req, res)
                .then(() => {
                    expect(myBreak).toEqual(_doc);
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
                _id: "6398092437a44c8dbd5598bb",
                _userId: "61a921f6028954d4f0319e72",
                email: "a@gmail.com",
                name: "Style buttons",
                createdAt: "2019-02-25T20:52:58.000Z",
                dueDate: "2019-02-25T21:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
            };
            const next = () => {
                throw "Should not hit next."
            }

            mockingoose(Task).toReturn(_doc, 'findOne');

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
                _id: "6398092437a44c8dbd5598bb",
                _userId: "61a921f6028954d4f0319e72",
                email: "a@gmail.com",
                name: "Style buttons",
                createdAt: "2019-02-25T20:52:58.000Z",
                dueDate: "2019-02-25T21:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
            };
            const req = {body};
            const res = {
                status: function (code) {
                    return this
                },
                send: u => mySession = u
            }
            const _doc = body;

            mockingoose(Task).toReturn(_doc, 'save');

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
                _id: "6398092437a44c8dbd5598bb",
                _userId: "61a921f6028954d4f0319e72",
                email: "a@gmail.com",
                name: "Style buttons",
                createdAt: "2019-02-25T20:52:58.000Z",
                dueDate: "2019-02-25T21:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
            };
            const req = {body, params: {"_id": "6397f6ec5479670d43af3969"}};
            const res = {
                sendStatus: u => mySession = u
            }
            const _doc = body;

            mockingoose(Task).toReturn(_doc, 'findByIdAndUpdate');

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

            mockingoose(Task).toReturn(_doc, 'findByIdAndDelete');

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
