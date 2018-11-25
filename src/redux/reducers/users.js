import CNST from '../constants/';
import users from '../stores/users';

export default function(state = users, action) {
  switch (action.type) {
    case CNST.USERS.GET_USERS.FETCH:
      return { ...state, fetching: true };
    case CNST.USERS.GET_USERS.SUCCESS:
      return { ...state, fetching: false, data: action.payload };
    case CNST.USERS.GET_USERS.ERROR:
      return { ...state, fetching: false };
    default:
      return state;
  }
}
