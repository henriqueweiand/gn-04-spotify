import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  playerSetSongRequest: ['song', 'list'],
  playerSetSongSuccess: ['song', 'list'],
  playerSetSongFailure: null,
  playerPlay: null,
  playerPause: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  song: null,
  paused: false,
  list: [],
  error: null,
  loading: false,
};

/* Reducers */

export const setSongRequest = state => ({ ...state, loading: true });

export const setSongSuccess = (state, action) => ({
  song: action.song,
  paused: false,
  list: action.list,
  error: null,
  loading: false,
});

export const setSongFailure = state => ({
  ...state,
  error: true,
  loading: false,
});

export const play = state => ({
  ...state,
  paused: false,
});

export const pause = state => ({
  ...state,
  paused: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAYER_SET_SONG_REQUEST]: setSongRequest,
  [Types.PLAYER_SET_SONG_SUCCESS]: setSongSuccess,
  [Types.PLAYER_SET_SONG_FAILURE]: setSongFailure,
  [Types.PLAYER_PLAY]: play,
  [Types.PLAYER_PAUSE]: pause,
});
