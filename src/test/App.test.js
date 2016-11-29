import React from 'react'
import ReactDOM from 'react-dom'
import chai from 'chai'
import chaiHttp from 'chai-http'

const should = chai.should()
const app = server.app

chai.use(chaiHttp)

describe('Form submission', () => {
  // User submission goes to mongoDB
  it('POST request to mongoDB', (done) => {
    chai.request(app)
      .post('/send/userdata')
      .end((err, res) => {
        res.should.have.status(200 || 201);
        done();
      });
  });
  // User submission goes to Sendgrid and user gets email
  it('POST request to Sendgrid so user gets an email', (done) => {
    chai.request(app)
      .post('/send/confirmationmail')
      .end((err, res) => {
        res.should.have.status(200 || 201);
        done();
      });
  });
  //User submission goes to Sendgrid and notify owner of user submission
  it('POST request to Sendgrid so owner gets an email', (done) => {
    chai.request(app)
      .post('/send/confirmationmail')
      .end((err, res) => {
        res.should.have.status(200 || 201);
        done();
      });
  });
  //User submission goes to Sendgrid and gets added to Sendgrid contact database
  it('POST request to Sendgrid so user contact info gets added to Sendgrid contact database', (done) => {
    chai.request(app)
      .post('/send/confirmationmail')
      .end((err, res) => {
        res.should.have.status(200 || 201);
        done();
      });
  });
})
