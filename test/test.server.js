import React from 'react'
import ReactDOM from 'react-dom'
import chai from 'chai'
import chaiHttp from 'chai-http'
import request from 'supertest'
import app from '../server/app'

const should = chai.should()

chai.use(chaiHttp)

describe('Form submission', () => {
  console.log('[][][][][][]what is app[][][][][]', app)
  console.log(app.app)
  // User submission goes to mongoDB
  it('POST request to mongoDB', (done) => {

    chai.request(app)
      .post('http:localhost:3001/send/userdata')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  // User submission goes to Sendgrid and user gets email
  it('POST request to Sendgrid so user gets an email', (done) => {
    chai.request(app.app)
      .post('http:localhost:3001/send/confirmationmail')
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  //User submission goes to Sendgrid and notify owner of user submission
  it('POST request to Sendgrid so owner gets an email', (done) => {
    chai.request(app)
      .post('http:localhost:3001/send/confirmationmail')
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  //User submission goes to Sendgrid and gets added to Sendgrid contact database
  it('POST request to Sendgrid so user contact info gets added to Sendgrid contact database', (done) => {
    chai.request(app)
      .post('http:localhost:3001/send/confirmationmail')
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
})
