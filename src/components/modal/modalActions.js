import axios from 'axios'
import { toastr } from 'react-redux-toastr'

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const FORM_SENT = 'FORM_SENT'

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const toggleModal = modal => ({
  type: TOGGLE_MODAL,
  modal
});

export const submitRegistrationForm = () => {
  return (dispatch, getState) => {
    let form = getState().form.RegistrationModalForm;
    let user = {
      firstName: form.values.firstName,
      lastName: form.values.lastName,
      email: form.values.email,
      dateOfBirth: form.values.dateOfBirth,
    }
    return axios.post('https://localhost:3001/send/confirmationmail', user)
      .then(res => {
        toastr.success('success', `Welcome ${user.firstName}`)
        axios.post('https://localhost:3001/send/userdata', user)
        dispatch(closeModal())
        console.log('what is res.data', res.data)
      })
      .catch(error => {
        toastr.error('error', error)
        console.log('what is error', error)
        alert('Something went wrong! Please try entering your information again.')
      })
  }
}
