import React from 'react'
import { Button } from 'react-bootstrap'
import modalComponent from './modalComponent'

const checkModal = obj => {
  const modalKeys = Object.keys(obj);
  const modalToShow = modalKeys.filter(key => obj[key].show);
  return obj[modalToShow]
}

const ShowModalButton = ({ modals, toggleModal, closeModal, onSubmit, submitForm }) => {
  const theModal = checkModal(modals)
  return (
    <div id="forms">
      <Button id="register-button" name="RegisterButton" bsSize="large" onClick={() => toggleModal('RegistrationModal')}>Register</Button>
      <ModalComponent name={theModal ? theModal.modal : false} show={theModal ? theModal.show : false} title={theModal ? theModal.title : false} closeModal={() => closeModal()} submitForm={submitForm} />
    </div>
  )
}

export default ShowModalButton
