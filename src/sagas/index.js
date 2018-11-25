import { takeLatest } from 'redux-saga/effects';
import CNST from '../redux/constants';
import { getUsers } from './users';

export default function* rootSaga() {
  yield takeLatest(CNST.USERS.GET_USERS.FETCH, getUsers);
}
