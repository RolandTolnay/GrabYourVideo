import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ROOM_ENTERED,
  ROOM_LEFT,
  ROOM_WILL_ENTER,
  ROOM_NAME_CHANGED,
} from './types';

export const enterRoom = (roomName) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: ROOM_WILL_ENTER });
    firebase.database().ref(`/rooms/${roomName}/participants/${currentUser.uid}`)
      .set(true)
      .then(() => {
        firebase.database().ref(`/rooms/${roomName}/nowPlaying`).once('value')
          .then((snapshot) => {
            const nowPlaying = snapshot.val() || {};
            dispatch({
              type: ROOM_ENTERED,
              payload: nowPlaying,
            });
            Actions.roomContent({ title: "Room: " + roomName });
          });
      });
  };
};

export const leaveRoom = (roomName) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/rooms/${roomName}/participants/${currentUser.uid}`)
      .remove()
      .then(() => {
        dispatch({ type: ROOM_LEFT });
        Actions.roomEntry({ type: 'reset' });
      });
  };
};

export const roomNameChanged = (roomName) => ({
    type: ROOM_NAME_CHANGED,
    payload: roomName,
   });
