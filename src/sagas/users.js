import { call, put } from 'redux-saga/effects';
import CNST from '../redux/constants';
import api from '../config/api';

export function* getUsers(props) {
  try {
    const response = yield call(api.getUsers, props.payload);
    console.log('response', response);
    yield put({ type: CNST.USERS.GET_USERS.SUCCESS, user: response.data });
  } catch (error) {
    yield put({ type: CNST.USERS.GET_USERS.ERROR, error });
  }
}
