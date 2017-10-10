import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  trendingRequest: null,
  trendingSuccess: ['data'],
  trendingFailure: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: null,
});

export const failure = () => ({
  data: [],
  loading: false,
  error: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRENDING_REQUEST]: request,
  [Types.TRENDING_SUCCESS]: success,
  [Types.TRENDING_FAILURE]: failure,
});
