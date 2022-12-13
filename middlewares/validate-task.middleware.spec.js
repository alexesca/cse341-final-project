const middleware = require('./validate-task.middleware.js');

describe('Validate Middleware', () => {
    describe('Validate Tasks specs', validateBreaksSpecs);
})


function validateBreaksSpecs() {
    it('should accept valid task', function () {
        const req = {
            body: {
                _id: "6398092437a44c8dbd5598bb",
                _userId: "61a921f6028954d4f0319e72",
                email: "a@gmail.com",
                name: "Style buttons",
                createdAt: "2019-02-25T20:52:58.000Z",
                dueDate: "2019-02-25T21:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
            }
        };
        const res = {};
        const next = (e) => {
            expect(e).toBeUndefined();
        }
        middleware.validate(req, res, next)
    });

    it('should reject invalid task', function () {
        const req = {
            body: {
                _id: "6398092437a44c8dbd5598bb",
                _userId: "61a921f6028954d4f0319e72",
                email: "a@gmail.com",
                createdAt: "2019-02-25T20:52:58.000Z",
                dueDate: "2019-02-25T21:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
            }
        };
        const res = {};
        const next = (e) => {
            expect(e).toBe("All fields are required.");
        }
        middleware.validate(req, res, next)
    });

    it('should reject missing task', function () {
        try {
            const req = {};
            const res = {};
            const next = () => null;
            middleware.validate(req, res, next);
        } catch (e) {
            expect(e).toBeDefined();
        }
    });
}
