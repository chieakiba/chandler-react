import { connect } from 'react-redux'
import modalForm  from './modalForm'
import { submitRegistrationForm } from './modalActions'

export default connect(null, { submitRegistrationForm })(modalForm)
