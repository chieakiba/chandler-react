var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../server/app');

var should = require('chai').should();
var app = server.app;

chai.use(chaiHttp);

describe('Form submission', function() {
  // User submission goes to Sendgrid
  it('POST request to Sendgrid so user gets an email', function(done) {
    chai.request(app)
      .post('/send/confirmationmail')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
  // User submission goes to mongoDB and creates a new user in database
  it('POST request to mongoDB to create new user in database', function(done) {
    chai.request(app)
      .post('/send/userdata')
      .send({
        firstName: 'Sam',
        lastName: 'Smith',
        email: 'test@test.com',
        dateOfBirth: '12/25/1900'
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
})
