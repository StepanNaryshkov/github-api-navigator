import CNST from '../constants/';

export function getUsers(data) {
  return {
    type: CNST.USERS.GET_USERS.FETCH,
    payload: data
  };
}
