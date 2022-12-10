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
}
