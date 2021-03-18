import axios from 'axios';
import { FETCH_REPORTS } from './types';

export const fetchReports = () => async dispatch => {
  const res = await axios.get('/api/reports');
  console.log(res.data);
  dispatch({ type: FETCH_REPORTS, payload: res.data });
};