import { call, put } from 'redux-saga/effects';
import CNST from '../redux/constants';
import api from '../config/api';

export function* getUsers(props) {
  try {
    const response = {
      data: { id: 12 }
    };
    //const response = yield call(api.getUsers, props.payload);
    yield put({ type: CNST.USERS.GET_USERS.SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: CNST.USERS.GET_USERS.ERROR, error });
  }
}
