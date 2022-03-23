const request = require('supertest');
const app = require('../app.js');

describe('Health endpoint', function() {
    it('If health endpoints works', function() {
        request(app)
            .post('/v1/health')
            .expect(200)
            .end(function(err, res) {
                if(err) {
                    console.log(err)
                }
            })
    })
})