import axios from 'axios';
import { FETCH_REPORTS, FETCH_REPORT } from './types';

export const fetchReports = () => async dispatch => {
  const res = await axios.get('/api/reports');
  dispatch({ type: FETCH_REPORTS, payload: res.data });
};

export const fetchReport = (id) => async dispatch => {
  const res = await axios.get('/api/reports/' + id);
  dispatch({ type: FETCH_REPORT, payload: res.data });
};

export const submitReport = (values, history) => async dispatch => {
  const res = await axios.post('/api/reports', values);
  history.push('/fetch-data');
  // This might come back to bite you
  dispatch({ type: FETCH_REPORT, payload: res.data });
};