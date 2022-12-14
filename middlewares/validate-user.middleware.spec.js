const middleware = require('./validate-user.middleware.js');

describe('Validate User Middleware', () => {
    describe('Validate User specs', validateUserSpecs);
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
