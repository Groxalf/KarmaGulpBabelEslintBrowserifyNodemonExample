
let request = require('basic-request');

describe('sampleTest should', () => {
    it('get a response from a fakeServer', () => {
        request.get('http://localhost:3000', (error, body) => {
            expect(response.statusCode).toBe(200);
            expect(body.foo).toBe('bar');
        });
    });
});
