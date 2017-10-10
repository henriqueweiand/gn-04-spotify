import { call, cps, put, select } from 'redux-saga/effects';
import { NativeModules } from 'react-native';

import ActionCreators from 'store/ducks/player';

const { RNSound } = NativeModules;
const songId = 0;

export function* setSong(action) {
  const song = yield select(state => state.player.song);

  try {
    if (song !== null) {
      yield cps(RNSound.stop, songId);
    }

    yield cps(RNSound.prepare, action.song.url, songId, {});

    yield put(ActionCreators.playerSetSongSuccess(action.song, action.list));
    yield put(ActionCreators.playerPlay());
  } catch (e) {
    console.tron.log(e);
  }
}

function* playNext() {
  const { song, list } = yield select(state => state.player);
  const nextSongIndex = list.findIndex(listSong => listSong.id === song.id) + 1;

  if ((list.length - 1) >= nextSongIndex) {
    yield put(ActionCreators.playerSetSongRequest(list[nextSongIndex], list));
  } else {
    yield put(ActionCreators.playerPause());
  }
}

export function* play() {
  try {
    yield cps(RNSound.play, songId);
  } catch (e) {
    if (e === true) {
      yield call(playNext);
    } else {
      console.tron.log(e);
    }
  }
}

export function* pause() {
  try {
    yield cps(RNSound.pause, songId);
  } catch (e) {
    console.tron.log(e);
  }
}
