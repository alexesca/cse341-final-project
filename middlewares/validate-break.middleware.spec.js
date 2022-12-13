const middleware = require('./validate-break.middleware.js');

describe('Validate Middleware', () => {
    describe('Validate Breaks specs', validateBreaksSpecs);
})


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
        middleware.validate(req, res, next)
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
        middleware.validate(req, res, next)
    });

    it('should reject missing break', function () {
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
