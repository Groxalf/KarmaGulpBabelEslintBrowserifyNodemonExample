
let request = require('basic-request');

describe('sampleTest should', () => {
    it('get a response from a fakeServer', () => {
        request.get('http://localhost:3000', (error, body) => {
            expect(body.foo).toBe('bar');
        });
    });
});
