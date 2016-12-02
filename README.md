##Fullstack Website Example
This project expresses my love for bacon and uses HTML5, CSS3 and React/Redux for the front-end; and ExpressJS and NodeJS in the backend and MongoDB as the database. Mocha and Chai were used for testing.<br>
Sendgrid API is used to send emails to users who fill out the form for registration and to store their info in the Sendgrid contact database.<br>

This website demonstrates the form submission and data creation/storage using redux-form (https://github.com/erikras/redux-form), react-redux-toastr (https://github.com/diegoddox/react-redux-toastr) and mongoDB. I hope this will help people who wanted to see an example of form modals and submissions using React Redux.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Photo credit: https://unsplash.com/search/pigs?photo=UzbSX5-PeTE

![Imgur](http://i.imgur.com/PIwa3wf.jpg)

##How this works
A modal shows up once the user clicks on the registration button.<br>
![Imgur](http://i.imgur.com/TjqVyDf.jpg)

The form forces the user to enter all the input field information and if they don't, **REQUIRED** will show up in red at the bottom of the input field the user missed.<br>
![Imgur](http://i.imgur.com/kGEhF2K.jpg)

Once the user finishes entering their information, the user will receive a response stating either the submission was successful or unsuccessful.

**Example of a successful submission:**<br>
![Imgur](http://i.imgur.com/UqGTWfJ.jpg)

**Example of an unsuccessful submission:**<br>
![Imgur](http://i.imgur.com/1qRV0E7.jpg)

If the submission was not successful, the modal will not disappear to allow the user to hit submit again.<br>
If the submission is successful, the user will receive an email stating that their form was received. The owner of the website will also receive an email stating that a user submitted a form. The user information will also be sent to mongoDB, creating a new user data field in the collection.

##Getting started
**Set Up**<br>
Create a free account on Sendgrid (https://sendgrid.com/) and create your own API Key. Make sure to save your API Key somewhere safe. All steps on how to get your very own API Key is here: https://sendgrid.com/docs/Classroom/Basics/API/what_is_my_api_key.html To save your API Key, create a config.js file by typing `touch config.js` at the root of this folder. Make sure config.js is in the .gitignore file if you're going to save it on Github!!!

Clone this repo to your desktop and run `npm install` to install all of the dependencies.

**Usage**<br>
Once all the dependencies are installed, you can run `npm start` to start the application. You should be able to launch this website via http://localhost:3000.

To start the backend, run `nodemon index.js`.

Once you do the above, you should be all set!

**Testing**<br>
To run the test, make sure you have Mocha globally installed. If not, run `npm i -g mocha` and that should globally install Mocha on your computer. Once it's finished installing, go to the server folder by typing `cd server/` and run `mocha` and it should show that the two tests I wrote will pass.
