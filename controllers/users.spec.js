const mockingoose = require('mockingoose');

const User = require('./../db/models/users.js');


describe('User Model Specs', () => {
    describe('Find Users Specs ', findUsersSpecs);
});

function findUsersSpecs() {
    it('should return the doc with find', () => {
        const _doc = {
            _id: '507f191e810c19729de860ea',
            name: 'name',
            email: 'name@email.com',
        };

        mockingoose(User).toReturn(_doc, 'find');

        return User.find({ _id: '507f191e810c19729de860ea' }).then(doc => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        });
    });
}
