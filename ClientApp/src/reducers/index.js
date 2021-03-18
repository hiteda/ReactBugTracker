import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import reportsReducer from './reportsReducer';

export default combineReducers({
  form: reduxForm,
  reports: reportsReducer
});