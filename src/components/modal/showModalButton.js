import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import ModalComponent from './modalComponent'

const checkModal = obj => {
  const modalKeys = Object.keys(obj);
  const modalToShow = modalKeys.filter(key => obj[key].show);
  return obj[modalToShow]
}

const ShowModalButton = ({ modal, toggleModal, closeModal, onSubmit, submitRegistrationForm }) => {
  const theModal = checkModal(modal)
  return (
    <div id="forms">
      <Row className="show-grid text-center">
        <Col lg={10} lgOffset={1} xs={12}>
          <Button id="register-button" name="RegisterButton" bsSize="large" onClick={() => toggleModal('RegistrationModal')}>Register</Button>
        </Col>
      </Row>
      <ModalComponent name={theModal ? theModal.modal : false} show={theModal ? theModal.show : false} title={theModal ? theModal.title : false} closeModal={() => closeModal()} submitRegistrationForm={submitRegistrationForm} />
    </div>
  )
}

export default ShowModalButton
