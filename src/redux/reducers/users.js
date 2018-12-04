import produce from 'immer';
import CNST from '../constants/';
import users from '../stores/users';

export default produce(function(state = users, action) {
  switch (action.type) {
    case CNST.USERS.GET_USERS.FETCH:
      state.fetching = false;
      return;
    case CNST.USERS.GET_USERS.SUCCESS:
      state.fetching = false;
      state.data = action.payload;
      return;
    case CNST.USERS.GET_USERS.ERROR:
      return { error: true };
    default:
      return state;
  }
});
