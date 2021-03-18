import axios from 'axios';
import { FETCH_REPORTS, FETCH_REPORT } from './types';

export const fetchReports = () => async dispatch => {
  const res = await axios.get('/api/reports');
  dispatch({ type: FETCH_REPORTS, payload: res.data });
};

export const fetchReport = (id) => async dispatch => {
  const res = await axios.get('/api/reports/' + id);
  console.log(res);
  dispatch({ type: FETCH_REPORT, payload: res.data });
};