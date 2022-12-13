const middleware = require('./validate-user.middleware.js');

describe('Validate User Middleware', () => {
    describe('Validate User specs', validateUserSpecs);
    describe('Validate Breaks specs', validateBreaksSpecs);
})


function validateUserSpecs() {
    it('should accept valid user', function () {
        const req = {
            body: {
                email: 'a@gmail.com',
                name: 'Alexander Escamilla'
            }
        };
        const res = {};
        const next = (e) => {
            expect(e).toBeUndefined();
        }
        middleware.validate(req, res, next)
    });

    it('should reject invalid user', function () {
        const req = {
            body: {
                name: 'Alexander Escamilla'
            }
        };
        const res = {};
        const next = (e) => {
            expect(e).toBe("All fields are required.");
        }
        middleware.validate(req, res, next)
    });

    it('should reject missing user', function () {
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


function validateBreaksSpecs() {
    it('should accept valid break', function () {
        const req = {
            body: {
                "_id": "6397f6ec5479670d43af3969",
                name: "Go for a walk",
                description: "Go for a walk to air your brain and exercise.",
                _userId: "61a921f6028954d4f0319e72",
                createdAt: "2019-02-25T20:52:58.000Z",
                dueDate: "2019-02-25T21:52:58.000Z"
            }
        };
        const res = {};
        const next = (e) => {
            expect(e).toBeUndefined();
        }
        middleware.validateBreak(req, res, next)
    });

    it('should reject invalid break', function () {
        const req = {
            body: {
                "_id": "6397f6ec5479670d43af3969",
                description: "Go for a walk to air your brain and exercise.",
                _userId: "61a921f6028954d4f0319e72",
                createdAt: "2019-02-25T20:52:58.000Z",
                dueDate: "2019-02-25T21:52:58.000Z"
            }
        };
        const res = {};
        const next = (e) => {
            expect(e).toBe("All fields are required.");
        }
        middleware.validateBreak(req, res, next)
    });

    it('should reject missing break', function () {
        try {
            const req = {};
            const res = {};
            const next = () => null;
            middleware.validateBreak(req, res, next);
        } catch (e) {
            expect(e).toBeDefined();
        }
    });
}
