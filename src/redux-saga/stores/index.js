import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

//7. create store akan akan melakukan berupa listener untuk  mendeteksi setiap perubahan di action
//saga.run adalah fungsi untuk menjalankan listenernya

const logger = createLogger();//untuk memunculkan log setiap ada event
const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(saga, logger))
);

saga.run(rootSaga);

export default store;