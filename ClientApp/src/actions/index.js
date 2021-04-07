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

export const submitReport = (values, history, id) => async dispatch => {
  let res = {};
  if (id > 0) {
    res = await axios.put('/api/reports/' + id, values);
    history.push('/report/' + id);
  }
  else {
    res = await axios.post('/api/reports', values);
    history.push('/reports');
  }
  dispatch({ type: FETCH_REPORT, payload: res.data });
};