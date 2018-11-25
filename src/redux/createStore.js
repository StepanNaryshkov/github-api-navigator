import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import rootSaga from './../sagas';
import users from './stores/users';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [];
const enhancers = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));

export default () => {
  let store = createStore(
    persistedReducer,
    {
      users
    },
    compose(...enhancers)
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
