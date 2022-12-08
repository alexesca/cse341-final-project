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
}
