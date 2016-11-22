import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import config from './../config'
import mongoose from 'mongoose'
const Userdata = require('./models/userdata');

const helper = require('sendgrid').mail;
const sg = require('sendgrid')(config.APIKEY);
const app = express()

mongoose.connect('mongodb://localhost/userdata')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('build/js'));
app.use(morgan('dev'));

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Send user data to mongoDB
app.post('/send/userdata', (req, res) => {
  Userdata.update({
    user: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth
    }
  }, (err, user) => {
    if(err) {
      return res.status(500).json({
        message: 'Internal server error'
      });
    }
    res.status(201).json(user)
  })
})

//Send email to the owner and user when the user submits the request invite form
app.post('/send/confirmationmail', (req, res) => {
  // ==============================
  // SENGRID ~ EMAIL
  // ==============================

  //Send email to user when they submit
  const fromEmail = new helper.Email('noreply@chandlerhoffman.com');
  const toEmail = new helper.Email(req.body.email);
  const subject = 'Thanks for registering to Hoffman Camp!';
  const content = new helper.Content('text/html', `Hi ${req.body.firstName},<br><br>Thanks for registering to Hoffman Camp. Our team will review your application and contact you soon.`);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, (err, res) => { // eslint-disable-line
    console.log(res.statusCode); // eslint-disable-line
    console.log(res.body); // eslint-disable-line
    console.log(res.headers); // eslint-disable-line
    console.log(err); // eslint-disable-line
  });

  //Send invited user info to owner
  const to_InviteEmail = new helper.Email(config.email);
  const from_InviteEmail = new helper.Email(req.body.email);
  const subject_Invite = 'New form submission from ' + req.body.firstName + ' ' + req.body.lastName;
  const invitedContent = new helper.Content('text/html',
  //Need to change the body of this email. Discuss with owner
    'Name: ' + req.body.firstName + ' ' + req.body.lastName +
    '<br>Email: ' + req.body.email +
    '<br>Date of Birth: ' + req.body.dateOfBirth
  );
  const userInviteInfo = new helper.Mail(from_InviteEmail, subject_Invite, to_InviteEmail, invitedContent);
  const invitedInfo = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: userInviteInfo.toJSON(),
  });

  sg.API(invitedInfo, (err, res) => { // eslint-disable-line
    console.log(res.statusCode); // eslint-disable-line
    console.log(res.body); // eslint-disable-line
    console.log(res.headers); // eslint-disable-line
    console.log(err); // eslint-disable-line
  });

  //Add registered user information to Sendgrid contact database
  const userInfo = sg.emptyRequest()
  userInfo.body = [
    {
      "first_name": req.body.firstName,
      "last_name": req.body.lastName,
      "dateOfBirth": req.body.dateOfBirth,
      "email": req.body.email
    }
  ]
  userInfo.method = 'POST'
  userInfo.path = '/v3/contactdb/recipients'
  sg.API(userInfo, (error, response) => { // eslint-disable-line
    console.log(response.statusCode) // eslint-disable-line
    console.log(response.body) // eslint-disable-line
    console.log(response.headers) // eslint-disable-line
  })
  res.sendStatus(200)
})

app.listen(process.env.PORT || 3001, () => console.log('SERVER running on port 3001'));
