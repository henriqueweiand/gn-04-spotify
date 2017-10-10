import { combineReducers } from 'redux';
import navReducer from 'navigation/reducer';
import configureStore from './configureStore';
import rootSaga from './sagas';

/* Reducers */
import { reducer as trendingSongs } from './ducks/trending-songs';
import { reducer as recommendedAlbums } from './ducks/recommended-albums';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    trendingSongs,
    recommendedAlbums,
  });

  return configureStore(rootReducer, rootSaga);
};
