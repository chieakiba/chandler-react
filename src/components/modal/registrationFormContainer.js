import { connect } from 'react-redux'
import RegistrationModal  from './RegistrationModal'
import { submitRegistrationForm } from './modalActions'

export default connect(null, { submitRegistrationForm })(RegistrationModal)
