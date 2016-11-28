import React from 'react'
import ReactDOM from 'react-dom'
import App from './../src/App'
// import { should } from 'chai'
// import nock from 'nock'
// import axios from 'axios'
// import configureMockStore from 'redux-mock-store'
// import * as types from './../src/components/modal/modalActions'
// import thunk from 'redux-thunk'
//
// const middlewares = [ thunk ];
// const mockStore = configureMockStore(middlewares);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//User submission goes to mongoDB
// it('POST request to mongoDB', () => {
//   nock('http://localhost:3000')
//     axios.post('/send/userdata')
//     .reply(200, { user: {
//       firstName: form.values.firstName,
//       lastName: form.values.lastName,
//       email: form.values.email,
//       dateOfBirth: form.values.dateOfBirth
//     }
//   })
// });
//User submission goes to Sendgrid and user gets email
// it('POST request to Sendgrid so user gets an email', () => {});
// //User submission goes to Sendgrid and notify owner of user submission
// it('POST request to Sendgrid so owner gets an email', () => {});
// //User submission goes to Sendgrid and gets added to Sendgrid contact database
// it('POST request to Sendgrid so user contact info gets added to Sendgrid contact database', () => {});
