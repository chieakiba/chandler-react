import { connect } from 'react-redux'
import RegistrationModal  from './RegistrationModal'
import { submitRegistrationForm, submitUserdata } from './modalActions'

export default connect(null, { submitRegistrationForm, submitUserdata })(RegistrationModal)
