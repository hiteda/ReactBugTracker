import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import reportsReducer from './reportsReducer';
import reportReducer from './reportReducer';

export default combineReducers({
  form: reduxForm,
  reports: reportsReducer,
  report: reportReducer
});