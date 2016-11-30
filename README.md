##Fullstack Website Example
Thinkful capstone project that uses HTML5, CSS3 and React/Redux for the front-end; and ExpressJS and NodeJS as the webserver and MongoDB as the database. Mocha and Chai were used for testing.<br>
Sendgrid API is used to send emails to users who fill out the form for registration and to store their info in the Sendgrid contact database.<br>

This website demonstrates the form submission and data creation/storage using redux-form (https://github.com/erikras/redux-form), react-redux-toastr (https://github.com/diegoddox/react-redux-toastr) and mongoDB. I hope this will help people who wanted to see an example of form modals and submissions using React Redux.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

##How this works
A modal shows up once the user clicks on the registration button. Once the user finishes entering their information, the user will receive a response stating either the submission was successful or unsuccessful. If the submission was not successful, the modal will not disappear to allow the user to hit submit again.<br>
If the submission is successful, the user will receive an email stating that their form was received. The owner of the website will also receive an email stating that a user submitted a form. The user information will also be sent to mongoDB, creating a new user data field in the collection.
