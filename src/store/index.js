// import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  // const rootReducer = combineReducers({});

  return configureStore(() => {}, rootSaga);
};
