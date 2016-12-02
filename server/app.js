var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var config = require('./../config')
var mongoose = require('mongoose')
var User = require('./models/userdata');
mongoose.Promise = global.Promise;

var helper = require('sendgrid').mail;
var sg = require('sendgrid')(config.keys.APIKEY);
var app = express()

mongoose.connect('mongodb://localhost:27017/userdata');

app.use(express.static('build/js'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Send user data to mongoDB
app.post('/send/userdata', function(req, res) {
  User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth
  }, function(err, user) {
    console.log(user)
    if(err) {
      return res.status(500).json({
        message: 'Internal server error'
      });
    }
    res.status(200).json(user)
  })
})

//Send email to the owner and user when the user submits the request invite form
app.post('/send/confirmationmail', function(req, res) {
  // ==============================
  // SENGRID ~ EMAIL
  // ==============================

  //Send email to user when they submit
  var fromEmail = new helper.Email('noreply@email.com');
  var toEmail = new helper.Email(req.body.email);
  var subject = 'Thanks for registering!';
  var content = new helper.Content('text/html', `Hi ${req.body.firstName},<br><br>Thanks for registering. Our team will review your application and contact you soon.`);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function(err, res) {
    console.log(res.statusCode);
    console.log(res.body);
    console.log(res.headers);
    console.log(err);
  });

  //Send invited user info to owner
  var to_InviteEmail = new helper.Email(config.keys.email);
  var from_InviteEmail = new helper.Email(req.body.email);
  var subject_Invite = 'New form submission from ' + req.body.firstName + ' ' + req.body.lastName;
  var invitedContent = new helper.Content('text/html',
  //Need to change the body of this email. Discuss with owner
    'Name: ' + req.body.firstName + ' ' + req.body.lastName +
    '<br>Email: ' + req.body.email +
    '<br>Date of Birth: ' + req.body.dateOfBirth
  );
  var userInviteInfo = new helper.Mail(from_InviteEmail, subject_Invite, to_InviteEmail, invitedContent);
  var invitedInfo = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: userInviteInfo.toJSON(),
  });

  sg.API(invitedInfo, function(err, res) { // eslint-disable-line
    console.log(res.statusCode); // eslint-disable-line
    console.log(res.body); // eslint-disable-line
    console.log(res.headers); // eslint-disable-line
    console.log(err); // eslint-disable-line
  });

  //Add registered user information to Sendgrid contact database
  var userInfo = sg.emptyRequest()
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
  sg.API(userInfo, function(error, response) { // eslint-disable-line
    console.log(response.statusCode) // eslint-disable-line
    console.log(response.body) // eslint-disable-line
    console.log(response.headers) // eslint-disable-line
  })
  res.sendStatus(200)
})

app.listen(process.env.PORT || 3001, () => console.log('SERVER running on port 3001'));

exports.app = app
