const mockingoose = require('mockingoose');

const Break = require('./../db/models/breaks.js');
const Controller = require('./breaks');


describe('Break Model Specs', () => {
    describe('Find Breaks Specs ', findBreakSpecs);
});

function findBreakSpecs() {
    it('should return the doc with find',  (done) => {
        try {
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

    it.only('should return the doc with findById',  (done) => {
        try {
            let myBreak;
            const req = {params: {_id: "6397f6ec5479670d43af3969"}};
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
            const next = () => {
                throw "Should not hit next."
            }

            mockingoose(Break).toReturn(_doc, 'findOne');

            Controller.id(req, res, next)
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
}
