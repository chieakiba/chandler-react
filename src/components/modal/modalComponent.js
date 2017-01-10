import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalComponent = ({ show, title, closeModal, name }) => (
  <Modal show={show} bsSize="small" aria-labelledby="contained-modal-title-sm" onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-sm">{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {name}
    </Modal.Body>
  </Modal>
)

export default ModalComponent
