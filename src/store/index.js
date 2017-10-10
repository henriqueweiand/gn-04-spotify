import { combineReducers } from 'redux';
import navReducer from 'navigation/reducer';
import configureStore from './configureStore';
import rootSaga from './sagas';

/* Reducers */
import { reducer as trendingSongs } from './ducks/trending-songs';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    trendingSongs,
  });

  return configureStore(rootReducer, rootSaga);
};
