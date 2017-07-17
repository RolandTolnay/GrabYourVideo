import firebase from 'firebase';
import {
  VIDEO_IS_PLAYING,
} from '../actions/types';

export const playVideo = (video) => {
  return (dispatch, getState) => {
    const { roomName, nowPlaying } = getState().room;

    if (nowPlaying.id !== video.id) {
      firebase.database().ref(`/rooms/${roomName}/nowPlaying`)
        .set(video)
        .then(() => {
          dispatch({
            type: VIDEO_IS_PLAYING,
            payload: video,
          });
        });
    }
  };
};
