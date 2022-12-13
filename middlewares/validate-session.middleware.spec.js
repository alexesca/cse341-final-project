const middleware = require('./validate-session.middleware.js');

describe('Validate Middleware', () => {
    describe('Validate Breaks specs', validateBreaksSpecs);
})


function validateBreaksSpecs() {
    it('should accept valid break', function () {
        const req = {
            body: {
                _id: "6398092437a44c8dbd5598bb",
                name: "Style buttons",
                taskIds: ["6397f6ec5479670d43af3968"],
                _userId: "61a921f6028954d4f0319e72",
                startDate: "2019-02-25T20:52:58.000Z",
                endDate: "2019-02-25T21:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
                breakIds: ["6397f6ec5479670d43af3969"],
                status: "In progress",
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
                _id: "6398092437a44c8dbd5598bb",
                name: "Style buttons",
                taskIds: ["6397f6ec5479670d43af3968"],
                _userId: "61a921f6028954d4f0319e72",
                startDate: "2019-02-25T20:52:58.000Z",
                description: "Go for a walk to air your brain and exercise.",
                breakIds: ["6397f6ec5479670d43af3969"],
                status: "In progress",
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
