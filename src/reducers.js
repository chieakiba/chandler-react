import { combineReducers } from 'redux'
import modalReducers from './components/modals/modalReducers'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
  modals: modalReducers,
  form: formReducer,
  toastr: toastrReducer
})
