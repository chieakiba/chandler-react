import { combineReducers } from 'redux'
import modalReducers from './components/modal/modalReducers'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
  modal: modalReducers,
  form: formReducer,
  toastr: toastrReducer
})
