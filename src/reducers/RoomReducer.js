import {
  ROOM_ENTERED,
  ROOM_LEFT,
  ROOM_WILL_ENTER,
  ROOM_NAME_CHANGED,
  VIDEO_IS_PLAYING,
} from '../actions/types';

const INITIAL_STATE = {
  roomName: '',
  nowPlaying: {},
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOM_NAME_CHANGED:
      return { ...state, roomName: action.payload };
    case ROOM_WILL_ENTER:
      return { ...state, isLoading: true };
    case ROOM_ENTERED:
      return { ...state,
        nowPlaying: action.payload,
      };
    case ROOM_LEFT:
      return INITIAL_STATE;
    case VIDEO_IS_PLAYING:
      console.log('Video playing', action.payload);
      return { ...state, nowPlaying: action.payload };
    default:
      return state;
  }
};
