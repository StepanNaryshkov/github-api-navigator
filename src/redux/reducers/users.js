import CNST from '../constants/';

export default function(state = [], action) {
  switch (action.type) {
    case CNST.USERS.GET_USERS.FETCH:
      return { ...state, fetching: true };
    case CNST.USERS.GET_USERS.SUCCESS:
      return { ...state, fetching: true, users: action.payload };
    case CNST.USERS.GET_USERS.ERROR:
      return { ...state, fetching: false };
    default:
      return state;
  }
}
