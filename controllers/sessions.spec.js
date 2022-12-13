const mockingoose = require('mockingoose');

const Session = require('./../db/models/sessions.js');
const Controller = require('./sessions');


describe('Session Model Specs', () => {
    describe('Find Sessions Specs ', findUsersSpecs);
});

function findUsersSpecs() {
    it('should return the doc with find',  (done) => {
        try {
            let mySession;
            const req = {};
            const res = {
                send: u => mySession = u
            }
            const _doc = {
                "_id": "63980a5d4f793e66e0aca9e0",
                name: "Style buttons",
                taskIds: ["6397f6ec5479670d43af3968"],
                _userId: "61a921f6028954d4f0319e72",
                startDate: "2019-02-25T20:52:58.000Z",
                endDate: "2019-02-25T21:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
                breakIds: ["6397f6ec5479670d43af3969"],
                status: "In progress",
            };

            mockingoose(Session).toReturn(_doc, 'find');

            Controller.index(req, res)
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

    it('should return the doc with findById',  (done) => {
        try {
            let mySession;
            const req = {params: {_id: "6397f6ec5479670d43af3969"}};
            const res = {
                send: u => mySession = u
            }
            const _doc = {
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
            const next = () => {
                throw "Should not hit next."
            }

            mockingoose(Session).toReturn(_doc, 'findOne');

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
                _id: "6397f6ec5479670d43af3967",
                name: "Style buttons",
                taskIds: ["6397f6ec5479670d43af3968"],
                _userId: "61a921f6028954d4f0319e72",
                startDate: "2019-02-25T20:52:58.000Z",
                endDate: "2019-02-25T21:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
                breakIds: ["6397f6ec5479670d43af3969"],
                status: "In progress",
            };
            const req = {body};
            const res = {
                status: function (code) {
                    return this
                },
                send: u => mySession = u
            }
            const _doc = body;

            mockingoose(Session).toReturn(_doc, 'save');

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
                _id: "6397f6ec5479670d43af3967",
                name: "Style buttons",
                taskIds: ["6397f6ec5479670d43af3968"],
                _userId: "61a921f6028954d4f0319e72",
                startDate: "2019-02-25T20:52:58.000Z",
                endDate: "2019-02-25T21:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
                breakIds: ["6397f6ec5479670d43af3969"],
                status: "In progress",
            };
            const req = {body, params: {"_id": "6397f6ec5479670d43af3969"}};
            const res = {
                sendStatus: u => mySession = u
            }
            const _doc = body;

            mockingoose(Session).toReturn(_doc, 'findByIdAndUpdate');

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

            mockingoose(Session).toReturn(_doc, 'findByIdAndDelete');

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
