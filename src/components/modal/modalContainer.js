import { connect } from  'react-redux'
import ShowModalButton from './showModalButton'
import { toggleModal, closeModal, submitRegistrationForm } from './modalActions'

export default connect(
  state => ({
    modal: state.modal.modal
  }),
  { toggleModal, closeModal, submitRegistrationForm }
)(ShowModalButton);
