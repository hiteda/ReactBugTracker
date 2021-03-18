import { FETCH_REPORT } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_REPORT:
      return action.payload;
    default:
      return state;
  }
}