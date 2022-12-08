const middleware = require('./validate-id.middleware.js');

describe('Validate id middleware', () => {
    describe('Validate ID specs', validateIdSpecs);
})


function validateIdSpecs() {
    it('should accept valid ID', function () {
        const req = {
            params: {
                _id: '5b6d17206244a0f41a87dedf'
            }
        };
        const res = {};
        const next = (e) => {
            expect(e).toBeUndefined();
        }
        middleware.validate(req, res, next)
    });

    it('should reject invalid ID', function () {
        const req = {
            params: {
                _id: '123456789'
            }
        };
        const res = {};
        const next = (e) => {
            expect(e).toBe("Invalid Mongo ID");
        }
        middleware.validate(req, res, next)
    });

    it('should reject missing ID', function () {
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
