
let request = require('superagent');

describe('sampleTest should', () => {
    it('get a response from a fakeServer', (done) => {
        request
            .get('http://localhost:3000')
            .end(function(err, res){
                expect(res.body.foo).toBe('bar');
                done();
            });
        });
});
